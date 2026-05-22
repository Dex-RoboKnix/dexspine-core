# Policy — Workflow

**Spine:** DEX  
**Layer:** 03_policy  
**Phase:** Execute  
**Point:** 3 of 8 — Workflow

---

## What is the process?

The workflow for Decision Policies is an **"Action-Approval-Log"** cycle. It begins when an agent or human initiates a task defined in the `spec.md`. The system (via the /conductor or a manual checklist) identifies the mandatory checkpoints for that task. As the agent works, it must stop at each checkpoint and present its "Artifacts" for human review. This is the "Stop-and-Identify" stage of the policy workflow.

The second stage is "Human Review and Veto." The human operator audits the agent's work against the L0 values and principles. If the work is aligned, the human issues an "Approve" command, and the agent continues. If the work is misaligned, the human issues a "Veto" or "Retry" command. This "Gated Workflow" ensures that the human's Layer 8 authority is always exercised before significant progress is made.

The final stage is "Automated Logging." Every decision—whether an approval, a veto, or an escalation—is automatically recorded in the `CASESTUDY.md`. This ensures that the system's "Decision History" is always up-to-date and transparent. The workflow is designed to be "High-Friction" at the decision points but "Low-Friction" during execution, balancing safety with productivity.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Principles](../../02_principles/execute/03_workflow.md)
- Next: [Process](../../04_process/execute/03_workflow.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 3 — Execute Point 3*
