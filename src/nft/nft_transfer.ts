// Transfer the asset to another wallet.
// Does the recipient need anything? After this, who can update it and who can burn it?
import {
  createSignerFromKeypair,
  publicKey,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { fetchAsset, mplCore, transfer } from "@metaplex-foundation/mpl-core";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { loadWalletBytes, RPC_URL } from "../wallet";

const umi = createUmi(RPC_URL).use(mplCore());
const keypair = umi.eddsa.createKeypairFromSecretKey(loadWalletBytes());
umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

// paste an asset address (mint a second one with nft_mint)
const asset = publicKey("");
// a WALLET address to send to
const newOwner = publicKey("");

(async () => {
  try {
    // your code

    // console.log(`transferred: https://core.metaplex.com/explorer/${asset}?env=devnet`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
