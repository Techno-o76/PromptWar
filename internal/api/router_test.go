package api

import (
	"github.com/gin-gonic/gin"
	"testing"
)

// unit_test: Validate router initialization
func TestRegisterRoutes(t *testing.T) {
	gin.SetMode(gin.TestMode)
	r := gin.New()
	RegisterRoutes(r)

	if r == nil {
		t.Errorf("Router was not initialized properly")
	}
}
