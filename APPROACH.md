# Approach log

Written *before* coding each task, in my own words. Wrong is fine — this is the reasoning
record the program grades. Updated after, with what actually happened.

Template for each task:

```
## Task N — <name>

### Before
- Accounts involved (which exist already, which get created, who owns each):
- Who signs, and why each signature is needed:
- Who pays, for what:
- Instructions, in order, and which program each goes to:
- What I'm unsure about:

### After
- What was wrong in my plan:
- Errors I hit, my hypothesis for each, and what the real cause was:
- What I'd explain differently now:
```

---

## Task 1 — Mint and transfer an SPL token

### Before
- spl_init creates an SPL token mint. THe signature authorizes the creation of a keypair that can be used to create a mint account.
- The mint account needs to know the size determind by the token program.
- the person establishing the account pays the rent, and it is received by the account owner. 

### After
Successfully created both instructions for the creating the account and getting the instruction: 6gxbB27RCNTZpS1RHvL8FgwgwAt5bkgWgryih82NrB5s

## Task 2 — Mint an NFT with MPL Core

### Before

### After


## Task 3 — Update the NFT's name and metadata as update authority

### Before

### After


## Task 4 (ext) — Mint a second NFT

### Before

### After


## Task 5 (ext) — Transfer the NFT to another wallet

### Before

### After


## Task 6 (ext) — Burn the NFT and reclaim rent

### Before

### After
