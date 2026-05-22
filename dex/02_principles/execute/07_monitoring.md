# Principles — Monitoring

**Spine:** DEX  
**Layer:** 02_principles  
**Phase:** Execute  
**Point:** 7 of 8 — Monitoring

---

## How do we track?

Monitoring of the Principles layer is focused on **"Friction and Violation Tracking."** We use a **Violation Dashboard** (recorded in `CASESTUDY.md`) to track how often specific principles are breached during the build and review process. A spike in violations for a particular principle (e.g., "Markdown Formatting") indicates a need for better tools or more training for agents. Monitoring is our "Sensory Input" for architectural health.

We also monitor **"Exception Velocity"**—the rate at which the "Human Veto" is being used to bypass established principles. If we see that the veto is being used more frequently, it flags a "Principle-Reality Mismatch." We use this data to decide when a principle needs to be audited and potentially refined through the 8:3:8 process. Monitoring ensures our rules don't become disconnected from the practical reality of building.

Finally, we track **"Agent Compliance Trends."** By observing the performance of AI agents over multiple project tracks, we can see if they are becoming more or less aligned with the DEX principles. A positive trend indicates that our templates and prompts are effectively "embedding" the principles in the agents' operational habit. A negative trend flags a "Context Leak" that must be plugged through grounding refinement.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Values](../../01_values/execute/07_monitoring.md)
- Next: [Policy](../../03_policy/execute/07_monitoring.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 2 — Execute Point 7*
