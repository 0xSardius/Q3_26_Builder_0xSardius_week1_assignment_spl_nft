// Burn the asset and reclaim the rent.
// Who may burn, where do the lamports go — and does the account still exist afterwards? Predict, then check.
import {
  createSignerFromKeypair,
  publicKey,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { burn, fetchAsset, mplCore } from "@metaplex-foundation/mpl-core";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { loadWalletBytes, RPC_URL } from "../wallet";

const umi = createUmi(RPC_URL).use(mplCore());
const keypair = umi.eddsa.createKeypairFromSecretKey(loadWalletBytes());
umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

// paste the asset address to burn (must be owned by this wallet)
const asset = publicKey("");

(async () => {
  try {
    // your code

    // console.log(`burned: https://explorer.solana.com/address/${asset}?cluster=devnet`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
