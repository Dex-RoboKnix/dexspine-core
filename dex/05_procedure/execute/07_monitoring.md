# Procedure — Monitoring

**Spine:** DEX  
**Layer:** 05_procedure  
**Phase:** Execute  
**Point:** 7 of 8 — Monitoring

---

## How do we track?

Monitoring for the Procedure layer is focused on **"Execution Accuracy and Deviation Tracking."** we track how often procedures are followed correctly without the need for a retry or rollback. A high "First-Time Compliance Rate" indicates that our procedures are clear and effective. We use automated script logs and `CASESTUDY.md` entries to maintain a real-time view of the "Atomic Health" of the build process.

We also monitor **"Procedural Friction."** This is done by tracking the time it takes for an agent to complete a specific procedure. If we see a "Latency Spike" for a particular task (e.g., "MVE Extraction"), it indicates that the procedure is too complex or that the model is struggling with the instructions. Monitoring ensures that our atomic steps don't become bottlenecks for the entire system.

Finally, we track **"Link and Naming Integrity Trends."** By running periodic "Geometry Audits" on the file tree, we can see if the system's structural quality is improving or decaying over time. A positive trend confirms that our procedures are successfully "Embedding the DEX Habit" in the agents. Monitoring is the "Sensory Feedback" that allows our atomic level of work to remain stable and irreducible.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](../plan/01_definition.md) | [02](../plan/02_purpose.md) | [03](../plan/03_scope.md) | [04](../plan/04_stakeholders.md) | [05](../plan/05_success_criteria.md) | [06](../plan/06_dependencies.md) | [07](../plan/07_constraints.md) | [08](../plan/08_metrics.md)
- Execute: [01](./01_approach.md) | [02](./02_tools.md) | [03](./03_workflow.md) | [04](../execute/04_artifacts.md) | [05](./05_validation.md) | [06](./06_rollback.md) | [07](./07_monitoring.md) | [08](./08_improvement.md)

**Adjacent layers:**
- Previous: [Process](../../04_process/execute/07_monitoring.md)
- Next: [Pattern](../../06_pattern/execute/07_monitoring.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Execute Overview](../../../dex/execute.md)

---

*DEXSPINE L0 — Filter Position 5 — Execute Point 7*
