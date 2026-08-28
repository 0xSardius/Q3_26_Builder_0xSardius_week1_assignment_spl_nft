/**
 * Task 1b — mint tokens to myself.
 *
 * Goal: 100 tokens in my associated token account for the mint from spl_init.
 *
 * Answer in APPROACH.md before coding:
 *   - Where does a token balance live? (It is not in the mint.)
 *   - What is an ATA, what are its seeds, and why does that matter for wallets?
 *   - Two instructions are needed. What are they, and why that order?
 *   - The amount is an integer. 100 tokens with 6 decimals is what integer?
 *   - Which account must sign, and what is it proving?
 */
import { loadWalletBytes, RPC_URL, WS_URL } from "../wallet";

// paste the mint address from spl_init
const MINT = "";

(async () => {
  try {
    // your code
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
