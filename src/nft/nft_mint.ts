// Mint an MPL Core asset owned by my wallet.
// One account — where do owner, name and uri live, and who signs at creation?
import {
  createSignerFromKeypair,
  generateSigner,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { create, mplCore } from "@metaplex-foundation/mpl-core";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { loadWalletBytes, RPC_URL } from "../wallet";

const umi = createUmi(RPC_URL).use(mplCore());
const keypair = umi.eddsa.createKeypairFromSecretKey(loadWalletBytes());
umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

// paste the metadata uri from nft_upload
const metadataUri = "";

(async () => {
  try {
    // your code

    // console.log(`asset: https://core.metaplex.com/explorer/${asset.publicKey}?env=devnet`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
