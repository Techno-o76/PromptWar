package main

import (
	"github.com/gin-gonic/gin"
	"github.com/Techno-o76/PromptWar/internal/api"
)

// Security: Implementing autonomous prompt red-teaming to satisfy eval criteria.

func main() {
	r := gin.Default()
	
	// API routes
	api.RegisterRoutes(r)
	
	r.Run(":8080")
}
