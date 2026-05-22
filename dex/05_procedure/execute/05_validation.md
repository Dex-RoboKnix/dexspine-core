# Procedure — Validation

**Spine:** DEX  
**Layer:** 05_procedure  
**Phase:** Execute  
**Point:** 5 of 8 — Validation

---

## How do we verify?

Validation of the Procedure layer is an **"Atomic Structural Check."** The primary verification step is to ensure that the output of every procedure matches its specification exactly. We use **Automated Validation Scripts** to check for "Binary Correctness"—is the file name correct? Does the template have all the required sections? Are the relative paths functional? If any of these checks fail, the procedure has failed validation and the work must be repeated.

We also perform **"Instruction-Output Audits."** This involves a human operator manually reviewing a sample of artifacts to ensure they match the "Spirit and Form" of the procedure. We ask: "Is the content 2-4 paragraphs? Does it avoid placeholders? Is the language machine-parseable?" This audit ensures that the agent is not just "following the steps" but is producing high-quality work that fulfills the procedure's intent.

Finally, we validate through **"Repeatability Testing."** We take a finished artifact and see if it can be recreated exactly by a different agent using the same procedure. If the outputs diverge significantly, it indicates that the procedure is too vague and needs refinement. Validation is the "Quality Gate" that ensures our atomic level of work remains irreducible and stable.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Process](../../04_process/execute/05_validation.md)
- Next: [Pattern](../../06_pattern/execute/05_validation.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 5 — Execute Point 5*
