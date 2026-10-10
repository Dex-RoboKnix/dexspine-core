---
provenance: AAC
---

# Releasing

Releases are tags named `vX.Y.Z`. Consumers (dex.md) pin a tag or a full commit, never a branch.

1. Run `node scripts/validate-dexspine.mjs`; it must pass.
2. Run the scan in START.md; it must be clean.
3. The owner tags and pushes: `git tag vX.Y.Z <commit>` then `git push origin vX.Y.Z`.

Recommendation: tag `fbcd0a89008e87416c5a0bfe6b56524b584b49a8` as `v0.1.0` (matches `package.json` version 0.1.0 and is the commit dex.md Stage 2 pins today). This PR does not create the tag.
