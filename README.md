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

const { blessnet } = chains;
const { accountFactoryV2 } = contracts;
const { accountFactoryV2Abi } = abis;

// Example: add wagmi config to your app
const wagmiConfig = {
  chains: [blessnet],
};

const Layout = ({children}: {children: React.ReactNode}) => (
  <WagmiConfig config={wagmiConfig}>
    {children}
  </WagmiConfig>
)
```

or

```typescript
import { blessnet } from "@blessnet/config/chains";

const wagmiConfig = {
  chains: [blessnet],
};

// Example: add wagmi config to your app
const Layout = ({children}: {children: React.ReactNode}) => (
  <WagmiConfig config={wagmiConfig}>
    {children}
  </WagmiConfig>
)
```
