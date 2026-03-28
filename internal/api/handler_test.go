package api

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
)

func prepareRouter() *gin.Engine {
	gin.SetMode(gin.TestMode)
	r := gin.Default()
	RegisterRoutes(r)
	return r
}

func TestHandleLogin(t *testing.T) {
	router := prepareRouter()

	reqPayload := map[string]string{
		"email":    "test@example.com",
		"password": "password123",
	}
	jsonVal, _ := json.Marshal(reqPayload)

	req, _ := http.NewRequest("POST", "/api/v1/login", bytes.NewBuffer(jsonVal))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("Expected status OK, got %v", w.Code)
	}
}

func TestHandleTriage(t *testing.T) {
	router := prepareRouter()

	reqPayload := map[string]string{
		"prompt": "Emergency at sector 7.",
	}
	jsonVal, _ := json.Marshal(reqPayload)

	req, _ := http.NewRequest("POST", "/api/v1/triage", bytes.NewBuffer(jsonVal))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("Expected status OK, got %v", w.Code)
	}
}
