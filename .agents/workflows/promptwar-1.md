---
description: # MISSION: PromptWars Bengaluru 2026 Winning Strategy
---

## 1. ARCHITECTURAL MANDATE (Go + Next.js)
- BACKEND: Use Go (Golang) with the 'Gin' or 'Echo' framework for high-performance REST/WebSocket APIs.
- FRONTEND: Use Next.js 15 (App Router) with Tailwind CSS and Lucide React icons.
- AI INTEGRATION: Use the Gemini 3.0 SDK for all agentic reasoning. Prioritize 'Structured Outputs' (JSON mode) for the backend to consume.

## 2. THE "NOVELTY" FILTER (Judging Priority)
- NEVER build a simple chatbot. 
- ALWAYS build an "Agentic Workflow": The app must *act* on the world (e.g., auto-generating files, calling external APIs, or creating a dynamic dashboard based on data).
- IMPACT: Ensure the solution solves a high-stakes problem (e.g., Crisis, Logistics, or Bias) with a specific "Agentic" twist.

## 3. ANTIGRAVITY EXECUTION RULES
- PLANNING MODE: For every new feature, the agent MUST generate an `implementation_plan.md` artifact first.
- TASK BREAKDOWN: Break the 3-hour build into 20-minute granular tasks in `task.md`. 
- BROWSER VERIFICATION: After every UI change, use the Browser Sub-agent to take a screenshot and verify the "Vibe" (Layout, Contrast, and Responsiveness).
- TURBO MODE: Use `// turbo` for routine tasks like `go mod tidy` or `npm install` to save time.

## 4. JUDGING "HACKS" (Technical Merit)
- SECURITY: Always include a 'Security' section in the plan (e.g., API Key masking, Input validation).
- UX/UI: Use "Bento Box" layouts and subtle CSS animations to give a "Google-tier" feel.
- PROOF: Generate a `walkthrough.md` at the end with the agent's internal reasoning to show the judges the "AI Depth."