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

    // Create a new keypair for the mint account
    const mint = await generateKeyPairSigner();

    const space = BigInt(getMintSize());

    const rent = await rpc.getMinimumBalanceForRentExemption(space).send();

    const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

    const msg = createTransactionMessage({ version: 0 });

    const msgWithPayer = setTransactionMessageFeePayerSigner(signer, msg);


    const msgWithLifetime = setTransactionMessageLifetimeUsingBlockhash(
      latestBlockhash,
      msgWithPayer,
    );

    const txMessage = appendTransactionMessageInstructions(
      [
        // System program: allocate the account, fund it, and assign it to the token program.
        getCreateAccountInstruction({
          payer: signer,
          newAccount: mint,
          lamports: rent,
          space,
          programAddress: TOKEN_PROGRAM_ADDRESS,
      }),

      // Initialize Mint instruction, with mint address, decimals, and mint authority as the signer.
      getInitializeMintInstruction({
        mint: mint.address,
        decimals: 6,
        mintAuthority: signer.address,
      }),
    
    ], msgWithLifetime);

    const signedTx = await signTransactionMessageWithSigners(txMessage);

    assertIsTransactionWithBlockhashLifetime(signedTx);

    const signature = getSignatureFromTransaction(signedTx);

    const sendAndConfirm = sendAndConfirmTransactionFactory({ rpc, rpcSubscriptions });

    await sendAndConfirm(signedTx, { commitment: "confirmed" });

    console.log(`Mint created: ${mint.address}`);
    console.log(`tx: https://explorer.solana.com/tx/${signature}?cluster=devnet`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
