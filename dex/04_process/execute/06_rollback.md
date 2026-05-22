# Process — Rollback

**Spine:** DEX  
**Layer:** 04_process  
**Phase:** Execute  
**Point:** 6 of 8 — Rollback

---

## How do we undo?

Rollback for the Process layer involves **"Phase Reversion"** and **"Model Re-Selection."** If a build phase is found to have been executed out of sequence or using the wrong model, we use Git to roll back the entire project tree to the last valid checkpoint. This is the "Phase Reversion" step. It ensures that the system's "Grounding Chain" is always built on a solid, correctly-ordered foundation.

The second part is **"Model Re-Selection."** If a process failed because of a "Model Quality Drop" (e.g., a weaker model hallucinated during a complex stage), the rollback involves repeating the stage using a higher-powered model from the cascade. This "Quality-Driven Retry" ensures that the system's "Operating Engine" can recover from the limitations of specific compute providers.

Finally, we record the process failure in the `CASESTUDY.md`. We document which stage of the hierarchy was violated or which model failed, and what steps were taken to restore the process integrity. This "Post-Mortem" is essential for refining our "Workflow Orchestration" and ensuring that the system's "Operating Habits" become more resilient over time. Rollback is the "Safety Brake" of the DEX build process.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Policy](../../03_policy/execute/06_rollback.md)
- Next: [Procedure](../../05_procedure/execute/06_rollback.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 4 — Execute Point 6*
