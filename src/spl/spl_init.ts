/**
 * Task 1a — create a new SPL mint on devnet.
 *
 * Goal: a mint account with 6 decimals, with my wallet as mint authority.
 *
 * Answer in APPROACH.md before coding:
 *   - A mint is an account. Which program must OWN that account, and which program
 *     must CREATE it? Are those the same program?
 *   - How big is a mint account, and how do you find out?
 *   - Why does the new mint's keypair have to sign?
 *
 * Where to look: @solana-program/system and @solana-program/token export one
 * instruction builder per instruction; their types are under
 * node_modules/@solana-program/<pkg>/dist/types/generated/instructions/.
 * Kit's transaction pipeline lives in @solana/kit.
 */
import { loadWalletBytes, RPC_URL, WS_URL } from "../wallet";

(async () => {
  try {
    // your code
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
