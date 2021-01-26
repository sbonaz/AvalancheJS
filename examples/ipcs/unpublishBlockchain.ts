import { Avalanche } from "../../dist";
import { IPCSAPI } from "../../dist/apis/ipcs";
  
const ip: string = 'localhost';
const port: number = 9650;
const protocol: string = 'http';
const networkID: number = 1;
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID);
const ipcs: IPCSAPI = avalanche.IPCS();
  
const main = async (): Promise<any> => {
  const blockchainID: string = "11111111111111111111111111111111LpoYY";
  const successful: boolean = await ipcs.unpublishBlockchain(blockchainID);
  console.log(successful);
}
    
main()
  