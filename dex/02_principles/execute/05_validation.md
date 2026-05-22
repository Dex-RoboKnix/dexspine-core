# Principles — Validation

**Spine:** DEX  
**Layer:** 02_principles  
**Phase:** Execute  
**Point:** 5 of 8 — Validation

---

## How do we verify?

Validation of the Principles layer is a "Structure and Adherence" check. The primary mechanism is **L0 Consistency Verification**. For every file in the layer, we verify that it follows the "1 Task = 1 File" and "Markdown as Wire Protocol" principles. We check that the naming conventions are followed exactly (e.g., `01_definition.md`) and that the cross-references point to the correct internal and root documents. This is a binary check—either the structure is correct, or it isn't.

We also perform **"Principle-Grounding Audits."** This involves checking that every principle defined in this layer is derived from a Core Value in Layer 01. We look for "Orphan Principles"—rules that seem good but have no foundational justification. If a principle cannot be linked back to a value, it is flagged for removal or refinement. This ensures the "Grounding Chain" is intact and that we are not adding unnecessary complexity.

Finally, we validate through **"Agent Stress Testing."** We give an AI agent a complex task and see if it can successfully use the L0 principles to guide its execution. If the agent's work consistently passes human review because it adhered to the principles, the layer is validated. If the agent is confused by a principle, or if it finds a way to follow the principle while still producing low-quality work, it indicates that the principle is not well-defined and needs improvement.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Values](../../01_values/execute/05_validation.md)
- Next: [Policy](../../03_policy/execute/05_validation.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 2 — Execute Point 5*
