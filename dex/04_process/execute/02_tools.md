# Process — Tools

**Spine:** DEX  
**Layer:** 04_process  
**Phase:** Execute  
**Point:** 2 of 8 — Tools

---

## What tools enable system processes?

The primary tool for enabling System Processes is the **Gemini CLI's /conductor**. This tool provides the "Process Engine" that manages tracks, stages, and checkpoints. The /conductor allows us to define the "Critical Path" for a project and ensures that agents follow it sequentially. It is the primary instrument for enforcing the "Staged Hierarchy" and the "Plan -> MVE -> Execute Flow."

We also use **spec.md** as a core process tool. The spec file is the "Project Master Plan" that defines all tasks, phases, and expected outputs. By following a structured spec (like the one governing this build), we ensure that the system's "Operating Engine" has a clear set of instructions to execute. The spec is the "Source of Truth" for the entire build process.

Finally, we rely on **multiple LLM models** (Gemini Auto, Flash, Pro, and fallback models like Claude) to implement the "Economic Model Cascade." We use the CLI's `/model` command to transition between these tools as the task complexity shifts. These models are the "Compute Engine" that powers our processes. The tools are chosen to support the value of "Vendor Agnosticism"—the system remains functional even if a specific model provider is unavailable.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Policy](../../03_policy/execute/02_tools.md)
- Next: [Procedure](../../05_procedure/execute/02_tools.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 4 — Execute Point 2*
