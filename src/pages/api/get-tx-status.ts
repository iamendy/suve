import { NextApiRequest, NextApiResponse } from "next";
import {
  AxelarGMPRecoveryAPI,
  Environment,
} from "@axelar-network/axelarjs-sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const tx = req.query.hash;
    const aQuery = new AxelarGMPRecoveryAPI({
      environment: Environment.TESTNET,
    });

    const txStatus = await aQuery.queryTransactionStatus(tx);

    res.status(200).json({ txStatus });
  }
}
