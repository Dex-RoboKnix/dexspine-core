# Principles — Scope

**Spine:** DEX  
**Layer:** 02_principles  
**Phase:** Plan  
**Point:** 3 of 8 — Scope

---

## What is included and excluded?

The scope of the Principles layer includes all universal operational rules that govern the DEX system. This covers architectural principles (e.g., "L0 Before L1"), communication principles (e.g., "Markdown as Wire Protocol"), and task-level principles (e.g., "1 Task = 1 File"). These principles are intended to be broad enough to apply to any part of the system while being specific enough to be used as a checklist during review.

Included in the scope are the rules for "Single Agent Focus," "Human Veto," and the requirement for "Sequential Task Execution." These are the core behavioral constraints that differentiate DEX from other cognitive frameworks. The scope also includes the "Composability Over Complexity" principle, which mandates that the system should be built from simple, well-defined parts rather than large, monolithic ones.

Excluded from the scope are project-specific rules, transient tool configurations, or low-level implementation details. While principles *inform* these things, they do not *define* them. For example, the principle of "Markdown as Wire Protocol" is in scope, but the specific linter rules for a python file are not. The Principles layer is concerned with the "Actionable Truths" of the system, leaving the "Rules for Specific Cases" to the Policy and Process layers.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](./01_definition.md) | [02](./02_purpose.md) | [03](./03_scope.md) | [04](./04_stakeholders.md) | [05](./05_success_criteria.md) | [06](./06_dependencies.md) | [07](./07_constraints.md) | [08](./08_metrics.md)
- Execute: [01](../execute/01_approach.md) | [02](../execute/02_tools.md) | [03](../execute/03_workflow.md) | [04](../execute/04_artifacts.md) | [05](../execute/05_validation.md) | [06](../execute/06_rollback.md) | [07](../execute/07_monitoring.md) | [08](../execute/08_improvement.md)

**Adjacent layers:**
- Previous: [Values](../../01_values/plan/03_scope.md)
- Next: [Policy](../../03_policy/plan/03_scope.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Plan Overview](../../../dex/plan.md)

---

*DEXSPINE L0 — Filter Position 2 — Plan Point 3*
