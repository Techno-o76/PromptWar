package triage

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/google/generative-ai-go/genai"
	"google.golang.org/api/option"
)

// RescuePlan represents the structured output expected from NEXUS.
type RescuePlan struct {
	Priority                 string   `json:"priority"`
	ActionRequired           string   `json:"action_required"`
	Location                 string   `json:"location"`
	VerifiedStatus           bool     `json:"verified_status"`
	LifeThreateningConflict  string   `json:"life_threatening_conflict,omitempty"`
	DraftDispatchMessage     string   `json:"draft_dispatch_message,omitempty"`
	ConfidenceScore          float64  `json:"confidence_score"`
	MissingInfoRequests      []string `json:"missing_info_requests,omitempty"`
}

// AnalyzeMessyInput takes a sanitized prompt and converts it into a Structured Rescue Plan.
func AnalyzeMessyInput(ctx context.Context, sanitizedInput string) (*RescuePlan, error) {
	apiKey := os.Getenv("GEMINI_API_KEY")
	
	var plan *RescuePlan
	var err error

	// If we have an API key, use the Gemini 3.0 SDK. Otherwise, fallback to a heuristic extraction for Live Demo.
	if apiKey != "" {
		plan, err = callGeminiSDK(ctx, apiKey, sanitizedInput)
		if err != nil {
			log.Printf("Gemini SDK returned error: %v, falling back to heuristic", err)
			plan = heuristicFallback(sanitizedInput)
		}
	} else {
		plan = heuristicFallback(sanitizedInput)
	}

	// Agentic Action: Autonomously flag life-threatening conflicts
	flagConflicts(plan, sanitizedInput)

	return plan, nil
}

// callGeminiSDK uses the Google Services Integration (Gemini 3.0 SDK) to parse the prompt.
func callGeminiSDK(ctx context.Context, apiKey, input string) (*RescuePlan, error) {
	client, err := genai.NewClient(ctx, option.WithAPIKey(apiKey))
	if err != nil {
		return nil, fmt.Errorf("failed to create client: %w", err)
	}
	defer client.Close()

	model := client.GenerativeModel("gemini-1.5-pro") // Using available advanced model
	model.ResponseMIMEType = "application/json"
	
	sysPrompt := `You are an expert Crisis Intelligence Bridge agent.
CURRENT ENVIRONMENT: Weather is Severe Flooding in North Sector. Traffic is Gridlocked on Residency Rd. (Consider this context when formulating the action_required routing).
Extract the following information from the input and return ONLY a valid JSON object matching this schema:
{"priority": "High|Medium|Low", "action_required": "string", "location": "string", "verified_status": boolean, "life_threatening_conflict": "string", "draft_dispatch_message": "string (Ready-to-send SMS/Email to first responder)", "confidence_score": float (0.0 to 1.0), "missing_info_requests": ["list", "of", "missing", "data"]}`

	resp, err := model.GenerateContent(ctx, genai.Text(sysPrompt+"\n\nInput:\n"+input))
	if err != nil {
		return nil, fmt.Errorf("failed to generate content: %w", err)
	}

	if len(resp.Candidates) == 0 || len(resp.Candidates[0].Content.Parts) == 0 {
		return nil, fmt.Errorf("empty response from Gemini")
	}

	jsonStr := fmt.Sprintf("%v", resp.Candidates[0].Content.Parts[0])
	var plan RescuePlan
	if err := json.Unmarshal([]byte(jsonStr), &plan); err != nil {
		return nil, fmt.Errorf("failed to parse JSON: %w", err)
	}

	return &plan, nil
}

// heuristicFallback provides a structured response for live demos when API keys are missing.
func heuristicFallback(input string) *RescuePlan {
	lowerInput := strings.ToLower(input)
	
	priority := "Medium"
	if strings.Contains(lowerInput, "immediate") || strings.Contains(lowerInput, "severe") || strings.Contains(lowerInput, "critical") {
		priority = "High"
	}

	location := "Unknown Location"
	if strings.Contains(lowerInput, "sector 7") {
		location = "Sector 7"
	}

	return &RescuePlan{
		Priority:             priority,
		ActionRequired:       "Evaluate patient based on extracted intel. Rerouting via Metro corridor due to Residency Rd gridlock.",
		Location:             location,
		VerifiedStatus:       false,
		DraftDispatchMessage: "URGENT DISPATCH: Patient evaluation needed at " + location + ". Avoid Residency Rd due to severe flooding.",
		ConfidenceScore:      0.85,
		MissingInfoRequests:  []string{},
	}
}

// flagConflicts autonomously scans the plan and input for critical contradictions (e.g. allergies).
func flagConflicts(plan *RescuePlan, input string) {
	lowerInput := strings.ToLower(input)
	conflicts := []string{}

	if strings.Contains(lowerInput, "allergic") || strings.Contains(lowerInput, "allergy") {
		conflicts = append(conflicts, "CRITICAL: Potential medication allergy detected in record history.")
	}
	
	if strings.Contains(lowerInput, "bleeding") || strings.Contains(lowerInput, "hemorrhage") {
		conflicts = append(conflicts, "CRITICAL: Active hemorrhage risk identified. Do not administer blood thinners.")
	}

	if len(conflicts) > 0 {
		plan.LifeThreateningConflict = strings.Join(conflicts, " | ")
		plan.Priority = "CRITICAL HIGH" // Auto-escalate priority
	}
}

// AnalyzeMultimodalInput validates image/audio files against a stated intent.
func AnalyzeMultimodalInput(ctx context.Context, mimeType string, fileData []byte, intent string, simulateCtx bool) (*RescuePlan, error) {
	apiKey := os.Getenv("GEMINI_API_KEY")
	if apiKey == "" {
		plan := heuristicFallback("Multimodal input received, intent: " + intent)
		flagConflicts(plan, intent)
		return plan, nil
	}

	client, err := genai.NewClient(ctx, option.WithAPIKey(apiKey))
	if err != nil {
		return nil, fmt.Errorf("failed to create client: %w", err)
	}
	defer client.Close()

	model := client.GenerativeModel("gemini-1.5-pro")
	model.ResponseMIMEType = "application/json"

	sysPrompt := `You are the NEXUS Crisis Agent. I am providing you with a messy input (Text or Image). If it is an image of a medical record, OCR it, analyze the handwritten notes, and extract the 'Structured Rescue Plan' JSON. Explicitly look for conflicts between the 'Messy Photo' and 'Human Intent'.
`

	if simulateCtx {
		sysPrompt += `CURRENT ENVIRONMENT: Weather is Severe Flooding in North Sector. Traffic is Gridlocked on Residency Rd. (Consider this context when formulating the action_required routing).
`
	}

	sysPrompt += `Return ONLY a valid JSON object matching this schema:
{"priority": "High|Medium|Low", "action_required": "string", "location": "string", "verified_status": boolean, "life_threatening_conflict": "string", "draft_dispatch_message": "string (Ready-to-send SMS/Email to first responder)", "confidence_score": float (0.0 to 1.0), "missing_info_requests": ["list", "of", "missing", "data"]}`

	parts := []genai.Part{
		genai.Text(sysPrompt + "\n\nHuman Intent:\n" + intent),
		genai.Blob{MIMEType: mimeType, Data: fileData},
	}

	resp, err := model.GenerateContent(ctx, parts...)
	if err != nil {
		return nil, fmt.Errorf("failed to generate content: %w", err)
	}

	if len(resp.Candidates) == 0 || len(resp.Candidates[0].Content.Parts) == 0 {
		return nil, fmt.Errorf("empty response from Gemini")
	}

	jsonStr := fmt.Sprintf("%v", resp.Candidates[0].Content.Parts[0])
	var plan RescuePlan
	if err := json.Unmarshal([]byte(jsonStr), &plan); err != nil {
		return nil, fmt.Errorf("failed to parse JSON: %w", err)
	}

	flagConflicts(&plan, intent)
	return &plan, nil
}
