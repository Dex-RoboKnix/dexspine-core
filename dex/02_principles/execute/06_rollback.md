# Principles — Rollback

**Spine:** DEX  
**Layer:** 02_principles  
**Phase:** Execute  
**Point:** 6 of 8 — Rollback

---

## How do we undo?

Rollback for the Principles layer relies on **Git-based Version Control**. If a new principle is found to be causing unresolvable friction or architectural drift, we use `git revert` to return the layer to its previous stable state. This ensures that the system's "Operational Habit" can be restored instantly, preventing a "Cascade of Errors" where a single bad rule corrupts downstream processes and procedures.

Rollback also requires **"Task Recertification."** When a principle is reverted, all tasks that were executed under that principle must be audited for compliance with the restored rule. If a violation is found, the work must be flagged for "Principle Corrective Action." This ensures that the system's history remains consistent and that we don't end up with a "Hybrid Geometry" where some files follow old rules and some follow new ones.

In extreme cases, if a principle change has corrupted a large portion of the spine, we may use **"Manual Structural Restoration."** This involves a human operator manually renaming files, fixing links, and reformatting documentation to bring the system back into alignment with the L0 principles. This is our "Last Resort" safety net, ensuring that the integrity of the spine is preserved even when automated rollback is insufficient.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Values](../../01_values/execute/06_rollback.md)
- Next: [Policy](../../03_policy/execute/06_rollback.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 2 — Execute Point 6*
