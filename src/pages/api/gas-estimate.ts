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
    const aQuery = new AxelarQueryAPI({
      environment: Environment.TESTNET,
    });

    const gas = await aQuery.estimateGasFee(
      CHAINS.TESTNET.FANTOM,
      CHAINS.TESTNET.AVALANCHE,
      GasToken.FTM
    );

    res.status(200).json({ gas });
  }
}
