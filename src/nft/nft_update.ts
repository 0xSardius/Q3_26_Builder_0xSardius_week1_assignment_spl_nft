/**
 * Task 3 — update the NFT's name and metadata URI as the update authority.
 *
 * Answer in APPROACH.md before coding:
 *   - Which role is allowed to do this, and how does the program know I hold it?
 *   - What does NOT change when you update? (Think about ownership and plugins.)
 *   - Security: what would an attacker need in order to rewrite my NFT's metadata?
 *     What does that imply about who should hold update authority on a real collection?
 *   - Why do mpl-core helpers want the fetched asset object rather than just its address?
 */
import { loadWalletBytes, RPC_URL } from "../wallet";

// paste the asset address from nft_mint
const ASSET = "";
// a second metadata URI (upload another JSON, or reuse the first one and only change the name)
const NEW_URI = "";

(async () => {
  try {
    // your code
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
