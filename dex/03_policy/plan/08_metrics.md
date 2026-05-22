# Policy — Metrics

**Spine:** DEX  
**Layer:** 03_policy  
**Phase:** Plan  
**Point:** 8 of 8 — Metrics

---

## How do we measure decision policies?

We measure the effectiveness of the Policy layer using three primary metrics. First is the **"Override Frequency."** We track how often a human operator (Layer 8) uses their veto power to stop or modify an agent's action. A low override frequency suggests that the policies are effectively guiding the agent toward "Human-Approved" outcomes. A high frequency flags a "Policy Gap" that must be addressed through refinement or new rules.

The second metric is **"Escalation Count."** We monitor how often the "Policy of Last Resort" (the 8:3:8 law) is invoked because the existing policies were insufficient to resolve an ambiguity. While we expect some escalations in any complex system, a high count indicates that our specific policies are too vague or incomplete. We use these "Escalation Events" as the primary data source for improving the policy layer.

Finally, we track **"Decision Latency."** This measures the time it takes for the system to move from a "Decision Point" to an "Action," including any time spent waiting for checkpoints or human approvals. We aim to minimize latency while maintaining a high "Alignment Score." By quantifying the cost of our governance, we can optimize our policies to provide the maximum safety with the minimum friction.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](./01_definition.md) | [02](./02_purpose.md) | [03](./03_scope.md) | [04](../plan/04_stakeholders.md) | [05](./05_success_criteria.md) | [06](./06_dependencies.md) | [07](./07_constraints.md) | [08](./08_metrics.md)
- Execute: [01](../execute/01_approach.md) | [02](../execute/02_tools.md) | [03](../execute/03_workflow.md) | [04](../execute/04_artifacts.md) | [05](../execute/05_validation.md) | [06](../execute/06_rollback.md) | [07](../execute/07_monitoring.md) | [08](../execute/08_improvement.md)

**Adjacent layers:**
- Previous: [Principles](../../02_principles/plan/08_metrics.md)
- Next: [Process](../../04_process/plan/08_metrics.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Plan Overview](../../../dex/plan.md)

---

*DEXSPINE L0 — Filter Position 3 — Plan Point 8*
