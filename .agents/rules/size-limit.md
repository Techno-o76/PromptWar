---
trigger: always_on
---

Rule: Extreme Repo Minimalism (1MB Limit)
1. Use a strict .gitignore: Ensure 'node_modules', '.next', 'bin/', and 'dist/' are never tracked.
2. No Local Assets: Never save images or large JSON files in the repo. Use Google Cloud Storage URLs or Placehold.jp for UI images.
3. Lockfile Management: If 'package-lock.json' exceeds 500KB, tell the agent to 'minify dependencies' or use 'pnpm' style if allowed. Alternatively, use CDN links for large libraries.
4. Code Only: The repo should contain ONLY source code (.go, .tsx, .css).