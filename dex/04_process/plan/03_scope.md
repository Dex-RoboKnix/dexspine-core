# Process — Scope

**Spine:** DEX  
**Layer:** 04_process  
**Phase:** Plan  
**Point:** 3 of 8 — Scope

---

## What is included and excluded?

The scope of the Process layer includes all high-level system workflows, staged hierarchies, and agent orchestration patterns. This covers the "Filter Sliding" process (applying the `dexfilter` to new subjects), the "Track Execution" process (how a specific set of tasks is managed from start to finish), and the "Checkpoint Reporting" process. It also includes the high-level orchestration of multi-model interactions, specifically the rules for when and how to transition between models in the cascade.

Included in the scope is the "Concept Before Execution" mandate, which defines the order of operations for all DEX builds. The scope also covers the "MVE Extraction" stage as a bridge between Plan and Execute. Any workflow that involves moving a project through multiple stages of development is within the scope of Layer 04.

Excluded from the scope are low-level step-by-step instructions (Layer 05) or the decision-making logic gates (Layer 03). For example, the *process* of how a track is executed is in Layer 04, but the *policy* of when to stop that track for a human veto is in Layer 03. Similarly, the *procedure* of how to name a specific file is in Layer 05. Process is the "Workflow Orchestration" layer.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](./01_definition.md) | [02](./02_purpose.md) | [03](./03_scope.md) | [04](./04_stakeholders.md) | [05](./05_success_criteria.md) | [06](./06_dependencies.md) | [07](./07_constraints.md) | [08](./08_metrics.md)
- Execute: [01](../execute/01_approach.md) | [02](../execute/02_tools.md) | [03](../execute/03_workflow.md) | [04](../execute/04_artifacts.md) | [05](../execute/05_validation.md) | [06](../execute/06_rollback.md) | [07](../execute/07_monitoring.md) | [08](../execute/08_improvement.md)

**Adjacent layers:**
- Previous: [Policy](../../03_policy/plan/03_scope.md)
- Next: [Procedure](../../05_procedure/plan/03_scope.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Plan Overview](../../../dex/plan.md)

---

*DEXSPINE L0 — Filter Position 4 — Plan Point 3*
