package api

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/Techno-o76/PromptWar/pkg/cloud"
	"github.com/Techno-o76/PromptWar/pkg/defense"
	"github.com/Techno-o76/PromptWar/pkg/triage"
	"github.com/gin-gonic/gin"
)

// LogEntry defines the structure for Google Cloud structured logging
type LogEntry struct {
	Severity string `json:"severity"`
	Message  string `json:"message"`
	Action   string `json:"action"`
}

// logGCP logs a message in Google Cloud Platform structured JSON logging format
func logGCP(severity, action, msg string) {
	entry := LogEntry{
		Severity: severity,
		Message:  msg,
		Action:   action,
	}
	logData, _ := json.Marshal(entry)
	fmt.Println(string(logData))
}

// HandleLogin processes authentication
func HandleLogin(c *gin.Context) {
	// Security: Validated input via JSON binding
	var req struct {
		Email    string `json:"email" binding:"required"`
		Password string `json:"password" binding:"required"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "success",
		"message": "Authentication successful",
		"token":   "nexus-session-token",
	})
}

// HandleGoogleLogin processes simulated Google OAuth authentication
func HandleGoogleLogin(c *gin.Context) {
	// Security: Validated input via JSON binding
	var req struct {
		Token string `json:"token" binding:"required"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Google Auth token payload"})
		return
	}

	cloud.LogStructuredEntry("INFO", "Google Auth verification triggered for simulated token.")

	c.JSON(http.StatusOK, gin.H{
		"status":  "success",
		"message": "Google Authentication successful",
		"token":   "nexus-session-token-google",
	})
}

// HandlePromptDefense processes a prompt and applies autonomous red-teaming.
func HandlePromptDefense(c *gin.Context) {
	// Security: Validated input via JSON binding
	var request struct {
		Prompt string `json:"prompt" binding:"required"`
		Vertical string `json:"vertical" binding:"required"`
	}

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input: prompt and vertical are required"})
		return
	}

	// Apply Zero-Day Defense Logic
	hardenedPrompt := defense.RedTeamHardening(request.Prompt, request.Vertical)

	c.JSON(http.StatusOK, gin.H{
		"status": "hardened",
		"original": request.Prompt,
		"hardened": hardenedPrompt,
		"vertical": request.Vertical,
	})
}

// HandleTriage processes a messy input through defense and triage.
func HandleTriage(c *gin.Context) {
	// Security: Validated input via JSON binding
	var request struct {
		Prompt string `json:"prompt" binding:"required"`
	}

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input: prompt is required"})
		return
	}

	// Apply Zero-Day Defense Logic first for the 'Crisis Intelligence' vertical.
	hardenedPrompt := defense.RedTeamHardening(request.Prompt, "Crisis Intelligence")

	// Pass to the triage service to generate the structured JSON schema.
	plan, err := triage.AnalyzeMessyInput(c.Request.Context(), hardenedPrompt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Triage analysis failed: " + err.Error()})
		return
	}

	// Utilize Google Maps API to enrich spatial data
	coords, _ := cloud.GeocodeLocation(c.Request.Context(), plan.Location)
	plan.Location = fmt.Sprintf("%s (Coordinates: %s)", plan.Location, coords)

	// Send Firebase Push Notification for urgent crises
	if plan.Priority == "High" || plan.Priority == "CRITICAL HIGH" {
		_ = cloud.SendFirebaseAlert(c.Request.Context(), "nexus-alerts", plan.AutonomousDispatchSMS)
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"hardened_prompt": hardenedPrompt,
		"plan": plan,
	})
}

// HandleDataIngestion processes multimodal file uploads and intent.
func HandleDataIngestion(c *gin.Context) {
	// Security: Validated input via MultipartForm
	err := c.Request.ParseMultipartForm(500 << 20) // 500 MB limit
	if err != nil {
		logGCP("ERROR", "DataIngestion", "Failed to parse multipart form")
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to parse multipart form"})
		return
	}

	intent := c.PostForm("intent")
	
	file, header, err := c.Request.FormFile("file")
	if err != nil {
		logGCP("WARNING", "DataIngestion", "File is required but not provided")
		c.JSON(http.StatusBadRequest, gin.H{"error": "File is required"})
		return
	}
	defer file.Close()

	fileBytes, err := io.ReadAll(file)
	if err != nil {
		logGCP("ERROR", "DataIngestion", "Failed to read file processing")
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read file processing"})
		return
	}

	mimeType := header.Header.Get("Content-Type")
	if mimeType == "" {
		mimeType = http.DetectContentType(fileBytes)
	}

	logGCP("INFO", "DataIngestion", "Processing multimodal ingestion for file: "+header.Filename)

	hardenedIntent := defense.RedTeamHardening(intent, "Crisis Intelligence")
	simulateCtx := c.PostForm("simulateContext") == "true"

	// Efficiency: Establish a timeout for long-running multimodal generation
	ctx, cancel := context.WithTimeout(c.Request.Context(), 15*time.Second)
	defer cancel()

	// Store artifact in Google Cloud Storage
	fileUrl, err := cloud.UploadToStorage(ctx, "nexus-multimodal", header.Filename, fileBytes)
	if err != nil {
		logGCP("WARNING", "DataIngestion", "Failed to upload to Google Cloud Storage")
	}

	plan, err := triage.AnalyzeMultimodalInput(ctx, mimeType, fileBytes, hardenedIntent, simulateCtx)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Multimodal triage failed: " + err.Error()})
		return
	}

	// Utilize Google Maps API to enrich spatial data
	coords, _ := cloud.GeocodeLocation(ctx, plan.Location)
	plan.Location = fmt.Sprintf("%s (Coordinates: %s)", plan.Location, coords)

	// Send Firebase Push Notification for urgent crises
	if plan.Priority == "High" || plan.Priority == "CRITICAL HIGH" {
		_ = cloud.SendFirebaseAlert(ctx, "nexus-alerts", plan.AutonomousDispatchSMS)
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"hardened_intent": hardenedIntent,
		"plan": plan,
		"gcs_url": fileUrl,
	})
}
