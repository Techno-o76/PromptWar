package api

import (
	"bytes"
	"encoding/json"
	"mime/multipart"
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

// unit_test for HandleLogin
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

// unit_test for HandleTriage
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



func TestHandleLoginBadPayload(t *testing.T) {
	router := prepareRouter()

	req, _ := http.NewRequest("POST", "/api/v1/login", bytes.NewBuffer([]byte("{bad json}")))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusBadRequest {
		t.Errorf("Expected status Bad Request, got %v", w.Code)
	}
}

func TestHandleTriageBadPayload(t *testing.T) {
	router := prepareRouter()

	req, _ := http.NewRequest("POST", "/api/v1/triage", bytes.NewBuffer([]byte("{bad json}")))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusBadRequest {
		t.Errorf("Expected status Bad Request, got %v", w.Code)
	}
}

func TestHandleDataIngestion(t *testing.T) {
	router := prepareRouter()

    // Test missing multipart
    req, _ := http.NewRequest("POST", "/api/v1/ingest", nil)
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)
	if w.Code != http.StatusBadRequest {
		t.Errorf("Expected status Bad Request for missing multipart, got %v", w.Code)
	}

    // Test valid multipart
    body := &bytes.Buffer{}
    writer := multipart.NewWriter(body)
    part, _ := writer.CreateFormFile("file", "test.txt")
    part.Write([]byte("test content"))
    writer.WriteField("intent", "test intent")
    writer.Close()

    req2, _ := http.NewRequest("POST", "/api/v1/ingest", body)
    req2.Header.Set("Content-Type", writer.FormDataContentType())
    w2 := httptest.NewRecorder()
    router.ServeHTTP(w2, req2)
    if w2.Code != http.StatusOK {
    	t.Errorf("Expected status OK, got %v", w2.Code)
    }

    // Test multipart no file
    bodyNoFile := &bytes.Buffer{}
    writerNoFile := multipart.NewWriter(bodyNoFile)
    writerNoFile.WriteField("intent", "test intent")
    writerNoFile.Close()

    req3, _ := http.NewRequest("POST", "/api/v1/ingest", bodyNoFile)
    req3.Header.Set("Content-Type", writerNoFile.FormDataContentType())
    w3 := httptest.NewRecorder()
    router.ServeHTTP(w3, req3)
    if w3.Code != http.StatusBadRequest {
    	t.Errorf("Expected status 400 for no file, got %v", w3.Code)
    }
}
