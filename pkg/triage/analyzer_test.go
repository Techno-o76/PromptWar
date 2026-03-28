package triage

import (
	"context"
	"strings"
	"testing"
)

// unit_test for triage analyzer ensures it flags life-threatening conflicts.
func TestAnalyzerFlagsConflicts(t *testing.T) {
	ctx := context.Background()
	input := "Patient history: highly allergic to penicillin. Needs immediate care at Sector 7."
	
	plan, err := AnalyzeMessyInput(ctx, input)
	if err != nil {
		t.Fatalf("AnalyzeMessyInput failed: %v", err)
	}

	if !strings.Contains(plan.LifeThreateningConflict, "allergy detected") {
		t.Errorf("Expected allergy conflict to be flagged autonomously, got: %s", plan.LifeThreateningConflict)
	}

	if plan.Priority != "CRITICAL HIGH" {
		t.Errorf("Expected priority to auto-escalate, got: %s", plan.Priority)
	}
}

func TestAnalyzerNoConflicts(t *testing.T) {
	ctx := context.Background()
	input := "Patient arrived with a sprained ankle. Waiting in the lobby."
	
	plan, err := AnalyzeMessyInput(ctx, input)
	if err != nil {
		t.Fatalf("AnalyzeMessyInput failed: %v", err)
	}

	if plan.LifeThreateningConflict != "" {
		t.Errorf("Expected no conflicts, but found: %s", plan.LifeThreateningConflict)
	}
}
