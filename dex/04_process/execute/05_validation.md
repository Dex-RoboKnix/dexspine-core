# Process — Validation

**Spine:** DEX  
**Layer:** 04_process  
**Phase:** Execute  
**Point:** 5 of 8 — Validation

---

## How do we verify?

Validation of the Process layer is a **"Stage and Cascade Check."** The primary verification step is to ensure that the "Staged Hierarchy" was followed during the build. We use the `CASESTUDY.md` and the timestamps on the file system to verify that the spec and plan were completed before the execute files were generated. If the "Foundation-First" sequence was violated, the process layer has failed validation.

We also verify **"Economic Cascade Compliance."** This involves reviewing the "Model Switch Log" to ensure that the correct models were used for each task. If a "Pro" model was used for a routine task without a recorded rate-limit event, it flags a "Process Inefficiency." Validation ensures that we are not only building the right things, but building them in the most resource-effective way.

Finally, we perform **"Checkpoint Fidelity Checks."** We review the human feedback recorded at each checkpoint to ensure that the "Quality Gate" was actually exercised. If we see that phases were approved without real review (e.g., "rubber stamping"), it indicates that the process has become a "hollow ceremony." Validation is the mechanism that ensures our "Workflow Orchestration" remains a living, effective part of the system's governance.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Policy](../../03_policy/execute/05_validation.md)
- Next: [Procedure](../../05_procedure/execute/05_validation.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 4 — Execute Point 5*
