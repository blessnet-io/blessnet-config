export const seizeV1ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collectionAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'delegationAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'useCase',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'allTokens',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'RegisterDelegation',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collectionAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'delegationAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'useCase',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'allTokens',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'RegisterDelegationUsingSubDelegation',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collectionAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'delegationAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'useCase',
        type: 'uint256',
      },
    ],
    name: 'RevokeDelegation',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collectionAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'delegationAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'useCase',
        type: 'uint256',
      },
    ],
    name: 'RevokeDelegationUsingSubDelegation',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collectionAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'olddelegationAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newdelegationAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'useCase',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'allTokens',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'UpdateDelegation',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_collectionAddresses',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_delegationAddresses',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_expiryDates',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '_useCases',
        type: 'uint256[]',
      },
      {
        internalType: 'bool[]',
        name: '_allTokens',
        type: 'bool[]',
      },
      {
        internalType: 'uint256[]',
        name: '_tokenIds',
        type: 'uint256[]',
      },
    ],
    name: 'batchDelegations',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_collectionAddresses',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_delegationAddresses',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_useCases',
        type: 'uint256[]',
      },
    ],
    name: 'batchRevocations',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_wallet1',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_wallet2',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
    ],
    name: 'checkConsolidationStatus',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'collectionLock',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'collectionUsecaseLock',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'delegationAddressHashes',
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
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'delegatorHashes',
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
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'globalDelegationHashes',
    outputs: [
      {
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'registeredDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiryDate',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'allTokens',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'tokens',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'globalLock',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_expiryDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_allTokens',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'registerDelegationAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_expiryDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_allTokens',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'registerDelegationAddressUsingSubDelegation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_date',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveActiveDelegations',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_date',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveActiveDelegators',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
    ],
    name: 'retrieveCollectionLockStatus',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveCollectionUseCaseLockStatus',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveCollectionUseCaseLockStatusOneCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveDelegationAddressStatusOfDelegation',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveDelegationAddresses',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveDelegationAddressesTokensIDsandExpiredDates',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'bool[]',
        name: '',
        type: 'bool[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveDelegatorStatusOfDelegation',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveDelegators',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveDelegatorsTokensIDsandExpiredDates',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'bool[]',
        name: '',
        type: 'bool[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveGlobalHash',
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
        name: '_delegationAddress',
        type: 'address',
      },
    ],
    name: 'retrieveGlobalLockStatus',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveGlobalStatusOfDelegation',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_walletAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveLocalHash',
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
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveMostRecentDelegation',
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
    inputs: [
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveMostRecentDelegator',
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
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_date',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveStatusOfActiveDelegator',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'retrieveStatusOfMostRecentDelegation',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
    ],
    name: 'retrieveSubDelegationStatus',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'retrieveTokenStatus',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'revokeDelegationAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_delegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
    ],
    name: 'revokeDelegationAddressUsingSubdelegation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_status',
        type: 'bool',
      },
    ],
    name: 'setCollectionLock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_status',
        type: 'bool',
      },
    ],
    name: 'setCollectionUsecaseLock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_status',
        type: 'bool',
      },
    ],
    name: 'setGlobalLock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_olddelegationAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newdelegationAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_expiryDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_useCase',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_allTokens',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'updateDelegationAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'updateUseCaseCounter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'useCaseCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
