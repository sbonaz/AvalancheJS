import { 
  Avalanche
} from "../../dist";
import { HealthAPI } from "../../dist/apis/health";
import { iGetLivenessResponse } from "../../dist/apis/health/interfaces";
  
const ip: string = 'localhost';
const port: number = 9650;
const protocol: string = 'http';
const networkID: number = 1;
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID);
const health: HealthAPI = avalanche.Health();
  
const main = async (): Promise<any> => {
  const iGetLivenessResponse: iGetLivenessResponse = await health.getLiveness();
  console.log(iGetLivenessResponse);
}
    
main()
  