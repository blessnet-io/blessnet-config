export const blessnetArchiveABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'ERC1967InvalidImplementation',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC1967NonPayable',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidInitialization',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotInitializing',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UUPSUnauthorizedCallContext',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'slot',
        type: 'bytes32',
      },
    ],
    name: 'UUPSUnsupportedProxiableUUID',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'treasury',
        type: 'address',
      },
    ],
    name: 'BlessTreasuryAddressSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'archiveId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'targetChain',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'targetContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'blessForGas',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'targetAccount',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'transportMethod',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint88',
        name: 'maxGasGwei',
        type: 'uint88',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'targetNative',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'methodArguments',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'auxParameters',
        type: 'bytes',
      },
    ],
    name: 'BlessingMade',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'version',
        type: 'uint64',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'treasury',
        type: 'address',
      },
    ],
    name: 'TokenTreasuryAddressSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'archiveId_',
        type: 'uint256',
      },
    ],
    name: 'getBlessing',
    outputs: [
      {
        internalType: 'uint256',
        name: 'storedArchiveId_',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'targetChain',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'targetContract',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'blessForGas',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'targetAccount',
            type: 'address',
          },
          {
            internalType: 'uint8',
            name: 'transportMethod',
            type: 'uint8',
          },
          {
            internalType: 'uint88',
            name: 'maxGasGwei',
            type: 'uint88',
          },
          {
            internalType: 'uint256',
            name: 'targetNative',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'methodArguments',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'auxParameters',
            type: 'bytes',
          },
        ],
        internalType: 'struct IBlessnetStructs.ArchiveRecord',
        name: 'blessing_',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        internalType: 'uint256',
        name: 'nextArchiveID_',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'blessTreasury_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenTreasury_',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getVersion',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'targetChain_',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'transportMethod_',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'targetContract_',
        type: 'address',
      },
      {
        internalType: 'uint88',
        name: 'maxGasGwei_',
        type: 'uint88',
      },
      {
        internalType: 'uint256',
        name: 'targetNative_',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'methodArguments_',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'auxParameters_',
        type: 'bytes',
      },
    ],
    name: 'makeBlessing',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pendingOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'treasury_',
        type: 'address',
      },
    ],
    name: 'setBlessTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'treasury_',
        type: 'address',
      },
    ],
    name: 'setTokenTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256',
      },
    ],
    name: 'withdrawBless',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'erc20Address_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256',
      },
    ],
    name: 'withdrawERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
