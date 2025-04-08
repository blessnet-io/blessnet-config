export const baseShiftGatewayABI = [
  {
    inputs: [],
    name: 'CalldataTooShort',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CannotSendChildToChild',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ChildAmountTooHigh',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ConfigItemsAlreadySet',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ConfigItemsMustAllBeSet',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ContractCannotBeShiftable',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ContractIsNotShiftable',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DeployerOnly',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC1155TemplateFailedDeployment',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC20TemplateFailedDeployment',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC721TemplateFailedDeployment',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GatewayCannotBeTarget',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GatewayIsNotActive',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GatewayIsNotConfigured',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GatewayOnly',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorOnly',
    type: 'error',
  },
  {
    inputs: [],
    name: 'IncorrectChain',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientNativeToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientToken',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'expected',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'actual',
        type: 'uint256',
      },
    ],
    name: 'InsufficientValue',
    type: 'error',
  },
  {
    inputs: [],
    name: 'JustInTimeCreationMismatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LayerZeroDeliveryAlreadyComplete',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MustBeOverridden',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotAuthorised',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyERC20Bridge',
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
    name: 'RelayerOnly',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SetActiveCallFromNonCoreChain',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TokenDecimalsUndefined',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TokenTypeNotFound',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WithdrawalFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WormholeDeliveryAlreadyComplete',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint16',
        name: 'wormholeChainId',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldBless',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newBless',
        type: 'uint256',
      },
    ],
    name: 'BlessForGasUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAddress',
        type: 'address',
      },
    ],
    name: 'BlessnetPriceFeedAddressUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAddress',
        type: 'address',
      },
    ],
    name: 'BridgeRelayerUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'callValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxSubmissionCost',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'gasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxFeePerGas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct IShiftConfig.ChildArguments',
        name: 'oldArgs',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'callValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxSubmissionCost',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'gasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxFeePerGas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct IShiftConfig.ChildArguments',
        name: 'newArgs',
        type: 'tuple',
      },
    ],
    name: 'ChildCallArgumentsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newFee',
        type: 'uint256',
      },
    ],
    name: 'ChildChainDeliveryFeeUpdated',
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
        internalType: 'uint256',
        name: 'oldFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newFee',
        type: 'uint256',
      },
    ],
    name: 'ParentChainDeliveryFeeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'PayloadFailed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAddress',
        type: 'address',
      },
    ],
    name: 'RefundAddressUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'costsEnforced',
        type: 'bool',
      },
    ],
    name: 'RouteCostEnforcedUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint16',
        name: 'targetChain',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'toChildChain',
        type: 'bool',
      },
    ],
    name: 'ShiftOut',
    type: 'event',
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
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    name: 'blessForGas',
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
  {
    inputs: [],
    name: 'blessToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'blessnetPriceFeed',
    outputs: [
      {
        internalType: 'contract IBlessnetPriceFeed',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridgeRelayer',
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
    name: 'childArguments',
    outputs: [
      {
        internalType: 'uint256',
        name: 'callValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasLimit',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxFeePerGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'childChainDeliveryFee',
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
  {
    inputs: [],
    name: 'childChainId',
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
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'completedDeliveryWH',
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
    inputs: [],
    name: 'erc20Bridge',
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
    name: 'parentChainDeliveryFee',
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
  {
    inputs: [],
    name: 'parentChainId',
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
  {
    inputs: [],
    name: 'parentWormholeId',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
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
    inputs: [
      {
        internalType: 'uint16',
        name: 'targetWormholeId_',
        type: 'uint16',
      },
      {
        internalType: 'uint256',
        name: 'gasLimit_',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'toChildChain_',
        type: 'bool',
      },
    ],
    name: 'quote',
    outputs: [
      {
        internalType: 'uint256',
        name: 'cost_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'targetWormholeId_',
        type: 'uint16',
      },
      {
        internalType: 'uint256',
        name: 'gasLimit_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'value_',
        type: 'uint256',
      },
    ],
    name: 'quoteBlessForDelivery',
    outputs: [
      {
        internalType: 'uint256',
        name: 'blessCost_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'bytesPayload_',
        type: 'bytes',
      },
      {
        internalType: 'address',
        name: 'sourceAddress_',
        type: 'address',
      },
      {
        internalType: 'uint16',
        name: 'targetWormholeId_',
        type: 'uint16',
      },
      {
        internalType: 'uint256',
        name: 'gasLimit_',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint128',
            name: 'optionalTip',
            type: 'uint128',
          },
          {
            internalType: 'bytes16',
            name: 'source',
            type: 'bytes16',
          },
        ],
        internalType: 'struct IShiftConfig.ShiftOptional',
        name: 'shiftOptional_',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256',
      },
    ],
    name: 'receiveChildMessage',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'receiveChildMessageSelector',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'bytesPayload_',
        type: 'bytes',
      },
    ],
    name: 'receiveParentMessage',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'receiveParentMessageSelector',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'bytesPayload_',
        type: 'bytes',
      },
      {
        internalType: 'bytes[]',
        name: '',
        type: 'bytes[]',
      },
      {
        internalType: 'bytes32',
        name: 'sourceAddress_',
        type: 'bytes32',
      },
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
      {
        internalType: 'bytes32',
        name: 'deliveryHash_',
        type: 'bytes32',
      },
    ],
    name: 'receiveWormholeMessages',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'refundAddress',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
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
    inputs: [],
    name: 'rollupInbox',
    outputs: [
      {
        internalType: 'contract IERC20Inbox',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'routeCostEnforced',
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
        internalType: 'uint16',
        name: 'wormholeChainId_',
        type: 'uint16',
      },
      {
        internalType: 'uint256',
        name: 'blessAmountForGas_',
        type: 'uint256',
      },
    ],
    name: 'setBlessForGas',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'blessnetPriceFeed_',
        type: 'address',
      },
    ],
    name: 'setBlessnetPriceFeedAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'bridgeRelayer_',
        type: 'address',
      },
    ],
    name: 'setBridgeRelayer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'callValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxSubmissionCost',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'gasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxFeePerGas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct IShiftConfig.ChildArguments',
        name: 'childArguments_',
        type: 'tuple',
      },
    ],
    name: 'setChildArguments',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'fee_',
        type: 'uint256',
      },
    ],
    name: 'setChildChainDeliveryFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'fee_',
        type: 'uint256',
      },
    ],
    name: 'setParentChainDeliveryFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'refundAddress_',
        type: 'address',
      },
    ],
    name: 'setRefundAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'rootCostsEnforced_',
        type: 'bool',
      },
    ],
    name: 'setRouteCostEnforced',
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
        name: 'recipient_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value_',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient_',
        type: 'address',
      },
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
    inputs: [],
    name: 'wormholeRelayer',
    outputs: [
      {
        internalType: 'contract IWormholeRelayer',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]
