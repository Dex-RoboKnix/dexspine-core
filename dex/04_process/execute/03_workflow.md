# Process — Workflow

**Spine:** DEX  
**Layer:** 04_process  
**Phase:** Execute  
**Point:** 3 of 8 — Workflow

---

## What is the process?

The workflow for System Processes follows a **"Spec-Build-Check-Enrich"** cycle. It begins with "Spec Creation," where the human operator (Layer 8) defines the goals and tasks for a new project in a `spec.md`. This is the "Planning Gate" that ensures the project is grounded from the start. The second stage is "Agent Build," where the AI agent executes the tasks defined in the spec, stopping at each mandatory checkpoint.

The third stage is "Checkpoint Validation," where the human audits the agent's artifacts for structural and conceptual integrity. This is the "Quality Gate" that prevents the accumulation of errors. If the work is approved, the system moves to the next phase. The final stage is "Content Enrichment," where the basic artifacts are refined and expanded to meet the 2-4 paragraph requirement.

This workflow is designed to be **"Linear and Non-Destructive."** We prioritize forward motion and use version control (Git) to ensure that every stage is reversible. By following this cycle, we ensure that the system's "Operating Engine" produces high-fidelity, irreducible results that are consistent with the L0 foundation. The workflow is the "Pulse" of the DEX system's execution.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Policy](../../03_policy/execute/03_workflow.md)
- Next: [Procedure](../../05_procedure/execute/03_workflow.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 4 — Execute Point 3*
