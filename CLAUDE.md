---
provenance: AAC
---

# CLAUDE.md

DexSpine (L1): the DEX838 standard, the 8:3:8 Dexfilter and this reference corpus. L1 defines, L2 products conform. Pre-1.0.

- Vocabulary comes from the DexRoboKnix `CONTEXT.md`. Avoid: "Prompt engine", "Spine framework".
- Test: `node scripts/validate-dexspine.mjs`.
- Every markdown spec carries a provenance tag (`PHC`, `OHC`, `AAC`) in frontmatter. Never change an existing tag.
- OpenCore: AGPL-3.0 Core. No Enterprise edition exists; do not write docs describing one.
- No personal email, keys or chat contents in the repo. Scan before every push (see START.md).
- Dex pins a tag or full commit, never a branch. Do not create tags; see RELEASING.md.
- Layer 8: the owner's decision overrides any agent or check.
