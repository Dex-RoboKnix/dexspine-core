# Policy — Rollback

**Spine:** DEX  
**Layer:** 03_policy  
**Phase:** Execute  
**Point:** 6 of 8 — Rollback

---

## How do we undo?

Rollback for the Policy layer involves both **"Rule Reversion"** and **"Decision Correction."** If a policy change is found to be harmful or misaligned, we use `git revert` to return the policy documents in the L0 spine to their last known-good state. This is the "Policy Reversion" step. It ensures that the system's "Operating System Rules" are restored instantly.

The second part is "Decision Correction." When a policy is reverted, we must audit all decisions made while the "bad policy" was in effect. This is our "Governance Safety Net." If an agent took an action that would have been blocked under the restored policy, we use Git to roll back the project state to the point before that action was taken. This ensures that a single bad policy cannot leave a permanent "Toxic Legacy" in the system's artifacts.

Finally, we record the rollback in the `CASESTUDY.md`. We document the reason for the policy reversion and the steps taken to correct any misaligned decisions. This "Post-Mortem" is essential for learning from our governance failures and for ensuring that the same mistake is not made twice. Rollback is the mechanism that ensures our "Human Authority" remains absolute, even over the system's own rules.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Principles](../../02_principles/execute/06_rollback.md)
- Next: [Process](../../04_process/execute/06_rollback.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 3 — Execute Point 6*
