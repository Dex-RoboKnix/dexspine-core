# Process — Dependencies

**Spine:** DEX  
**Layer:** 04_process  
**Phase:** Plan  
**Point:** 6 of 8 — Dependencies

---

## What does system processes of the DEX system need?

The Process layer is heavily dependent on the **Policy Layer (Layer 03)**. Processes define the "how" of a workflow, but they rely on policies to provide the "decision gates" and escalation triggers. For example, a "Track Execution" process depends on the "Mandatory Checkpoint" policy to ensure safety. Without the underlying policies, the processes are just "vulnerable workflows" that can easily be bypassed or corrupted.

Another critical dependency is **Tooling Availability**. For processes like the "Economic Model Cascade" to work, the system must have access to multiple LLM providers and models. If only one model is available, the process becomes irrelevant. Similarly, processes like "Filter Sliding" depend on the availability of templates and directory creation scripts. Process needs the "enabling tools" of the Execute layer to be functional.

Finally, processes depend on **Model Capability**. A process that involves "Staged Hierarchy" (concept before execution) requires a model that is capable of long-context reasoning and plan adherence. If the underlying model is too weak to follow a multi-stage plan, the process will fail. Process is the "bridge" between the system's governed intent and the model's actual capability.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](./01_definition.md) | [02](./02_purpose.md) | [03](./03_scope.md) | [04](../plan/04_stakeholders.md) | [05](./05_success_criteria.md) | [06](./06_dependencies.md) | [07](./07_constraints.md) | [08](./08_metrics.md)
- Execute: [01](../execute/01_approach.md) | [02](../execute/02_tools.md) | [03](../execute/03_workflow.md) | [04](../execute/04_artifacts.md) | [05](../execute/05_validation.md) | [06](../execute/06_rollback.md) | [07](../execute/07_monitoring.md) | [08](../execute/08_improvement.md)

**Adjacent layers:**
- Previous: [Policy](../../03_policy/plan/06_dependencies.md)
- Next: [Procedure](../../05_procedure/plan/06_dependencies.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Plan Overview](../../../dex/plan.md)

---

*DEXSPINE L0 — Filter Position 4 — Plan Point 6*
