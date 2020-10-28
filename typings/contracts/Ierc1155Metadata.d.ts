/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface Ierc1155MetadataInterface extends ethers.utils.Interface {
  functions: {
    "uri(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;

  events: {};
}

export class Ierc1155Metadata extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Ierc1155MetadataInterface;

  functions: {
    uri(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  uri(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  staticCall: {
    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    uri(_id: BigNumberish): Promise<BigNumber>;
  };

  populateTransaction: {
    uri(_id: BigNumberish): Promise<PopulatedTransaction>;
  };
}