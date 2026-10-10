---
provenance: AAC
---

# Human steps

DexSpine (L1) is a standard and reference corpus, not an app. Pre-1.0.

## Check the corpus
1. Install Node 18 or later.
2. In the repo root run `node scripts/validate-dexspine.mjs`.
3. Success prints `DexSpine validation passed: 6 layers, 8:3:8 structure intact.`

## Read it
- Start with [README.md](../README.md), then [DEXFILTER.md](../DEXFILTER.md).
- 8:3:8 means 8 plan questions, 3 MVE files (`va.md` values, `hu.md` human context, `llm.md` agent patterns), 8 execute questions, per layer under `dex/`.

## Before you push
Run the scan in [START.md](../START.md) step 3 and read the output yourself.

## Release
Follow [RELEASING.md](../RELEASING.md). Only you create tags.
