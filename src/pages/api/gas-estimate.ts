import { NextApiRequest, NextApiResponse } from "next";
import {
  AxelarQueryAPI,
  Environment,
  CHAINS,
  GasToken,
} from "@axelar-network/axelarjs-sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const chainId = parseInt(req.query.chainId);

    const chains = {
      4002: {
        chain: CHAINS.TESTNET.FANTOM,
        gas: GasToken.FTM,
      },
      44787: {
        chain: CHAINS.TESTNET.CELO,
        gas: GasToken.CELO,
      },
      80001: {
        chain: CHAINS.TESTNET.POLYGON,
        gas: GasToken.MATIC,
      },
      43113: {
        chain: CHAINS.TESTNET.AVALANCHE,
        gas: GasToken.AVAX,
      },
    };

    if (!chains[chainId]) {
      return res.status(400).json({ msg: "Not valid chain" });
    }

    const aQuery = new AxelarQueryAPI({
      environment: Environment.TESTNET,
    });

    const gas = await aQuery.estimateGasFee(
      chains[chainId].chain,
      CHAINS.TESTNET.AVALANCHE,
      chains[chainId].gas
    );

    res.status(200).json({ gas });
  }
}
