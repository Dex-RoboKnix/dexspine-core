# Values — Validation

**Spine:** DEX  
**Layer:** 01_values  
**Phase:** Execute  
**Point:** 5 of 8 — Validation

---

## How do we verify?

Validation of the Values layer is a qualitative process focused on "Conceptual Integrity" and "Grounding Fidelity." The primary validation step is the **Layer 8 Audit**. A human operator manually reviews all value documents to ensure they meet the 2-4 paragraph requirement, contain no placeholders (TODO/TBD), and are free of proprietary bias. We verify that the values are expressed clearly and that they fulfill the "Infrastructure, Not Product" mandate.

We also use **Cross-Reference Checking** to validate the internal consistency of the layer. This involves verifying that all relative links within the 19 files are functional and that they point to the correct sibling or parent documents. An agent can assist with this by running a simple script to check for broken links. However, the *meaning* of the links—ensuring that the plan, mve, and execute phases actually support each other—requires human verification.

Finally, we perform "Decision-Value Validation." This involves taking a recent complex decision made in the system and "walking" it back up the grounding chain to this layer. If the decision can be clearly justified by one or more core values, the layer is validated. If there is a "grounding gap"—a decision that seems correct but has no corresponding value—it indicates that the values layer is incomplete and needs to be updated.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: None
- Next: [Principles](../../02_principles/execute/05_validation.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 1 — Execute Point 5*
