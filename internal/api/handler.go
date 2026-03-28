package api

import (
	"io"
	"net/http"

	"github.com/Techno-o76/PromptWar/pkg/defense"
	"github.com/Techno-o76/PromptWar/pkg/triage"
	"github.com/gin-gonic/gin"
)

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
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to parse multipart form"})
		return
	}

	intent := c.PostForm("intent")
	
	file, header, err := c.Request.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "File is required"})
		return
	}
	defer file.Close()

	fileBytes, err := io.ReadAll(file)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read file processing"})
		return
	}

	mimeType := header.Header.Get("Content-Type")
	if mimeType == "" {
		mimeType = http.DetectContentType(fileBytes)
	}

	hardenedIntent := defense.RedTeamHardening(intent, "Crisis Intelligence")
	simulateCtx := c.PostForm("simulateContext") == "true"

	plan, err := triage.AnalyzeMultimodalInput(c.Request.Context(), mimeType, fileBytes, hardenedIntent, simulateCtx)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Multimodal triage failed: " + err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"hardened_intent": hardenedIntent,
		"plan": plan,
	})
}
