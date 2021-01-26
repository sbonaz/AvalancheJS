import { Avalanche } from "../../dist";
import { IPCSAPI } from "../../dist/apis/ipcs";
import { iPublishBlockchainResponse } from "../../dist/apis/ipcs/interfaces";
  
const ip: string = 'localhost';
const port: number = 9650;
const protocol: string = 'http';
const networkID: number = 1;
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID);
const ipcs: IPCSAPI = avalanche.IPCS();
  
const main = async (): Promise<any> => {
  const blockchainID: string = "11111111111111111111111111111111LpoYY";
  const iPublishBlockchainResponse: iPublishBlockchainResponse = await ipcs.publishBlockchain(blockchainID);
  console.log(iPublishBlockchainResponse);
}
    
main()
  