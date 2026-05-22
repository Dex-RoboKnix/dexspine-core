# Pattern — Rollback

**Spine:** DEX  
**Layer:** 06_pattern  
**Phase:** Execute  
**Point:** 6 of 8 — Rollback

---

## How do we undo?

Rollback for the Pattern layer involves **"Template Reversion"** and **"Subject-Specific Correction."** If a pattern change is found to be causing unresolvable friction or "Structural Fragility," we use `git revert` to return the Pattern files and the associated templates to their last known-good state. This is the "Pattern Reversion" step. It ensures that the system's "Architectural Habits" are restored instantly.

The second part is "Subject-Specific Correction." When a pattern is reverted, we must audit all project tracks that were executed using the "bad pattern." This is our "Structural Safety Net." If an agent used a flawed pattern to build a new layer, we roll back that specific layer state to the point before the pattern was applied. This ensures that a single bad pattern cannot leave a permanent "Misaligned Geometry" in the system's artifacts.

Finally, we record the pattern rollback in the `CASESTUDY.md`. We document the reason for the reversion and the steps taken to correct any misaligned subjects. This "Architectural Post-Mortem" is essential for learning from our structural failures and for ensuring that the same mistake is not made twice. Rollback is the mechanism that ensures our "Proven Wisdom" remains stable and irreducible.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Procedure](../../05_procedure/execute/06_rollback.md)
- Next: None

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 6 — Execute Point 6*
