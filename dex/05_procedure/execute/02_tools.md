# Procedure — Tools

**Spine:** DEX  
**Layer:** 05_procedure  
**Phase:** Execute  
**Point:** 2 of 8 — Tools

---

## What tools enable component procedures?

The tools for enabling Component Procedures are focused on **"Actionable Automation."** We use **Bash and PowerShell scripts** to automate the creation of directory structures and the instantiation of files from templates. These scripts are the "Muscle" of our procedures, ensuring that the "Physical Geometry" of the spine is built correctly and efficiently. By scripting these atomic steps, we eliminate the risk of human or agent error in file naming and placement.

We also use **Markdown Templates** as a core procedural tool. These templates define the "Molds" for every type of file in the system (Plan, MVE, Execute). Each template includes pre-filled frontmatter and section headings, forcing the agent to provide the correct metadata and content for each task. The templates are the "Instructions in Form," ensuring that the "Atomic Output" is always high-fidelity.

Finally, we rely on **Validation Scripts** (linters and custom checkers) to verify procedural compliance. These tools check for non-empty files, correct naming, functional links, and appropriate line counts. They provide the "Automated Audit" that ensures every procedure was followed to the letter. The tools are chosen to be simple, vendor-agnostic, and highly effective at maintaining the system's structural integrity.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Process](../../04_process/execute/02_tools.md)
- Next: [Pattern](../../06_pattern/execute/02_tools.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 5 — Execute Point 2*
