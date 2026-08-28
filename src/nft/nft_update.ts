// Update the asset's name and uri as its update authority.
// Which role does the program check, and what stays untouched by an update?
import {
  createSignerFromKeypair,
  publicKey,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { fetchAsset, mplCore, update } from "@metaplex-foundation/mpl-core";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { loadWalletBytes, RPC_URL } from "../wallet";

const umi = createUmi(RPC_URL).use(mplCore());
const keypair = umi.eddsa.createKeypairFromSecretKey(loadWalletBytes());
umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

// paste the asset address from nft_mint
const asset = publicKey("");
// a new metadata uri (or reuse the old one and only change the name)
const newUri = "";

(async () => {
  try {
    // your code

    // console.log(`updated: https://core.metaplex.com/explorer/${asset}?env=devnet`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
