# Values — Tools

**Spine:** DEX  
**Layer:** 01_values  
**Phase:** Execute  
**Point:** 2 of 8 — Tools

---

## What tools enable core values?

To maintain the value of "Vendor Agnosticism," the tools used to implement and manage the Values layer are intentionally simple and ubiquitous. The primary tool is **Markdown**, which serves as our "Wire Protocol." Markdown is human-readable, version-control friendly, and can be parsed by almost any LLM or text editor. This ensures that the system's core beliefs are never locked into a proprietary format or platform.

For versioning and collaboration, we rely on **Git** and platforms like **GitHub**. Git provides a complete audit trail of how the values have evolved over time, fulfilling our requirement for transparency and accountability. The use of "Pull Requests" for value changes ensures that the "Human Authority" (Layer 8) is always the final arbiter of what the system believes. No value is updated without human review and approval.

Finally, we use the **Gemini CLI (or similar agent tools)** to interact with the spine. These tools allow agents to "read" the values layer and incorporate the findings into their execution plans. We avoid specialized "alignment software" or complex configuration management systems, preferring instead the simplicity of a well-organized file tree. The tools are chosen to support the value of "Infrastructure, Not Product"—they are the basic building blocks of the digital world.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](./04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: None
- Next: [Principles](../../02_principles/execute/02_tools.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 1 — Execute Point 2*
