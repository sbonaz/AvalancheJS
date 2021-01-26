import mockAxios from 'jest-mock-axios';
import { Avalanche } from 'src';
import { IPCSAPI } from 'src/apis/ipcs/api';
import { iPublishBlockchainResponse } from 'src/apis/ipcs/interfaces';

describe('IPCS', () => {
  const ip:string = '127.0.0.1';
  const port:number = 9650;
  const protocol:string = 'https';

  const avalanche:Avalanche = new Avalanche(ip, port, protocol, 12345);
  let ipcs:IPCSAPI;

  beforeAll(() => {
    ipcs = avalanche.IPCS();
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('publishBlockchain', async () => {
    const blockchainID: string = "11111111111111111111111111111111LpoYY";
    const result:Promise<iPublishBlockchainResponse> = ipcs.publishBlockchain(blockchainID);
    const payload:object = {
      result: {
        consensusURL: "/tmp/12345-11111111111111111111111111111111LpoYY-consensus",
        decisionsURL: "/tmp/12345-11111111111111111111111111111111LpoYY-decisions"
      },
    };
    const responseObj = {
      data: payload
    };

    mockAxios.mockResponse(responseObj);
    const response:iPublishBlockchainResponse = await result;

    expect(mockAxios.request).toHaveBeenCalledTimes(1);
    expect(response.consensusURL).toBe("/tmp/12345-11111111111111111111111111111111LpoYY-consensus");
    expect(response.decisionsURL).toBe("/tmp/12345-11111111111111111111111111111111LpoYY-decisions");
  });
  
  test('unpublishBlockchain', async () => {
    const blockchainID: string = "11111111111111111111111111111111LpoYY";
    const result:Promise<boolean> = ipcs.unpublishBlockchain(blockchainID);
    const payload:object = {
      result: {
        success: true
      },
    };
    const responseObj = {
      data: payload
    };

    mockAxios.mockResponse(responseObj);
    const response:boolean= await result;

    expect(mockAxios.request).toHaveBeenCalledTimes(1);
    expect(response).toBe(true);
  });
});
