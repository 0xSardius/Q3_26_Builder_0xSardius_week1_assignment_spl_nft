/**
 * Plumbing only: load the devnet keypair bytes from ./devnet-wallet.json.
 * Building signers from these bytes is part of each task.
 */
import { readFileSync } from "fs";
import path from "path";

export const RPC_URL = "https://api.devnet.solana.com";
export const WS_URL = "wss://api.devnet.solana.com";

export function loadWalletBytes(): Uint8Array {
  const file = path.join(__dirname, "..", "devnet-wallet.json");
  return new Uint8Array(JSON.parse(readFileSync(file, "utf8")));
}
