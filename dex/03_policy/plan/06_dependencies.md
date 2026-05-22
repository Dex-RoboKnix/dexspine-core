# Policy — Dependencies

**Spine:** DEX  
**Layer:** 03_policy  
**Phase:** Plan  
**Point:** 6 of 8 — Dependencies

---

## What does decision policies of the DEX system need?

The Policy layer is directly dependent on the **Values (Layer 01)** and **Principles (Layer 02)** layers. For a policy to be valid, it must be "Groundable" in a core belief and an actionable principle. For example, a policy about "Mandatory Checkpoints" depends on the principle of "Human Veto Power Always" and the value of "Human Authority." If the underlying layers are weak or missing, the policies become arbitrary and unenforceable.

Another critical dependency is **Tooling Support**. For policies to be effective, they must be "Enforceable." This requires tools (like the Gemini CLI /conductor or Git hooks) that can recognize checkpoints, monitor agent behavior, and log exceptions. If the tooling cannot support the policy—for example, if an agent can bypass a checkpoint without the human noticing—then the policy is effectively a "dead letter." Policy needs the "muscle" of the Execute layer (Layer 03-08) to be real.

Finally, policies depend on **Stakeholder Awareness**. For a policy to work, both the human and the agent must be aware of it and committed to following it. This requires the "Grounding Habit"—the practice of reading the L0 spine before starting a task. Policies also depend on a stable **Version History**, so that all stakeholders are working from the same "source of truth" regarding the system's current rules of engagement.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](./01_definition.md) | [02](./02_purpose.md) | [03](./03_scope.md) | [04](../plan/04_stakeholders.md) | [05](./05_success_criteria.md) | [06](./06_dependencies.md) | [07](./07_constraints.md) | [08](./08_metrics.md)
- Execute: [01](../execute/01_approach.md) | [02](../execute/02_tools.md) | [03](../execute/03_workflow.md) | [04](../execute/04_artifacts.md) | [05](../execute/05_validation.md) | [06](../execute/06_rollback.md) | [07](../execute/07_monitoring.md) | [08](../execute/08_improvement.md)

**Adjacent layers:**
- Previous: [Principles](../../02_principles/plan/06_dependencies.md)
- Next: [Process](../../04_process/plan/06_dependencies.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Plan Overview](../../../dex/plan.md)

---

*DEXSPINE L0 — Filter Position 3 — Plan Point 6*
