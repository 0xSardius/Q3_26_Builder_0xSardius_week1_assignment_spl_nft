/**
 * Task 2 prep — upload the image and the metadata JSON to Irys (devnet).
 *
 * Goal: two URIs — one for assets/orichalcum.jpg, one for a JSON document that
 * points at it — printed so they can be pasted into 02_mint.
 *
 * Answer in APPROACH.md before coding:
 *   - What is the relationship between the image URI, the metadata JSON, and the
 *     asset's on-chain `uri`? Which one goes where?
 *   - Which fields does a wallet read from the JSON, and which are optional?
 *   - Who pays for an Irys upload, and with what?
 *
 * Where to look: @metaplex-foundation/umi-uploader-irys, and umi's `uploader`
 * interface. Metaplex JSON schema: https://www.metaplex.com/docs/smart-contracts/core/json-schema
 */
import { loadWalletBytes, RPC_URL } from "../wallet";

(async () => {
  try {
    // your code
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
