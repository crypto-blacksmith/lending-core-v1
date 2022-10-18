/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface FeeWithdrawalInterface extends ethers.utils.Interface {
  functions: {
    "VERSION()": FunctionFragment;
    "WETH()": FunctionFragment;
    "admin()": FunctionFragment;
    "getCodeAddress()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "receiver()": FunctionFragment;
    "rescueFunds(address)": FunctionFragment;
    "swapFees(address[],uint256[])": FunctionFragment;
    "transferToReceiver()": FunctionFragment;
    "uniswapRouter()": FunctionFragment;
    "updateAdmin(address)": FunctionFragment;
    "updateCode(address)": FunctionFragment;
    "vault()": FunctionFragment;
    "warpToken()": FunctionFragment;
    "withdrawFees(address[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCodeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "receiver", values?: undefined): string;
  encodeFunctionData(functionFragment: "rescueFunds", values: [string]): string;
  encodeFunctionData(
    functionFragment: "swapFees",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferToReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "updateAdmin", values: [string]): string;
  encodeFunctionData(functionFragment: "updateCode", values: [string]): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(functionFragment: "warpToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawFees",
    values: [string[]]
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCodeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiver", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rescueFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferToReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateCode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "warpToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFees",
    data: BytesLike
  ): Result;

  events: {
    "CodeUpdated(bytes32,address)": EventFragment;
    "LogRescueFunds(address,uint256,uint256)": EventFragment;
    "LogTransferToReceiver(address,uint256,uint256)": EventFragment;
    "LogUpdateAdmin(address,uint256)": EventFragment;
    "LogWithSwap(uint256,uint256)": EventFragment;
    "LogWithdrawFees(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CodeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogRescueFunds"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogTransferToReceiver"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUpdateAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogWithSwap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogWithdrawFees"): EventFragment;
}

export class FeeWithdrawal extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FeeWithdrawalInterface;

  functions: {
    VERSION(overrides?: CallOverrides): Promise<[BigNumber]>;

    "VERSION()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    WETH(overrides?: CallOverrides): Promise<[string]>;

    "WETH()"(overrides?: CallOverrides): Promise<[string]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    "admin()"(overrides?: CallOverrides): Promise<[string]>;

    getCodeAddress(
      overrides?: CallOverrides
    ): Promise<[string] & { codeAddress: string }>;

    "getCodeAddress()"(
      overrides?: CallOverrides
    ): Promise<[string] & { codeAddress: string }>;

    initialize(
      _admin: string,
      _uniswapV2Router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address,address)"(
      _admin: string,
      _uniswapV2Router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<[string]>;

    receiver(overrides?: CallOverrides): Promise<[string]>;

    "receiver()"(overrides?: CallOverrides): Promise<[string]>;

    rescueFunds(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "rescueFunds(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapFees(
      _assets: string[],
      amountOuts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "swapFees(address[],uint256[])"(
      _assets: string[],
      amountOuts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferToReceiver(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferToReceiver()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapRouter(overrides?: CallOverrides): Promise<[string]>;

    "uniswapRouter()"(overrides?: CallOverrides): Promise<[string]>;

    updateAdmin(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateAdmin(address)"(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateCode(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateCode(address)"(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    "vault()"(overrides?: CallOverrides): Promise<[string]>;

    warpToken(overrides?: CallOverrides): Promise<[string]>;

    "warpToken()"(overrides?: CallOverrides): Promise<[string]>;

    withdrawFees(
      _lendingPairs: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawFees(address[])"(
      _lendingPairs: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  VERSION(overrides?: CallOverrides): Promise<BigNumber>;

  "VERSION()"(overrides?: CallOverrides): Promise<BigNumber>;

  WETH(overrides?: CallOverrides): Promise<string>;

  "WETH()"(overrides?: CallOverrides): Promise<string>;

  admin(overrides?: CallOverrides): Promise<string>;

  "admin()"(overrides?: CallOverrides): Promise<string>;

  getCodeAddress(overrides?: CallOverrides): Promise<string>;

  "getCodeAddress()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _admin: string,
    _uniswapV2Router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address,address)"(
    _admin: string,
    _uniswapV2Router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  "proxiableUUID()"(overrides?: CallOverrides): Promise<string>;

  receiver(overrides?: CallOverrides): Promise<string>;

  "receiver()"(overrides?: CallOverrides): Promise<string>;

  rescueFunds(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "rescueFunds(address)"(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapFees(
    _assets: string[],
    amountOuts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "swapFees(address[],uint256[])"(
    _assets: string[],
    amountOuts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferToReceiver(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferToReceiver()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapRouter(overrides?: CallOverrides): Promise<string>;

  "uniswapRouter()"(overrides?: CallOverrides): Promise<string>;

  updateAdmin(
    _newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateAdmin(address)"(
    _newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateCode(
    newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateCode(address)"(
    newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  warpToken(overrides?: CallOverrides): Promise<string>;

  "warpToken()"(overrides?: CallOverrides): Promise<string>;

  withdrawFees(
    _lendingPairs: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawFees(address[])"(
    _lendingPairs: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    "VERSION()"(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<string>;

    "WETH()"(overrides?: CallOverrides): Promise<string>;

    admin(overrides?: CallOverrides): Promise<string>;

    "admin()"(overrides?: CallOverrides): Promise<string>;

    getCodeAddress(overrides?: CallOverrides): Promise<string>;

    "getCodeAddress()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _admin: string,
      _uniswapV2Router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address)"(
      _admin: string,
      _uniswapV2Router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<string>;

    receiver(overrides?: CallOverrides): Promise<string>;

    "receiver()"(overrides?: CallOverrides): Promise<string>;

    rescueFunds(_token: string, overrides?: CallOverrides): Promise<void>;

    "rescueFunds(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swapFees(
      _assets: string[],
      amountOuts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "swapFees(address[],uint256[])"(
      _assets: string[],
      amountOuts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferToReceiver(overrides?: CallOverrides): Promise<void>;

    "transferToReceiver()"(overrides?: CallOverrides): Promise<void>;

    uniswapRouter(overrides?: CallOverrides): Promise<string>;

    "uniswapRouter()"(overrides?: CallOverrides): Promise<string>;

    updateAdmin(_newAdmin: string, overrides?: CallOverrides): Promise<void>;

    "updateAdmin(address)"(
      _newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCode(newAddress: string, overrides?: CallOverrides): Promise<void>;

    "updateCode(address)"(
      newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;

    warpToken(overrides?: CallOverrides): Promise<string>;

    "warpToken()"(overrides?: CallOverrides): Promise<string>;

    withdrawFees(
      _lendingPairs: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawFees(address[])"(
      _lendingPairs: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CodeUpdated(
      uuid: null,
      codeAddress: null
    ): TypedEventFilter<
      [string, string],
      { uuid: string; codeAddress: string }
    >;

    LogRescueFunds(
      token: null,
      amount: null,
      timestamp: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { token: string; amount: BigNumber; timestamp: BigNumber }
    >;

    LogTransferToReceiver(
      receiver: null,
      amount: null,
      timestamp: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { receiver: string; amount: BigNumber; timestamp: BigNumber }
    >;

    LogUpdateAdmin(
      newAdmin: null,
      timestamp: null
    ): TypedEventFilter<
      [string, BigNumber],
      { newAdmin: string; timestamp: BigNumber }
    >;

    LogWithSwap(
      totalWarpReceived: null,
      timestamp: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { totalWarpReceived: BigNumber; timestamp: BigNumber }
    >;

    LogWithdrawFees(
      totalWithdrawnFees: null,
      timestamp: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { totalWithdrawnFees: BigNumber; timestamp: BigNumber }
    >;
  };

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    "VERSION()"(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    "WETH()"(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    "admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCodeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "getCodeAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _admin: string,
      _uniswapV2Router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address,address)"(
      _admin: string,
      _uniswapV2Router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<BigNumber>;

    receiver(overrides?: CallOverrides): Promise<BigNumber>;

    "receiver()"(overrides?: CallOverrides): Promise<BigNumber>;

    rescueFunds(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "rescueFunds(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapFees(
      _assets: string[],
      amountOuts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "swapFees(address[],uint256[])"(
      _assets: string[],
      amountOuts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferToReceiver(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferToReceiver()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    "uniswapRouter()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateAdmin(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateAdmin(address)"(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateCode(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateCode(address)"(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;

    warpToken(overrides?: CallOverrides): Promise<BigNumber>;

    "warpToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFees(
      _lendingPairs: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawFees(address[])"(
      _lendingPairs: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "VERSION()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WETH()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "admin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCodeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCodeAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _admin: string,
      _uniswapV2Router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address,address)"(
      _admin: string,
      _uniswapV2Router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "receiver()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rescueFunds(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "rescueFunds(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapFees(
      _assets: string[],
      amountOuts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "swapFees(address[],uint256[])"(
      _assets: string[],
      amountOuts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferToReceiver(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferToReceiver()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "uniswapRouter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateAdmin(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateAdmin(address)"(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateCode(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateCode(address)"(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    warpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "warpToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawFees(
      _lendingPairs: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawFees(address[])"(
      _lendingPairs: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}