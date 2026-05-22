# Process — Metrics

**Spine:** DEX  
**Layer:** 04_process  
**Phase:** Plan  
**Point:** 8 of 8 — Metrics

---

## How do we measure system processes?

We measure the health of the Process layer using three primary metrics. First is the **"Rework Rate."** We track the frequency and scale of file rewrites or stage restarts caused by skipped foundational steps. A high rework rate is a direct signal that our "Concept Before Execution" process is being ignored or is ineffective. We aim for a "Linear Build Velocity" with minimal backward motion.

The second metric is **"Model Utilization Efficiency."** We track the cost per file and the time-to-complete for tasks in the economic cascade. By analyzing the "Model Switch Log" in `CASESTUDY.md`, we can see if we are over-utilizing "Pro" models for routine work or if "Flash" models are consistently failing quality checks. This data allows us to optimize our processes for the best "Value-per-Compute."

Finally, we track **"Checkpoint Compliance."** This is a simple measure of how many mandatory stop points were correctly observed by the system. Any "Process Breach" (where a stage was finished without a checkpoint) is recorded and used to improve the /conductor's enforcement mechanism. We also monitor "Human Review Latency"—the time spent waiting for approval—to ensure our processes are not creating unnecessary bottlenecks for our autonomous agents.

---

## Cross-References

**Within this layer:**
- [DEXFILTER Application](../DEXFILTER_APPLICATION.md)
- [MVE — Values](../mve/va.md) | [Human](../mve/hu.md) | [LLM](../mve/llm.md)
- Plan: [01](./01_definition.md) | [02](./02_purpose.md) | [03](./03_scope.md) | [04](../plan/04_stakeholders.md) | [05](./05_success_criteria.md) | [06](./06_dependencies.md) | [07](./07_constraints.md) | [08](./08_metrics.md)
- Execute: [01](../execute/01_approach.md) | [02](../execute/02_tools.md) | [03](../execute/03_workflow.md) | [04](../execute/04_artifacts.md) | [05](../execute/05_validation.md) | [06](../execute/06_rollback.md) | [07](../execute/07_monitoring.md) | [08](../execute/08_improvement.md)

**Adjacent layers:**
- Previous: [Policy](../../03_policy/plan/08_metrics.md)
- Next: [Procedure](../../05_procedure/plan/08_metrics.md)

**Root:**
- [DEXFILTER.md](../../../DEXFILTER.md) | [REDUCTION_BY_ADDITION.md](../../../REDUCTION_BY_ADDITION.md) | [Plan Overview](../../../dex/plan.md)

---

*DEXSPINE L0 — Filter Position 4 — Plan Point 8*
