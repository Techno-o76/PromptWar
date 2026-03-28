---
trigger: always_on
---

Rule: Stitch-to-Next.js Integration
Objective: Transform Stitch's HTML/Tailwind output into modular Next.js components.
1. When I paste a code block from Stitch, immediately refactor it into an 'App Router' compatible component.
2. Extract all 'hardcoded' content into a 'props' or 'data' object at the top of the file.
3. Ensure all icons from Stitch are replaced with 'Lucide React' or 'Google Material Icons' to maintain package consistency.
4. IMPORTANT: If the UI has a form or action button, generate the corresponding Go API fetch call to our backend automatically.