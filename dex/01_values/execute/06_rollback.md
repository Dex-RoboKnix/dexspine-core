# Values — Rollback

**Spine:** DEX  
**Layer:** 01_values  
**Phase:** Execute  
**Point:** 6 of 8 — Rollback

---

## How do we undo?

Because the Values layer is stored in a Git-controlled Markdown spine, rollback is a straightforward and deterministic process. If a value change is found to be harmful or misaligned, we use **`git revert`** to return the files to their last known-good state. This ensures that the system can always recover its original "Moral Compass" without losing the history of the failed experiment.

Rollback also involves **Context Restoration**. When a value is reverted, we must notify all active agents and human operators that the grounding for their current tasks has shifted. This is done by appending a "Rollback Entry" to the `CASESTUDY.md` file and updating the relevant `01_values` files. Any work-in-progress that was based on the reverted value must be audited for compliance with the restored value.

In extreme cases, a rollback may require a "Full Spine Reset" to a previous stable tag. This is our "Last Resort" safety net, ensuring that even if the system's values are severely corrupted by model hallucinations or human error, we have a clean, irreducible baseline to return to. The "Infrastructure, Not Product" value mandates that our history is preserved, allowing us to learn from our mistakes while maintaining a stable foundation.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: None
- Next: [Principles](../../02_principles/execute/06_rollback.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 1 — Execute Point 6*
