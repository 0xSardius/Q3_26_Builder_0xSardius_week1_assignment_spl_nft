# Tests — written by me

The submission needs a screenshot of passing tests, and the program says: write your own.

Each task should have at least one test that performs the action and then **reads chain
state and asserts on it** — not just "the transaction didn't throw". For each task, decide:

- what account do I read back, and which field(s) prove the action happened?
- what is the *negative* case — who should NOT be able to do this — and can I prove it's rejected?
- what could pass this test while still being wrong? (that's the assertion I'm missing)

Suggested files: `01-spl-token.test.ts`, `02-core-nft.test.ts`. Vitest is configured to run
files one at a time with generous timeouts, since everything hits devnet.
