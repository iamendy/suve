export const chains = {
  enrollService: {
    address: "0xa214Be79Ec4dCD44eE6c667543a4C171d2c19903",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "gateway_",
            type: "address",
          },
          {
            internalType: "address",
            name: "gasReceiver_",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "InvalidAddress",
        type: "error",
      },
      {
        inputs: [],
        name: "NotApprovedByGateway",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "imageLink",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "registeredAt",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "expiresAt",
            type: "uint256",
          },
        ],
        name: "NewVaccineEnrolled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_description",
            type: "string",
          },
          {
            internalType: "string",
            name: "_imageLink",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "_expiresAt",
            type: "uint256",
          },
        ],
        name: "enrollVaccine",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "commandId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "sourceChain",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceAddress",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes",
          },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "commandId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "sourceChain",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceAddress",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes",
          },
          {
            internalType: "string",
            name: "tokenSymbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "executeWithToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "gasService",
        outputs: [
          {
            internalType: "contract IAxelarGasService",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "gateway",
        outputs: [
          {
            internalType: "contract IAxelarGateway",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "getHash",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
        ],
        name: "verify",
        outputs: [
          {
            components: [
              {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "imageLink",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "registeredAt",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "expiresAt",
                type: "uint256",
              },
            ],
            internalType: "struct VaccineEnrollmentService.Vaccine",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  fantom: {
    address: "0xa214Be79Ec4dCD44eE6c667543a4C171d2c19903",
    abi: [
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "commandId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "sourceChain",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceAddress",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes",
          },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "commandId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "sourceChain",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceAddress",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes",
          },
          {
            internalType: "string",
            name: "tokenSymbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "executeWithToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "gateway_",
            type: "address",
          },
          {
            internalType: "address",
            name: "gasReceiver_",
            type: "address",
          },
          {
            internalType: "string",
            name: "_vaccineEnrollmentService",
            type: "string",
          },
          {
            internalType: "string",
            name: "_VESChain",
            type: "string",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "InvalidAddress",
        type: "error",
      },
      {
        inputs: [],
        name: "NotApprovedByGateway",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "imageLink",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "registeredAt",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "expiresAt",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "checker",
            type: "address",
          },
        ],
        name: "VerificationReceived",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32",
          },
        ],
        name: "verify",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "gasService",
        outputs: [
          {
            internalType: "contract IAxelarGasService",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "gateway",
        outputs: [
          {
            internalType: "contract IAxelarGateway",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "checker",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
        ],
        name: "getVaccines",
        outputs: [
          {
            components: [
              {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "imageLink",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "registeredAt",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "expiresAt",
                type: "uint256",
              },
            ],
            internalType: "struct Verify.Vaccine",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
};

export default chains;
