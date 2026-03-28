package api

import (
	"github.com/gin-gonic/gin"
)

// RegisterRoutes sets up the API endpoints.
func RegisterRoutes(r *gin.Engine) {
	api := r.Group("/api/v1")
	{
        api.POST("/login", HandleLogin)
		api.POST("/defend", HandlePromptDefense)
		api.POST("/triage", HandleTriage)
		api.POST("/ingest", HandleDataIngestion)
	}
}
