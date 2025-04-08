export const modPermsABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'principal',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'agents',
        type: 'address[]',
      },
    ],
    name: 'AgentsAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'principal',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'agents',
        type: 'address[]',
      },
    ],
    name: 'AgentsRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'delegateVersion',
        type: 'uint256',
      },
    ],
    name: 'AllDelegatePermissionsRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vaultVersion',
        type: 'uint256',
      },
    ],
    name: 'AllVaultPermissionsRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'permissionVersion',
        type: 'uint256',
      },
    ],
    name: 'DelegationRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'delegateVersion',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vaultVersion',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'permissionVersion',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint16[]',
        name: 'permissionIds',
        type: 'uint16[]',
      },
    ],
    name: 'PermissionsAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'delegateVersion',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vaultVersion',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'permissionVersion',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint16[]',
        name: 'permissionIds',
        type: 'uint16[]',
      },
    ],
    name: 'PermissionsRemoved',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegate_',
        type: 'address',
      },
    ],
    name: 'activeDelegateVersion',
    outputs: [
      {
        internalType: 'uint256',
        name: 'version_',
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
        name: 'delegate_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'vault_',
        type: 'address',
      },
    ],
    name: 'activePermissionVersion',
    outputs: [
      {
        internalType: 'uint256',
        name: 'version_',
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
        name: 'vault_',
        type: 'address',
      },
    ],
    name: 'activeVaultVersion',
    outputs: [
      {
        internalType: 'uint256',
        name: 'version_',
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
        name: 'delegate_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'vault_',
        type: 'address',
      },
    ],
    name: 'allPermissions',
    outputs: [
      {
        internalType: 'bool[16000]',
        name: 'allPermissions_',
        type: 'bool[16000]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'enum IBlessnetModularPermissions.OperationType',
            name: 'operation',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'delegate',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'vault',
            type: 'address',
          },
          {
            internalType: 'uint16[]',
            name: 'ids',
            type: 'uint16[]',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Permissions[]',
        name: 'permissions_',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'vault',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint16[]',
            name: 'ids',
            type: 'uint16[]',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Calls[]',
        name: 'calls_',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'enum IBlessnetModularPermissions.OperationType',
            name: 'operation',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'principal',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'agents',
            type: 'address[]',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Agents[]',
        name: 'agents_',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'delegate',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'vault',
            type: 'address',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Participants[]',
        name: 'participants_',
        type: 'tuple[]',
      },
      {
        internalType: 'address[]',
        name: 'vaultRemoveAlls_',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'delegateRemoveAlls_',
        type: 'address[]',
      },
    ],
    name: 'batch',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'delegate',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'vault',
            type: 'address',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Participants[]',
        name: 'participants_',
        type: 'tuple[]',
      },
      {
        internalType: 'address[]',
        name: 'vaultRemoveAlls_',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'delegateRemoveAlls_',
        type: 'address[]',
      },
    ],
    name: 'batchRemove',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'enum IBlessnetModularPermissions.OperationType',
            name: 'operation',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'delegate',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'vault',
            type: 'address',
          },
          {
            internalType: 'uint16[]',
            name: 'ids',
            type: 'uint16[]',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Permissions[]',
        name: 'permissions_',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'vault',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint16[]',
            name: 'ids',
            type: 'uint16[]',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Calls[]',
        name: 'calls_',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'enum IBlessnetModularPermissions.OperationType',
            name: 'operation',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'principal',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'agents',
            type: 'address[]',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Agents[]',
        name: 'agents_',
        type: 'tuple[]',
      },
    ],
    name: 'batchSet',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'vault',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint16[]',
            name: 'ids',
            type: 'uint16[]',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Calls[]',
        name: 'calls_',
        type: 'tuple[]',
      },
    ],
    name: 'callAndPermission',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegate_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'vault_',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'bytesCalldata_',
        type: 'bytes',
      },
    ],
    name: 'delegationIsValid',
    outputs: [
      {
        internalType: 'bool',
        name: 'isValid_',
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
        name: 'sender_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operating_',
        type: 'address',
      },
    ],
    name: 'isAddressOrAgent',
    outputs: [
      {
        internalType: 'bool',
        name: 'isValid_',
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
        name: 'principal_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'agent_',
        type: 'address',
      },
    ],
    name: 'isAgent',
    outputs: [
      {
        internalType: 'bool',
        name: 'isValid_',
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
        name: 'delegate_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'vault_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'permissionId_',
        type: 'uint256',
      },
    ],
    name: 'isValidDelegation',
    outputs: [
      {
        internalType: 'bool',
        name: 'isValid_',
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
        name: 'delegateHash_',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'vaultHash_',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'permissionVersion_',
        type: 'uint256',
      },
    ],
    name: 'permissionsByHash',
    outputs: [
      {
        internalType: 'bool[16000]',
        name: 'allPermissions_',
        type: 'bool[16000]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegate_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'delegateVersion_',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'vault_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'vaultVersion_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'permissionVersion_',
        type: 'uint256',
      },
    ],
    name: 'permissionsByVersion',
    outputs: [
      {
        internalType: 'bool[16000]',
        name: 'allPermissions_',
        type: 'bool[16000]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'addressesToRemove_',
        type: 'address[]',
      },
    ],
    name: 'removeAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'delegates_',
        type: 'address[]',
      },
    ],
    name: 'removeAllForDelegates',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'vaults_',
        type: 'address[]',
      },
    ],
    name: 'removeAllForVaults',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'delegate',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'vault',
            type: 'address',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Participants[]',
        name: 'participants_',
        type: 'tuple[]',
      },
    ],
    name: 'removeDelegations',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'enum IBlessnetModularPermissions.OperationType',
            name: 'operation',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'principal',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'agents',
            type: 'address[]',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Agents[]',
        name: 'agentArray_',
        type: 'tuple[]',
      },
    ],
    name: 'setAgents',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'enum IBlessnetModularPermissions.OperationType',
            name: 'operation',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'delegate',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'vault',
            type: 'address',
          },
          {
            internalType: 'uint16[]',
            name: 'ids',
            type: 'uint16[]',
          },
        ],
        internalType: 'struct IBlessnetModularPermissions.Permissions[]',
        name: 'permissions_',
        type: 'tuple[]',
      },
    ],
    name: 'setPermissions',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
