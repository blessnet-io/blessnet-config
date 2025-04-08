import { defineChain, Chain } from 'viem';

export const blessnet = defineChain({
  id: 45513,
  name: 'Blessnet',
  nativeCurrency: {
    name: 'Bless Token',
    symbol: 'BLESS',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://blessnet.calderachain.xyz/http'],
      webSocket: ['wss://blessnet.calderachain.xyz/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Blessnet Explorer',
      url: 'https://blessnet.calderaexplorer.xyz/',
    },
  },
  testnet: true,
}) as Chain;

export const blessnetSepolia = defineChain({
  id: 11145513,
  name: 'Blessnet Sepolia',
  nativeCurrency: {
    name: 'Bless Token',
    symbol: 'BLESS',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://blessnet-sepolia-testnet.rpc.caldera.xyz/http'],
      webSocket: ['wss://blessnet-sepolia-testnet.rpc.caldera.xyz/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Blessnet Sepolia Explorer',
      url: 'https://blessnet-sepolia-testnet.explorer.caldera.xyz/',
    },
  },
  testnet: true,
}) as Chain;
