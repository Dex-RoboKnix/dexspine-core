# Policy — Tools

**Spine:** DEX  
**Layer:** 03_policy  
**Phase:** Execute  
**Point:** 2 of 8 — Tools

---

## What tools enable decision policies?

The primary tool for enabling Decision Policies is the **Gemini CLI (and its /conductor subsystem)**. This tool acts as the "Policy Enforcer" for agent workflows. It manages the checkpoint system, tracks task progress, and provides the interface for human approval or veto. The /conductor is the "Active Governance" tool that bridges the gap between the static policy documents and the dynamic execution of tasks.

We also use **CASESTUDY.md** as a core tool for policy auditing. By recording every model switch, checkpoint approval, and escalation event in a human-readable log, we create a "Black Box Recorder" for the system's decisions. This log is essential for verifying that our policies are being followed and for identifying areas where the policy layer needs to be improved. CASESTUDY.md is our primary "Transparency Tool."

Finally, we rely on **Git and Pull Requests** to manage the "Constitution" of the system. Every change to an L0 policy must be submitted as a PR and reviewed by a human (Layer 8). The PR process is the "Governance Gate" that ensures no unapproved policy can enter the system. We use branch protection rules to enforce this "Manual Approval" tool, ensuring that the system's rules are always under human control.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Principles](../../02_principles/execute/02_tools.md)
- Next: [Process](../../04_process/execute/02_tools.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 3 — Execute Point 2*
