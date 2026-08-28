/**
 * Task 1c — transfer tokens to another wallet.
 *
 * Goal: 10 tokens move from my ATA to the recipient's ATA.
 *
 * Answer in APPROACH.md before coding:
 *   - The recipient may not have a token account yet. Who creates it, who pays,
 *     and does the recipient need to sign anything?
 *   - What does the "Checked" variant of transfer verify that the plain one doesn't?
 *     What goes wrong without it?
 *   - What must the recipient address be — a wallet, or a token account? What
 *     happens if you pass the wrong kind?
 *   - Security: what stops someone else from moving my tokens with this same code?
 */
import { loadWalletBytes, RPC_URL, WS_URL } from "../wallet";

// paste the mint address from 01_init
const MINT = "";
// a WALLET address to send to (not a token account)
const RECIPIENT = "";

(async () => {
  try {
    // your code
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
