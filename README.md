# NEXUS: Crisis Intelligence Bridge

**Vertical**: Societal Benefit (Emergency Response)

**Approach**: "A Multimodal Bridge that hardens chaotic crisis data (Vision/Voice) through a Zero-Day Defense layer before triggering autonomous life-saving actions."

**Logic**: Input -> Defense Layer -> Gemini 1.5 Vision Analysis -> Conflict Flagging -> Structured Dispatch.

## Brief Description
NEXUS is a Multimodal Universal Bridge that transforms chaotic crisis inputs—including vision and audio—into verified rescue plans that autonomously account for real-time environmental context (Traffic and Weather).

Featuring a hardened Zero-Day Prompt Defense and a Gemini 3.0-powered reasoning engine, NEXUS bridges the gap between human intent and complex urban systems to trigger instant, life-saving dispatch actions.

### Context-Aware Routing
NEXUS natively assesses a deep "Simulated Environment Layer" populated with cross-functional transit delays, weather patterns, and news tickers. Before returning a `priority` dispatch, it validates its internal transportation recommendations against immediate traffic flow (e.g. bypassing flooded roads via active green-lit Corridors).

## Google Services Integration
API Keys are managed via environment variables; no secrets are committed to the repository.

NEXUS natively integrates the following Google Services:
- **Gemini 3.0 SDK** (`github.com/google/generative-ai-go/genai`): Used to dynamically OCR medical photos, transcribe voice notes, analyze unstructured JSON, and apply autonomous Zero-Day Prompt Defense.
- **Google Cloud Storage** (`cloud.google.com/go/storage`): Multimodal file artifacts (incident photos, audio recordings) are uploaded to GCS buckets for persistent archival and cross-team access.
- **Google Maps Platform** (`googlemaps.github.io/maps`): Automated geospatial verification of crisis zones via geocoding. Live user browser coordinates are passed through to avoid redundant re-geocoding.
- **Firebase Cloud Messaging** (`firebase.google.com/go/v4`): Autonomous push notifications sent to first responder topic channels when Priority is escalated to High or CRITICAL.
- **Google Authentication**: Simulated OAuth flow via `/api/v1/auth/google` endpoint for secure identity verification without heavy client-side SDK dependencies.
- **Google Cloud Logging** (`cloud.google.com/go/logging`): Structured JSON logging via Stackdriver for real-time observability of triage decisions and dispatch actions.
- **Vertex AI Standards**: Following "Responsible AI" safety guidelines and guardrails (Temperature: 0.1, TopK: 10) for conflict detection and severity verification.

## Agentic Autonomous Actions
NEXUS demonstrates the following autonomous, agentic behaviors without human intervention:

1. **Autonomous Conflict Escalation**: The triage engine scans every input for life-threatening contradictions (e.g., allergy + medication, active hemorrhage + blood thinners) and auto-escalates Priority to `CRITICAL HIGH`.
2. **Autonomous Firebase Alerting**: When a crisis is flagged as High/Critical, the system asynchronously broadcasts a ready-to-send 160-character SMS to the `nexus-alerts` Firebase topic — no human trigger required.
3. **Autonomous Spatial Enrichment**: Raw location strings extracted by Gemini are automatically geocoded via Google Maps API, and live browser GPS coordinates are injected directly into the dispatch plan.
4. **Autonomous Route Re-routing**: If the AI detects that the primary hospital or road is gridlocked/flooded (via simulated environment context), it autonomously suggests alternative transport (Metro Corridor, Air-Ambulance).
5. **Human-in-the-Loop Guardrail**: When AI confidence drops below 0.75, the system autonomously flags the plan for manual verification — preventing unsafe automated dispatch.

## Multimodal Universal Ingestion
Our Zero-Day Defense keeps the system safe from prompt injection, while our **Multimodal Engine** ensures that even a blurry photo is merged with **Simulated Environmental Context** (Weather/Traffic) and instantly bridged into a life-saving, confidence-scored **Dispatch Action**.
