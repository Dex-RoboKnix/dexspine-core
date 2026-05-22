# Procedure — Rollback

**Spine:** DEX  
**Layer:** 05_procedure  
**Phase:** Execute  
**Point:** 6 of 8 — Rollback

---

## How do we undo?

Rollback for the Procedure layer is a **"Delete and Recreate"** process. Because procedures deal with atomic artifacts, the simplest way to undo a mistake is to delete the incorrect file and restart the procedure from step one. This ensures that we don't end up with "Frankenstein Files" that have been partially edited or corrupted. We prioritize a clean restart over complex manual editing at the procedural level.

The second part of rollback is **"Atomic Reversion" via Git.** If a procedural error has already been committed to the repository, we use `git revert` or `git checkout` to return the specific file to its last valid state. This ensures that the system's "Physical Form" is restored instantly without affecting other, unrelated components. We rely on the "1 Task = 1 File" principle to make these rollbacks precise and low-risk.

Finally, we record the procedural rollback in the `CASESTUDY.md`. we document which artifact was recreated and why the original failed validation. This "Atomic Post-Mortem" is essential for identifying procedures that are frequently failing and need refinement. Rollback is the mechanism that ensures our "Operating habit" remains high-quality and free of persistent errors.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Process](../../04_process/execute/06_rollback.md)
- Next: [Pattern](../../06_pattern/execute/06_rollback.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 5 — Execute Point 6*
