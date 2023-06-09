export const chains = {
  fantom: {
    address: "0xdda1A105A34eB39868e7b7EFEf5C031fa8B7b708",
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
        inputs: [],
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
            internalType: "struct Verify.Vaccine[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
};

export default chains;
