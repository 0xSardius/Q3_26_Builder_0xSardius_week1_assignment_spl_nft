/**
 * Task 2 — mint an NFT with MPL Core.
 *
 * Goal: a Core asset owned by my wallet, named, pointing at the metadata URI.
 *
 * Answer in APPROACH.md before coding:
 *   - How many accounts does a Core asset need, compared to the SPL flow?
 *     Where do `owner`, `name` and `uri` live?
 *   - Who signs at creation, and why?
 *   - What is the difference between the asset's OWNER and its UPDATE AUTHORITY?
 *     Which one is me by default, and where is that decided?
 *
 * Where to look: @metaplex-foundation/mpl-core exports high-level helpers in
 * dist/src/instructions/ and the account types in dist/src/generated/.
 */
import { loadWalletBytes, RPC_URL } from "../wallet";

// paste the metadata URI from nft_upload
const METADATA_URI = "";

(async () => {
  try {
    // your code
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
