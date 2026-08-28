// Upload the image, then a metadata JSON that points at it, to Irys devnet.
// Which URI ends up on-chain, and which one is only referenced from the JSON?
import {
  createGenericFile,
  createSignerFromKeypair,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";
import { readFile } from "fs/promises";
import path from "path";
import { loadWalletBytes, RPC_URL } from "../wallet";

const umi = createUmi(RPC_URL).use(
  irysUploader({ address: "https://devnet.irys.xyz" }),
);
const keypair = umi.eddsa.createKeypairFromSecretKey(loadWalletBytes());
umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

const IMAGE = path.join(__dirname, "../../assets/orichalcum.jpg");

(async () => {
  try {
    // your code

    // console.log("image uri:    ", imageUri);
    // console.log("metadata uri: ", metadataUri);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
