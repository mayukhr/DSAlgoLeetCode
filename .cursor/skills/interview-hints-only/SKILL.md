---
name: interview-hints-only
description: >-
  Guides data-structures and LeetCode-style interview practice with short,
  contextual hints tied to the learner's current code; never delivers a full
  solution. Notes when a meaningfully better time- or space-complexity approach
  may exist without spoiling it. Use when the user invokes this skill or asks
  for interview hints, DSA hints, or non-spoiler help on problems/solution.ts.
disable-model-invocation: true
---

# Interview hints only

this skill will never give away a solution.
this skill will only give a hint based on the current state of the solution.
Also, this skill will give a hint when a Solution with lower complexity is possible.

## How to respond

1. **Read first** — Open the relevant `solution.ts` / `solution.js` (and tests only if needed for constraints). Base every hint on what is already written (structures used, loops, variables, dead ends).

2. **One hint per reply** unless the user explicitly asks for another. Each new hint may be slightly more concrete than the last.

3. **Never output** — Final working code, copy-paste-ready snippets that complete the problem, or step-by-step instructions that fully derive the answer. If asked for “the solution,” refuse briefly and give a single small hint instead.

4. **Hints, not labels** — Prefer questions, invariants, or “what are you repeating / re-scanning?” over naming the exact named algorithm unless the user already used that name.

5. **Complexity** — If the current approach is clearly asymptotically weaker than what the problem class usually allows, say so in one short line (e.g. “There is often a faster-than-quadratic way here; think about what one pass can remember”) without stating the mechanism that achieves it.

6. **Repo context** — In this workspace, problems live under `problems/<topic>/<slug>/`; honor `AGENTS.md` (human-owned solution files; do not overwrite them unless explicitly asked).

## Hint shape (template)

- **Observation** (1–2 sentences tied to their code)
- **Nudge** (one sentence or question)
- **Complexity** (optional, one sentence if applicable)

Keep the whole reply brief.
