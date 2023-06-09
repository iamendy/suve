import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { chains } from "../../chains/";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import Loader from "../icons/Loader";
import useGetGas from "../../hooks/useGetGas";

const Verify = () => {
  const [hash, setHash] = useState<string>("");
  const debouncedHash = useDebounce<string>(hash, 500);

  const { estimate } = useGetGas();

  const { config } = usePrepareContractWrite({
    address: chains.fantom.address,
    abi: chains.fantom.abi,
    functionName: "verify",
    args: [debouncedHash],
    value: estimate,
  });

  const { write: verifyHash, data, isLoading } = useContractWrite(config);

  const { isLoading: isTx } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess() {
      console.log("Sent successfully");
    },
  });

  return (
    <div className="flex flex-col rounded-sm space-y-5 mt-6 p-5 bg-gray-800">
      <div className="w-full">
        <span className="text-sm text-gray-100">Paste Hash</span>
        <input
          type="text"
          placeholder="0x.."
          className="w-full text-gray-800 p-2 rounded-sm focus:outline-none"
          onChange={(e) => setHash(e.target.value)}
          disabled={isLoading || isTx}
        />
        <span className="text-xs"> Gas Estimate: {estimate} </span>
      </div>

      <button
        className="bg-black p-3 flex justify-center items-center rounded-sm disabled:bg-gray-400"
        onClick={() => verifyHash?.()}
        disabled={isLoading || isTx}
      >
        {isLoading || isTx ? (
          <>
            <Loader />
            <span> Verifying</span>
          </>
        ) : (
          "Validate"
        )}
      </button>
    </div>
  );
};
export default Verify;
