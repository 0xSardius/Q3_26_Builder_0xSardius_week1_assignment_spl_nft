// Create a new SPL mint (6 decimals, my wallet as mint authority).
// Two instructions from two programs — decide which does what.
import {
  appendTransactionMessageInstructions,
  assertIsTransactionWithBlockhashLifetime,
  createKeyPairSignerFromBytes,
  createSolanaRpc,
  createSolanaRpcSubscriptions,
  createTransactionMessage,
  generateKeyPairSigner,
  getSignatureFromTransaction,
  sendAndConfirmTransactionFactory,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLifetimeUsingBlockhash,
  signTransactionMessageWithSigners,
} from "@solana/kit";
import {
  getInitializeMintInstruction,
  getMintSize,
  TOKEN_PROGRAM_ADDRESS,
} from "@solana-program/token";
import { getCreateAccountInstruction } from "@solana-program/system";
import { loadWalletBytes, RPC_URL, WS_URL } from "../wallet";

const rpc = createSolanaRpc(RPC_URL);
const rpcSubscriptions = createSolanaRpcSubscriptions(WS_URL);

(async () => {
  try {
    const signer = await createKeyPairSignerFromBytes(loadWalletBytes());

    // your code

    // console.log(`Mint created: ${mint.address}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
