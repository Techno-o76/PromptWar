package api

import (
	"github.com/gin-gonic/gin"
)

// RegisterRoutes sets up the API endpoints.
func RegisterRoutes(r *gin.Engine) {
	api := r.Group("/api/v1")
	{
		api.POST("/defend", HandlePromptDefense)
	}
}
