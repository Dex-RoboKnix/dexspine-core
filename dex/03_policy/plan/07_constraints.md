# Policy — Constraints

**Spine:** DEX  
**Layer:** 03_policy  
**Phase:** Plan  
**Point:** 7 of 8 — Constraints

---

## What limits decision policies?

The primary constraint on the Policy layer is **"Operational Latency."** A policy that is too complex or requires too many checkpoints can slow the system to a crawl, defeating the purpose of using autonomous agents. We must balance the need for "Safety and Alignment" with the need for "Speed and Efficiency." This constraint limits the number of mandatory stop points we can reasonably impose without making the system unusable.

Another constraint is **"Auditability Overhead."** Every policy requires a corresponding monitoring and logging mechanism to be enforceable. This creates "System Friction"—the compute and storage costs of maintaining the `CASESTUDY.md` and other logs. We are constrained to policies that provide a high "Return on Grounding," ensuring that the cost of the policy is justified by the safety and consistency it provides.

Finally, policies are limited by the **"Ambiguity Frontier."** No policy can anticipate every possible future scenario. This constraint is what makes the 8:3:8 law so critical—it is the "Policy of Last Resort" that handles everything the other policies missed. We must accept that our policies are "Incomplete but Stable" (the 99.99% state) and rely on the human's Layer 8 Veto to handle the "Black Swan" events that fall outside our pre-defined rules.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](./01_definition.md) | [02](./02_purpose.md) | [03](./03_scope.md) | [04](../plan/04_stakeholders.md) | [05](./05_success_criteria.md) | [06](./06_dependencies.md) | [07](./07_constraints.md) | [08](./08_metrics.md)
- Execute: [01](../execute/01_approach.md) | [02](../execute/02_tools.md) | [03](../execute/03_workflow.md) | [04](../execute/04_artifacts.md) | [05](../execute/05_validation.md) | [06](../execute/06_rollback.md) | [07](../execute/07_monitoring.md) | [08](../execute/08_improvement.md)

**Adjacent layers:**
- Previous: [Principles](../../02_principles/plan/07_constraints.md)
- Next: [Process](../../04_process/plan/07_constraints.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Plan Overview](../../../dex/plan.md)

---

*DEXSPINE L0 — Filter Position 3 — Plan Point 7*
