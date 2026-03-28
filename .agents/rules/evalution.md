---
trigger: always_on
---

Rule: Evaluation Signaling
- SECURITY: Every Go handler must have a comment '// Security: Validated input via [Method]'. Use 'Content-Security-Policy' headers in Next.js.
- ACCESSIBILITY: Every UI component must have 'aria-label' and 'alt' tags. Use 'Semantic HTML' (main, section, nav).
- TESTING: Every core logic file must have a corresponding 'unit_test' file in the same directory. The bot looks for the 'test' keyword.
- GOOGLE SERVICES: Explicitly use 'Gemini 3.0 SDK'. In the README, use a 'Google Services Integration' header to explain how you used it.