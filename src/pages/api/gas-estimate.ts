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
  const aQuery = new AxelarQueryAPI({
    environment: Environment.TESTNET,
  });

  const gas = await aQuery.estimateGasFee(
    CHAINS.TESTNET.FANTOM,
    CHAINS.TESTNET.AVALANCHE,
    GasToken.FTM
  );

  if (req.method === "GET") {
    res.status(200).json({ gas });
  }
}
