// Mint 100 tokens into my associated token account.
// Where does a balance live, and what has to exist before you can mint into it?
import {
  address,
  appendTransactionMessageInstructions,
  assertIsTransactionWithBlockhashLifetime,
  createKeyPairSignerFromBytes,
  createSolanaRpc,
  createSolanaRpcSubscriptions,
  createTransactionMessage,
  getSignatureFromTransaction,
  sendAndConfirmTransactionFactory,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLifetimeUsingBlockhash,
  signTransactionMessageWithSigners,
} from "@solana/kit";
import {
  findAssociatedTokenPda,
  getCreateAssociatedTokenIdempotentInstructionAsync,
  getMintToInstruction,
  TOKEN_PROGRAM_ADDRESS,
} from "@solana-program/token";
import { loadWalletBytes, RPC_URL, WS_URL } from "../wallet";

const rpc = createSolanaRpc(RPC_URL);
const rpcSubscriptions = createSolanaRpcSubscriptions(WS_URL);

// paste the mint address from spl_init
const mint = address("");

(async () => {
  try {
    const signer = await createKeyPairSignerFromBytes(loadWalletBytes());

    // your code

    // console.log(`mint txid: https://explorer.solana.com/tx/${signature}?cluster=devnet`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
