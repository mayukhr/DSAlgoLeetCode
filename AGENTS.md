# Agent instructions — DSAlgoLeetCode interview prep

This repo is for **data structures, algorithms, and LeetCode-style practice** in JavaScript/TypeScript. The human writes `solution.ts` (or `solution.js`); **agents default to generating or updating tests only**, unless the user explicitly asks for solution code.

## Layout

- Problems live under `problems/<topic>/<problem-slug>/`.
- **Solution file:** `solution.ts` or `solution.js` (human-owned).
- **Test file:** `solution.test.ts` or `solution.test.js` beside it (agent-owned unless the user asks otherwise).

Example: [problems/example/two-sum/](problems/example/two-sum/).

## Export contract

- Use **named exports** for the API under test (e.g. `export function twoSum(...)`), not default exports.
- Test imports must follow TypeScript **NodeNext** ESM rules: import the implementation with a **`.js` extension** in the import path when the source file is `.ts` (e.g. `import { twoSum } from './solution.js'`).

## When the user names or adds a problem

1. Create or update `solution.test.ts` next to their solution file (same basename).
2. Prefer `describe` blocks grouped by behavior; use `it.each` or small tables when many similar cases exist.
3. **Corner cases** — include a sensible mix of:
   - empty or minimal inputs (e.g. `[]`, one/two elements) when the problem allows or defines behavior
   - boundary values (0, extremes, duplicates) when relevant
   - impossible/invalid inputs **only** if the statement defines expected behavior; otherwise do not assume throws vs `undefined`
   - TypeScript-only edge cases when the signature allows them (optional parameters, unions, etc.)
4. **Do not** overwrite or auto-fill `solution.ts` / `solution.js` unless the user clearly asks for implementation help.

## Running tests

From repo root: `npm test` (single run) or `npm run test:watch` (watch mode).
