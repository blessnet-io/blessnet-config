export const transactionPoolABI = [
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
        name: 'controller',
        type: 'address',
      },
    ],
    name: 'AccessControllerAddressSet',
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
    name: 'BlessTreasuryAddressSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'blessingId',
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
        name: 'maxGasGwei',
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
        internalType: 'uint96',
        name: 'tokenForGas',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'callerAccount',
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
        internalType: 'uint256',
        name: 'targetNative',
        type: 'uint256',
      },
      {
        components: [
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
        indexed: false,
        internalType: 'struct IBlessnetStructs.Parameters',
        name: 'parameters',
        type: 'tuple',
      },
    ],
    name: 'BlessingMade',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'blessingId',
        type: 'uint256',
      },
    ],
    name: 'BlessingRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'controller',
        type: 'address',
      },
    ],
    name: 'DelegationControllerAddressSet',
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
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        internalType: 'uint256',
        name: 'nextId_',
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
      {
        internalType: 'address',
        name: 'BlessnetAccessController_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'BlessnetDelegationController_',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'poolId_',
        type: 'uint256',
      },
    ],
    name: 'getPoolRecord',
    outputs: [
      {
        internalType: 'uint256',
        name: 'storedPoolId_',
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
            name: 'maxGasGwei',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'targetAccount',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'tokenForGas',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'makerAccount',
            type: 'address',
          },
          {
            internalType: 'uint8',
            name: 'transportMethod',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'targetNative',
            type: 'uint256',
          },
          {
            components: [
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
            internalType: 'struct IBlessnetStructs.Parameters',
            name: 'parameters',
            type: 'tuple',
          },
        ],
        internalType: 'struct IBlessnetStructs.StorageRecord',
        name: 'blessing_',
        type: 'tuple',
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
    inputs: [
      {
        internalType: 'address',
        name: 'accessController_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'delegationController_',
        type: 'address',
      },
    ],
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
        internalType: 'address',
        name: 'targetAccount_',
        type: 'address',
      },
      {
        internalType: 'uint96',
        name: 'maxGasGwei_',
        type: 'uint96',
      },
      {
        internalType: 'uint256',
        name: 'targetNative_',
        type: 'uint256',
      },
      {
        components: [
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
        internalType: 'struct IBlessnetStructs.Parameters',
        name: 'parameters_',
        type: 'tuple',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'poolId_',
        type: 'uint256',
      },
    ],
    name: 'removeBlessing',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [],
    name: 'returnHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'accessController_',
        type: 'address',
      },
    ],
    name: 'setAccessController',
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
        internalType: 'address',
        name: 'delegationController_',
        type: 'address',
      },
    ],
    name: 'setDelegationController',
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
