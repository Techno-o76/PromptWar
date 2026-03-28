package cloud

import (
	"context"
	"strings"
	"testing"
)

func TestUploadToStorage(t *testing.T) {
	ctx := context.Background()
	url, err := UploadToStorage(ctx, "nexus-bucket", "test.png", []byte("dummydata"))

	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}
	if !strings.Contains(url, "storage.googleapis.com/nexus-bucket") {
		t.Errorf("Unexpected URL format: %s", url)
	}
}

func TestGeocodeLocation(t *testing.T) {
	ctx := context.Background()
	
	// Test unknown
	coords, err := GeocodeLocation(ctx, "Unknown Location")
	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}
	if coords != "12.9716, 77.5946" {
		t.Errorf("Expected default coords for Unknown Location, got %s", coords)
	}

	// Test specific
	coords2, err := GeocodeLocation(ctx, "Sector 7")
	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}
	if coords2 == "12.9716, 77.5946" {
		t.Errorf("Expected different coordinates for explicit location")
	}
}

func TestSendFirebaseAlert(t *testing.T) {
	ctx := context.Background()
	err := SendFirebaseAlert(ctx, "responders", "Test Alert")
	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}
}
