/**
 * @packageDocumentation
 * @module API-Info
 */
import AvalancheCore from "../../avalanche";
import { JRPCAPI } from "../../common/jrpcapi";
import { RequestResponseData } from "../../common/apibase";
import { 
  iPublishBlockchainParams, 
  iPublishBlockchainResponse,
  iUnpublishBlockchainParams 
} from "./interfaces";

/**
 * Class for interacting with a node's IPCSAPI.
 *
 * @category RPCAPIs
 *
 * @remarks This extends the [[JRPCAPI]] class. This class should not be directly called. Instead, use the [[Avalanche.addAPI]] function to register this interface with Avalanche.
 */
export class IPCSAPI extends JRPCAPI {
  /**
   * Register a blockchain so it publishes accepted vertices to a Unix domain socket.
   *
   * @param blockchainID the blockchain that will publish accepted vertices.
   *
   * @returns Returns a Promise<iPublishBlockchainResponse> containing the consensusURL and decisionsURL.
   */
  publishBlockchain = async (blockchainID: string): Promise<iPublishBlockchainResponse> => {
    const params: iPublishBlockchainParams = {
      blockchainID
    };
    const response: RequestResponseData = await this.callMethod("ipcs.publishBlockchain", params);
    return response.data.result;
  };

  /**
   * Deregister a blockchain so that it no longer publishes to a Unix domain socket.
   *
   * @param blockchainID the blockchain that will publish accepted vertices.
   *
   * @returns Returns a Promise<iPublishBlockchainResponse> containing the consensusURL and decisionsURL.
   */
  unpublishBlockchain = async (blockchainID: string): Promise<boolean> => {
    const params: iUnpublishBlockchainParams = {
      blockchainID
    };
    const response: RequestResponseData = await this.callMethod("ipcs.unpublishBlockchain", params);
    return response.data.result.success;
  };

  constructor(core: AvalancheCore, baseurl: string = "/ext/ipcs") { super(core, baseurl); }
}
