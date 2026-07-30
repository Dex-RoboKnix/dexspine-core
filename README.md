# DEXSPINE: Universal Cognitive Infrastructure

**Version:** 0.1.0-L0  
**Status:** Alpha / Draft  
**License:** TBD  
**Date:** 2026-02-09

---

> **Canonical copy:** This is the canonical specification authority for the DexSpine cognitive infrastructure and DEX838 wire grammar; `packages/dexspine-core` is the canonical JS/Node.js runtime parser that implements it.

## 1. What is DEXSPINE?

DEXSPINE is a universal cognitive infrastructure designed to provide a stable, vendor-agnostic foundation for artificial intelligence and human collaboration. It is not a product, but a spine—a structural framework that ensures context preservation, decision grounding, and architectural consistency across sessions, models, and platforms. By using Markdown as its wire protocol, DEXSPINE remains human-readable and machine-parseable, serving as the irreducible core of cognitive systems.

The core problem DEXSPINE solves is the "ephemeral context" problem inherent in most Large Language Model (LLM) interactions. Without a rigid, shared foundation, AI agents and their human counterparts often lose track of foundational values, previous decisions, and the overarching "why" of a project. DEXSPINE provides this "why" by encoding the system's DNA into a series of structured documents that any model, regardless of its provider or version, can ingest and respect.

The infrastructure is built to support multiple "spines" or specialized foundations. While this repository defines the **DEX** spine (the cognitive core), the framework anticipates the development of:
- **NULLDEX:** Specialized for abstract, null-state processing and "clean slate" reasoning.
- **OPENDEX:** A community-driven open standard for interoperable AI agents and shared cognitive assets.
- **DEXSPINE L0:** This foundational layer, providing the absolute minimum viable structure for any complex system.

Together, these form a complete ecosystem for building reliable, autonomous, and human-aligned intelligence.

## 2. The Fundamental Law

The core operational principle of DEXSPINE is the **8:3:8 Law of Reduction by Addition**. This law provides a deterministic path for resolving ambiguity and preventing system deadlocks. In many systems, a lack of clear information leads to a "0" state—a halt or a failure. DEXSPINE rejects the possibility of a 0 state.

> **Law 8:3:8:** When a clear binary (1/0) path cannot be defined, the system MUST delegate to `dexfilter`. The filter performs reduction by addition, presenting a structured 1 (valid output) and allowing the system to continue.

### Why "Reduction by Addition"?
Typically, analysis seeks to reduce a problem to its simplest components. However, in cognitive systems, "simpler" is often synonymous with "vague." By **adding** structure—by forcing a subject through 19 specific analytical points—we **reduce** the ambiguity. We don't make the problem smaller; we make the definition of the problem larger and more precise until the solution becomes obvious.

For more details, see [DEXFILTER.md](./DEXFILTER.md) and [REDUCTION_BY_ADDITION.md](./REDUCTION_BY_ADDITION.md).

## 3. Structure

DEXSPINE is organized into six hierarchical layers. This hierarchy ensures that every procedure is grounded in a process, every process is guided by a policy, and every policy is derived from a principle, which in turn reflects a core value. This "Grounding Chain" is essential for system integrity.

| Layer | Name | Core Question | Description |
|-------|------|---------------|-------------|
| 01 | Values | What do we believe? | The foundational "why" that drives all system behavior. These are the non-negotiable beliefs that ground the entire cognitive architecture. |
| 02 | Principles | How do we act? | The actionable rules derived directly from values. Principles translate abstract beliefs into concrete behavioral constraints for agents. |
| 03 | Policy | What are the rules? | The decision-making frameworks that govern operations. Policies define how conflicts are resolved and how the human-AI authority loop is managed. |
| 04 | Process | What is the workflow? | The high-level workflows that transform inputs to outputs. Processes define the stages of work and the order of operations for system-wide tasks. |
| 05 | Procedure | What are the steps? | The specific, repeatable instructions for discrete tasks. Procedures are the "atomic" level of work, ensuring consistency across different agents. |
| 06 | Pattern | What are the recurring solutions? | The execution patterns that emerge from repeated success. Patterns capture "what works" so that the system can evolve without reinventing the wheel. |

### The 8:3:8 Filter
Each layer is filtered through three distinct phases to ensure 360-degree coverage and irreducible completeness:

1. **Plan Phase (8 Questions):**
   - **Definition:** The subject's identity.
   - **Purpose:** The subject's reason for being.
   - **Scope:** The subject's boundaries.
   - **Stakeholders:** The entities impacted by the subject.
   - **Success Criteria:** The definition of "done" and "good."
   - **Dependencies:** What the subject requires to function.
   - **Constraints:** The hard limits the subject must respect.
   - **Metrics:** How the subject's performance is quantified.

2. **MVE Phase (3 Extractions):**
   - **Value MVE:** The spiritual or ethical core of the subject.
   - **Human MVE:** The qualitative, intuitive insights that only humans provide.
   - **LLM MVE:** The quantitative, structural patterns that systematic analysis reveals.

3. **Execute Phase (8 Questions):**
   - **Approach:** The high-level strategy for implementation.
   - **Tools:** The specific instruments required for the job.
   - **Workflow:** The sequence of actions to be taken.
   - **Artifacts:** The tangible outputs produced by the execution.
   - **Validation:** The mechanism for proving the artifacts are correct.
   - **Rollback:** The safety net for undoing changes if they fail.
   - **Monitoring:** The ongoing observation of the artifacts in situ.
   - **Improvement:** The feedback loop for evolving the execution.

Totaling 19 files per layer, plus root documentation and overviews, the L0 spine consists of **126 files**. This ensures a "100% (asymptotic)" coverage of the system's foundation.

## 4. Getting Started

To begin using DEXSPINE in your own environment, follow these steps:

1. **Clone the Infrastructure:** Initialize a new repository using this L0 spine as your template.
2. **Review the Root Laws:** Familiarize yourself with the 8:3:8 law in `REDUCTION_BY_ADDITION.md`. This is the most important document in the system.
3. **Audit the Values:** Read `dex/01_values/plan/01_definition.md` to see if your project's goals align with the DEX core.
4. **Define Your Subject:** Identify the core problem you are solving.
5. **Apply the Filter:** Create a new directory for your subject and apply the 19-point filter. You can use the templates provided in the specification.

## 5. How to Use

The system is designed to be read both by humans (for alignment) and by LLMs (for execution context).

- **For Humans:** Use the spine as a "map" of the system. If you are unsure why a procedure exists, trace it back up through Process, Policy, and Principle to find the Value that birthed it.
- **For AI Agents:** Use the spine as your "system prompt extension." By reading the relevant layer files, an agent gains deep context that prevents "hallucinations of purpose" and ensures its actions are consistent with the established architecture.

### Navigation Tips
- Browse the [Plan Overview](./dex/plan.md) to understand the "what" and "why."
- Browse the [Execute Overview](./dex/execute.md) for the practical "how."
- Every file contains cross-references to its siblings and parents, enabling "infinite browsing" of the system's logic.

## 6. Related Repositories and Licensing

DEXSPINE is the distillation of years of research into LLM-Human collaboration and cognitive architecture:
- **Dex_RoboKnix:** The original implementation and research repository (GPL-3.0). This is where the patterns first emerged. [View Repository](https://github.com/danichese/Dex_RoboKnix)
- **Dex Ruliad:** Theoretical explorations into the nature of structured thought and Ruliad-space (MIT).
- **DEX CLI:** The tool used to build and interact with this spine.

### Licensing
The DEXSPINE L0 specification and the files generated by it are currently provided for review. Licensing terms are under evaluation to ensure maximum interoperability while protecting the core "Infrastructure, not Product" value.

---

## The Asymptotic Guarantee
DEXSPINE pursues the 100% state. While perfection is never achieved, the structure ensures that we are always moving closer. 99.99% + 0.01% = 100%.

Built on a bench in Leeds. Infrastructure for everyone.

