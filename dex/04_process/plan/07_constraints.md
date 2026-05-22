# Process — Constraints

**Spine:** DEX  
**Layer:** 04_process  
**Phase:** Plan  
**Point:** 7 of 8 — Constraints

---

## What limits system processes?

The primary constraint on the Process layer is **"Context Window Capacity."** Large, multi-stage processes can quickly consume an agent's context window, leading to "Information Decay" or the loss of early foundational details. We must constrain our processes to be "Chunkable"—broken into manageable stages (like the 5 phases of this build) that can be executed and validated independently. Process is limited by the "Cognitive Horizon" of the agents.

Another constraint is **"Rate Limits and API Costs."** The "Economic Model Cascade" is itself a response to these external constraints. Our processes must be designed to be "Model-Agnostic" so that work can continue even when a specific provider is down or a rate limit is hit. We are constrained by the "Market Reality" of LLM access, and our processes must be resilient to these fluctuations.

Finally, processes are limited by **"Human Availability."** Every "Checkpoint Report" process requires a human to be available for review. If the process has too many manual checkpoints, it will block the autonomous agents and waste their "time-to-complete." We are constrained to find the "Optimal Checkpoint Density"—enough to ensure safety, but few enough to allow for efficient, high-velocity building.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](./01_definition.md) | [02](./02_purpose.md) | [03](./03_scope.md) | [04](../plan/04_stakeholders.md) | [05](./05_success_criteria.md) | [06](./06_dependencies.md) | [07](./07_constraints.md) | [08](./08_metrics.md)
- Execute: [01](../execute/01_approach.md) | [02](../execute/02_tools.md) | [03](../execute/03_workflow.md) | [04](../execute/04_artifacts.md) | [05](../execute/05_validation.md) | [06](../execute/06_rollback.md) | [07](../execute/07_monitoring.md) | [08](../execute/08_improvement.md)

**Adjacent layers:**
- Previous: [Policy](../../03_policy/plan/07_constraints.md)
- Next: [Procedure](../../05_procedure/plan/07_constraints.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Plan Overview](../../../dex/plan.md)

---

*DEXSPINE L0 — Filter Position 4 — Plan Point 7*
