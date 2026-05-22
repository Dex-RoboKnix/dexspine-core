# Procedure — Dependencies

**Spine:** DEX  
**Layer:** 05_procedure  
**Phase:** Plan  
**Point:** 6 of 8 — Dependencies

---

## What does component procedures need?

The Procedure layer is directly dependent on the **Process Layer (Layer 04)**. Procedures define the "how" of atomic steps, but they rely on processes to provide the "when" and the "context." A procedure for "Naming a Plan File" only makes sense within the context of a "Plan Phase" process. Without the higher-level workflows, the procedures would be a collection of "homeless instructions" with no clear purpose.

Another critical dependency is **Template Consistency**. For procedures to be effective, they must be based on a stable set of templates. If the templates for `va.md` or `01_definition.md` change without a corresponding update to the procedures, the agents will produce misaligned work. Procedures need the "Enabling Geometry" of the templates to be actionable.

Finally, procedures depend on **Standard Naming Conventions**. The "Search and Fetch" capabilities of AI agents rely on a predictable file tree. If the naming conventions defined in Layer 02 and implemented in Layer 05 are not strictly followed, the agents will lose context and the grounding chain will break. Procedures are the "Enforcers" of these conventions, but they also depend on them for their own legitimacy.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](./01_definition.md) | [02](./02_purpose.md) | [03](./03_scope.md) | [04](./04_stakeholders.md) | [05](./05_success_criteria.md) | [06](./06_dependencies.md) | [07](./07_constraints.md) | [08](./08_metrics.md)
- Execute: [01](../execute/01_approach.md) | [02](../execute/02_tools.md) | [03](../execute/03_workflow.md) | [04](../execute/04_artifacts.md) | [05](../execute/05_validation.md) | [06](../execute/06_rollback.md) | [07](../execute/07_monitoring.md) | [08](../execute/08_improvement.md)

**Adjacent layers:**
- Previous: [Process](../../04_process/plan/06_dependencies.md)
- Next: [Pattern](../../06_pattern/plan/06_dependencies.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Plan Overview](../../../dex/plan.md)

---

*DEXSPINE L0 — Filter Position 5 — Plan Point 6*
