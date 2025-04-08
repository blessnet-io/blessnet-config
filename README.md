# BlessNet SDK

This repository contains the official SDK package for interacting with BlessNet.

## Package: `@blessnet/config`

Provides:
- `chains`: Viem-compatible chain definitions for BlessNet mainnet and testnets.
- `contracts`: Addresses for core BlessNet smart contracts.
- `abis`: ABIs for core BlessNet smart contracts.

## Development

This project uses TypeScript.

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Build the package:**
    ```bash
    npm run build
    ```
    This compiles TypeScript files from `src` to JavaScript files in `dist`.

## Usage

Install the package in your project:

```bash
npm install @blessnet/config viem
```

Then import and use the chains, contract addresses, and ABIs:

```typescript
import { chains, contracts, abis } from "@blessnet/config";
import { createPublicClient, http, getContract } from 'viem';

// Determine the target chain (e.g., based on environment)
const targetChain = process.env.NODE_ENV === 'production' ? chains.blessnet : chains.blessnetSepolia;

// Get the contract address for the target chain
const factoryAddress = contracts.accountFactoryV2[targetChain.id];

if (!factoryAddress) {
  throw new Error(`AccountFactoryV2 address not found for chain ID ${targetChain.id}`);
}

console.log(`Using chain: ${targetChain.name} (ID: ${targetChain.id})`);
console.log(`Account Factory V2 address: ${factoryAddress}`);

// Example: Create a viem client
const client = createPublicClient({
  chain: targetChain,
  transport: http()
});

// Example: Interact with the contract
async function getImplementation() {
  const implementationAddress = await client.readContract({
    address: factoryAddress,
    abi: abis.accountFactoryV2Abi,
    functionName: 'getImplementation',
  });
  console.log('Implementation Address:', implementationAddress);
}

getImplementation();

// Example: Using getContract helper
const accountFactoryContract = getContract({
  address: factoryAddress,
  abi: abis.accountFactoryV2Abi,
  client: client,
});

// You can now call contract methods directly on accountFactoryContract
// e.g., const result = await accountFactoryContract.read.getImplementation();
