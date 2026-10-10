---
provenance: AAC
---

# START (for an LLM)

Layer L1. Pre-1.0. Node only, no dependencies.

1. **Build.** Nothing to build. `package.json` has no build step.
2. **Test.** `node scripts/validate-dexspine.mjs` (or `npm run validate`). Expect: `DexSpine validation passed: 6 layers, 8:3:8 structure intact.` Any other output is a failure; report it, do not edit the validator to pass.
3. **Scan before any push.** `git grep -nIE '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}|ghp_|sk-|AKIA|BEGIN [A-Z ]*PRIVATE|C:\Users'`. No personal email, key, token or local path may appear. Commit only as the GitHub no-reply address.
4. **Rules.** Read [CLAUDE.md](./CLAUDE.md). Never push to main, never tag, never delete history. Human authority (Layer 8) overrides every check.

Layout: `dex/01_values` to `dex/06_pattern` each hold `plan/` (8 files), `mve/` (va, hu, llm) and `execute/` (8 files).
