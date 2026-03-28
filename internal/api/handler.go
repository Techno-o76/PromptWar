package api

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/Techno-o76/PromptWar/pkg/defense"
)

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
