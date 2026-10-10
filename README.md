---
provenance: AAC
---

# dexspine-core

**The question set behind every dex.md vault.** When you run [dex.md](https://github.com/Dex-RoboKnix/dex-md), it builds a vault of 114 node folders: 6 layers × 19 nodes. Every node starts as a question. Those questions come from this repo.

Layer **L1** (DexSpine: the standard L2 products conform to). Pre-1.0. Licence: OpenCore, this is the AGPL-3.0 Core edition ([LICENSE](./LICENSE)); no Enterprise edition exists yet. Part of [DexRoboKnix](https://github.com/Dex-RoboKnix/Dex_RoboKnix/blob/main/SITEMAP.md).

## How dex.md uses this repo

1. **Stage 2, on its own yes.** The agent shows the owner this command and runs it only after a yes:
   ```
   git clone https://github.com/Dex-RoboKnix/dexspine-core dex-vault/.dex/dexspine
   git -C dex-vault/.dex/dexspine checkout fbcd0a89008e87416c5a0bfe6b56524b584b49a8
   ```
   It is pinned to a commit, never a branch, so a change here never reaches an existing dex.md until dex.md is re-pinned.
2. **Scaffold.** `node dex-vault/.dex/vault.mjs scaffold --title "<matter>" --spine dex-vault/.dex/dexspine` reads exactly two files:
   - [`dex/plan.md`](./dex/plan.md): the 8 **Plan** questions
   - [`dex/execute.md`](./dex/execute.md): the 8 **Execute** questions

   It takes the numbered lines in the form `1. **Definition:** What IS the subject?`. It needs exactly 8 in each file; otherwise it uses its built-in copy of the same questions.
3. **Every node gets its question.** For each of the 6 layers, the 16 questions become nodes P01–P08 and E01–E08, with "the subject" replaced by "this matter". The 3 MVE nodes (va, hu, llm) complete the 19. Each node also gets its question in DEX838 wire form, for example:
   ```
   dex(garden-plan, @layer:values,phase:plan,point:2)["WHY does this matter exist? (L1 Values)"]
   ```
4. **The grilling fills them.** `dex grill` asks the owner each node's question, one at a time, and the answers fill the vault. If the owner declines the clone, the vault is the same; only the source of the questions differs.

## What dex.md reads, and nothing else

| File | Used for | Change it and... |
|---|---|---|
| `dex/plan.md` | Plan questions P01–P08 on every layer | every new vault asks the new questions, once dex.md pins the new commit |
| `dex/execute.md` | Execute questions E01–E08 on every layer | the same |

The six layers (Values, Principles, Policy, Process, Procedure, Pattern), the 19 points per layer and the 8:3:8 shape are fixed in dex.md's vault tool and must match this standard. Everything else in this repo (the full `dex/` corpus, the case study, the essays) is reading for people, not input to dex.md.

## Changing the questions

1. Edit `dex/plan.md` or `dex/execute.md`. Keep exactly 8 numbered lines, each `N. **Name:** question`, names in the standard order.
2. Run `node scripts/validate-dexspine.mjs`.
3. Tag a release (see [RELEASING.md](./RELEASING.md)), then re-pin dex.md (in the dex-md repo, `dex.md` section 3 and `method/09-engine.md`) and run its test drive.

## Which document do I read?

| I want to... | Read |
|---|---|
| Run dex.md | [dex-md](https://github.com/Dex-RoboKnix/dex-md): put `dex.md` in a folder and say "Read dex.md and follow it" |
| The 16 questions themselves | [dex/plan.md](./dex/plan.md), [dex/execute.md](./dex/execute.md) |
| The 8:3:8 Dexfilter | [DEXFILTER.md](./DEXFILTER.md) |
| The DexSpine standard in full (the former README) | [docs/standard.md](./docs/standard.md) |
| Reduction by addition | [REDUCTION_BY_ADDITION.md](./REDUCTION_BY_ADDITION.md) |
| A worked case study | [CASESTUDY.md](./CASESTUDY.md) |
| Steps for a person | [docs/](./docs/README.md) |
| Steps for an LLM working on this repo | [START.md](./START.md), [CLAUDE.md](./CLAUDE.md) |
| Cut a release | [RELEASING.md](./RELEASING.md) |
