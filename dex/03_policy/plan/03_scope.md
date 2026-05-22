# Policy — Scope

**Spine:** DEX  
**Layer:** 03_policy  
**Phase:** Plan  
**Point:** 3 of 8 — Scope

---

## What is included and excluded?

The scope of the Policy layer includes all decision rules that govern the interaction between humans and agents, the behavior of autonomous systems, and the triggers for escalation. This covers checkpoint policies (when to stop for approval), veto procedures (how to override an agent), and model selection policies (the economic model cascade). It also includes policies regarding data privacy, secret management, and the ethical use of AI within the DEX framework.

Included in the scope is the "Checkpointed Autonomy" policy, which defines the mandatory stop points (like the 5 checkpoints in this build) where human approval is required. The scope also covers the "Informed Consent" policy for automated file modifications and the "Auditability Mandate" which requires all agent decisions to be logged in a human-readable format (like `CASESTUDY.md`).

Excluded from the scope are low-level technical procedures (Layer 05) or broad behavioral principles (Layer 02). For example, the principle of "Human Veto" is in Layer 02, but the *policy* of when and how that veto is logged and what triggers its escalation is in Layer 03. Similarly, the *process* of building a spine is in Layer 04, but the *policy* of which model to use at each stage of that process is in Layer 03. Policy is the "Decision Logic" layer.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](./01_definition.md) | [02](./02_purpose.md) | [03](./03_scope.md) | [04](./04_stakeholders.md) | [05](./05_success_criteria.md) | [06](./06_dependencies.md) | [07](./07_constraints.md) | [08](./08_metrics.md)
- Execute: [01](../execute/01_approach.md) | [02](../execute/02_tools.md) | [03](../execute/03_workflow.md) | [04](../execute/04_artifacts.md) | [05](../execute/05_validation.md) | [06](../execute/06_rollback.md) | [07](../execute/07_monitoring.md) | [08](../execute/08_improvement.md)

**Adjacent layers:**
- Previous: [Principles](../../02_principles/plan/03_scope.md)
- Next: [Process](../../04_process/plan/03_scope.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Plan Overview](../../../dex/plan.md)

---

*DEXSPINE L0 — Filter Position 3 — Plan Point 3*
