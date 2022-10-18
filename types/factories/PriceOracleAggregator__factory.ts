/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { PriceOracleAggregator } from "../PriceOracleAggregator";

export class PriceOracleAggregator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PriceOracleAggregator> {
    return super.deploy(
      _owner,
      overrides || {}
    ) as Promise<PriceOracleAggregator>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): PriceOracleAggregator {
    return super.attach(address) as PriceOracleAggregator;
  }
  connect(signer: Signer): PriceOracleAggregator__factory {
    return super.connect(signer) as PriceOracleAggregator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceOracleAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PriceOracleAggregator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "OwnershipAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "StableTokenAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newTeam",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "TransferControl",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
    ],
    name: "UpdateOracle",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "_tokens",
        type: "address[]",
      },
    ],
    name: "addStable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "assetToOracle",
    outputs: [
      {
        internalType: "contract IOracle",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "getPriceInUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "_tokens",
        type: "address[]",
      },
    ],
    name: "getPriceInUSDMultiple",
    outputs: [
      {
        internalType: "uint256[]",
        name: "prices",
        type: "uint256[]",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_asset",
        type: "address",
      },
    ],
    name: "removeOracleForAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "_asset",
        type: "address[]",
      },
      {
        internalType: "contract IOracle[]",
        name: "_oracle",
        type: "address[]",
      },
    ],
    name: "setOracleForAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "stableTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610c38380380610c3883398101604081905261002f91610083565b6001600160a01b03811661005e5760405162461bcd60e51b8152600401610055906100b1565b60405180910390fd5b600080546001600160a01b0319166001600160a01b03929092169190911790556100d8565b600060208284031215610094578081fd5b81516001600160a01b03811681146100aa578182fd5b9392505050565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b610b51806100e76000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806379ba50971161006657806379ba5097146101415780638da5cb5b146101495780639080ddb114610151578063cafa0fd314610164578063f2fde38b146101775761009e565b806302266147146100a357806304fb0b56146100cc5780630dc3d0c8146100e15780632e00d2451461010157806342b60b0314610121575b600080fd5b6100b66100b1366004610838565b61018a565b6040516100c39190610ad3565b60405180910390f35b6100df6100da36600461089b565b61029a565b005b6100f46100ef36600461085b565b610441565b6040516100c3919061096d565b61011461010f366004610838565b6104cc565b6040516100c3919061091c565b61013461012f366004610838565b6104e7565b6040516100c391906109b1565b6100df6104fc565b61011461059a565b6100df61015f366004610838565b6105a9565b6100df61017236600461085b565b610634565b6100df610185366004610838565b610752565b6001600160a01b03808216600090815260026020526040812054909116801561023d576001600160a01b038084166000908152600260209081526040918290205482516350d25bcd60e01b815292519316926350d25bcd926004808201939291829003018186803b1580156101fe57600080fd5b505afa158015610212573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102369190610904565b915061026b565b6001600160a01b03831660009081526003602052604090205460ff1615156001141561026b576305f5e10091505b600082116102945760405162461bcd60e51b815260040161028b906109d6565b60405180910390fd5b50919050565b6000546001600160a01b031633146102c45760405162461bcd60e51b815260040161028b90610aaf565b8281146102e35760405162461bcd60e51b815260040161028b90610a92565b8260005b8181101561043957600084848381811061031157634e487b7160e01b600052603260045260246000fd5b90506020020160208101906103269190610838565b90506001600160a01b03811661034e5760405162461bcd60e51b815260040161028b90610a5b565b806002600089898681811061037357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906103889190610838565b6001600160a01b039081168252602082019290925260400160002080546001600160a01b031916929091169190911790557fb1d1442dba579887e297ac433e5716c847abf2dc052ee9de4869b7b1b8f6206d8787848181106103fa57634e487b7160e01b600052603260045260246000fd5b905060200201602081019061040f9190610838565b8260405161041e9291906109bc565b60405180910390a1508061043181610adc565b9150506102e7565b505050505050565b60608160005b818110156104c45761048785858381811061047257634e487b7160e01b600052603260045260246000fd5b90506020020160208101906100b19190610838565b8382815181106104a757634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806104bc81610adc565b915050610447565b505092915050565b6002602052600090815260409020546001600160a01b031681565b60036020526000908152604090205460ff1681565b6001546001600160a01b031633146105265760405162461bcd60e51b815260040161028b90610a34565b6000546001546040517f3996db4523d078738f597d29c05515ab90a28170fdd8dd6aeea6b6af99700bd29261056b926001600160a01b03918216929116904290610930565b60405180910390a160018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b6000546001600160a01b031681565b6000546001600160a01b031633146105d35760405162461bcd60e51b815260040161028b90610aaf565b6001600160a01b03811660009081526002602052604080822080546001600160a01b0319169055517fb1d1442dba579887e297ac433e5716c847abf2dc052ee9de4869b7b1b8f6206d91610629918491906109bc565b60405180910390a150565b6000546001600160a01b0316331461065e5760405162461bcd60e51b815260040161028b90610aaf565b8060005b8181101561074c5760016003600086868581811061069057634e487b7160e01b600052603260045260246000fd5b90506020020160208101906106a59190610838565b6001600160a01b031681526020810191909152604001600020805460ff19169115159190911790557f09ab69151375e37d84ca1c288831fa9670a177da7f4e87216be1e2f12297f9ce84848381811061070e57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906107239190610838565b42604051610732929190610954565b60405180910390a18061074481610adc565b915050610662565b50505050565b6000546001600160a01b0316331461077c5760405162461bcd60e51b815260040161028b90610aaf565b6001600160a01b0381166107a25760405162461bcd60e51b815260040161028b906109fd565b600180546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab832906106299083904290610954565b60008083601f840112610800578182fd5b50813567ffffffffffffffff811115610817578182fd5b602083019150836020808302850101111561083157600080fd5b9250929050565b600060208284031215610849578081fd5b813561085481610b03565b9392505050565b6000806020838503121561086d578081fd5b823567ffffffffffffffff811115610883578182fd5b61088f858286016107ef565b90969095509350505050565b600080600080604085870312156108b0578182fd5b843567ffffffffffffffff808211156108c7578384fd5b6108d3888389016107ef565b909650945060208701359150808211156108eb578384fd5b506108f8878288016107ef565b95989497509550505050565b600060208284031215610915578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b818110156109a557835183529284019291840191600101610989565b50909695505050505050565b901515815260200190565b6001600160a01b0392831681529116602082015260400190565b6020808252600d908201526c494e56414c49445f505249434560981b604082015260600190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252600e908201527f494e56414c49445f4f5241434c45000000000000000000000000000000000000604082015260600190565b60208082526003908201526224a72b60e91b604082015260600190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b90815260200190565b6000600019821415610afc57634e487b7160e01b81526011600452602481fd5b5060010190565b6001600160a01b0381168114610b1857600080fd5b5056fea2646970667358221220c08fc3a90c54837760835079206a8b9a2db916504b35b4b0ec71aa70218bb35564736f6c63430008010033";