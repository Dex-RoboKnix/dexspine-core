# DexSpine

**A structure for keeping the "why" of a project in front of both people and AI models.** DexSpine is the L1 standard of Dex RoboKnix: plain Markdown files, readable by a person and parseable by any model, that hold a project's values, decisions and working rules across sessions.

## The six layers

Every piece of work is grounded in the layer above it.

| Layer | Asks |
|---|---|
| 1 Values | What matters underneath? |
| 2 Principles | How do we act? |
| 3 Policy | What rules decide it? |
| 4 Process | What is the workflow? |
| 5 Procedure | What are the steps? |
| 6 Pattern | What keeps happening? |

## The 8:3:8 filter

Each layer is read through 19 points:

- **Plan (8):** Definition, Purpose, Scope, Stakeholders, Success Criteria, Dependencies, Constraints, Metrics.
- **MVE (3):** Values, Human context, LLM patterns.
- **Execute (8):** Approach, Tools, Workflow, Artifacts, Validation, Rollback, Monitoring, Improvement.

6 layers x 19 points = 114 nodes.

## Reduction by addition

When a clear yes or no cannot be reached, the filter adds structure instead of stopping. Running a subject through the 19 points makes its definition larger and more precise until the next step is clear. See [REDUCTION_BY_ADDITION.md](./REDUCTION_BY_ADDITION.md) and [DEXFILTER.md](./DEXFILTER.md).

## Use it

```
git clone https://github.com/Dex-RoboKnix/dexspine-core
```
Readable: copy this repo to your machine.

1. Read `REDUCTION_BY_ADDITION.md`.
2. Read `dex/01_values/plan/01_definition.md`.
3. For your own subject, make a folder and answer the 19 points, layer by layer.

- **People:** if you are unsure why a step exists, trace it up through Process, Policy and Principles to the Value behind it.
- **Agents:** read the relevant layer files before acting, so the work stays consistent with the decisions already made.

Start from the [Plan overview](./dex/plan.md) and the [Execute overview](./dex/execute.md).

## Related

- [dex.md](https://github.com/Dex-RoboKnix): the installer that builds a DexSpine vault in any project folder.
- [dexcli-core](https://github.com/Dex-RoboKnix/dexcli-core) and [shadowos-core](https://github.com/Dex-RoboKnix/shadowos-core).

## Licence

AGPL-3.0-or-later. See [LICENSE](./LICENSE).
