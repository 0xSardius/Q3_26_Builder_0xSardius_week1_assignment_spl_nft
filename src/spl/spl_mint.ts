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

// mint address from spl_init
const mint = address("6gxbB27RCNTZpS1RHvL8FgwgwAt5bkgWgryih82NrB5s");

(async () => {
  try {
    const signer = await createKeyPairSignerFromBytes(loadWalletBytes());

    const amount = 100n * 10n ** 6n;

    // your code (derive what you need first)
    const [ata] = await findAssociatedTokenPda({
      owner: signer.address,
      tokenProgram: TOKEN_PROGRAM_ADDRESS,
      mint,
    });

    const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

    const msg = createTransactionMessage({ version: 0 });
    const msgWithPayer = setTransactionMessageFeePayerSigner(signer, msg);
    const msgWithLifetime = setTransactionMessageLifetimeUsingBlockhash(
      latestBlockhash,
      msgWithPayer,
    );

    const txMessage = appendTransactionMessageInstructions(
      [
        await getCreateAssociatedTokenIdempotentInstructionAsync({
          payer: signer,
          mint,
          owner: signer.address,
          tokenProgram: TOKEN_PROGRAM_ADDRESS,
        }),

        getMintToInstruction({
          mint,
          token: ata,
          mintAuthority: signer,
          amount,
        }),
      ],
      msgWithLifetime,
    );

    const signedTx = await signTransactionMessageWithSigners(txMessage);
    assertIsTransactionWithBlockhashLifetime(signedTx);
    const signature = getSignatureFromTransaction(signedTx);

    const sendAndConfirm = sendAndConfirmTransactionFactory({ rpc, rpcSubscriptions });
    await sendAndConfirm(signedTx, { commitment: "confirmed" });

    console.log(`mint txid: https://explorer.solana.com/tx/${signature}?cluster=devnet`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
