# Procedure — Workflow

**Spine:** DEX  
**Layer:** 05_procedure  
**Phase:** Execute  
**Point:** 3 of 8 — Workflow

---

## What is the process?

The workflow for Component Procedures is a **"Read-Execute-Validate-Record"** loop. It begins with the agent or human **Reading the Procedure** from the L0 foundation. This ensures that the current task is grounded in the latest system standards. The second stage is **Execution**, where the specific steps (e.g., "Create directory X, Instantiate template Y") are followed sequentially. This is the "Atomic Build" stage of the procedural workflow.

The third stage is **Validation**, where the agent (or an automated script) checks the output against the procedural specification. We ask: "Is the file named correctly? Are the links functional? Is the content non-empty?" This "Self-Audit" step is critical for preventing the propagation of errors. If validation fails, the agent must repeat the execution stage until the output is compliant.

The final stage is **Recording**, where the completion of the procedure is logged in the `CASESTUDY.md`. This provides the "Audit Evidence" that each atomic step was performed correctly. The workflow is designed to be "Fast and High-Frequency," allowing for the rapid creation of many small, high-quality components. It is the "Heartbeat" of the DEX system's physical construction.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Process](../../04_process/execute/03_workflow.md)
- Next: [Pattern](../../06_pattern/execute/03_workflow.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 5 — Execute Point 3*
