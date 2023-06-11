import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useContractEvent,
  useAccount,
} from "wagmi";
import { chains } from "../../chains";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import Loader from "../icons/Loader";
import useGetGas from "../../hooks/useGetGas";
import { ethers } from "ethers";
import GetTxStatus from "./ShowTxStatus";
import VaccineContext from "../../context/VaccineContext";
import { useContext } from "react";

const Verify = () => {
  const { address } = useAccount();
  const {
    setVaccine,
    setIsVaccineLoaded,
    setTxHash,
    setIsGmpInProgress,
    setHash,
    hash,
  } = useContext(VaccineContext);
  const debouncedHash = useDebounce<string>(hash, 500);
  const {
    data: vaccine,
    isLoading: isLoadingVaccine,
    refetch: retrieve,
  } = useContractRead({
    address: chains.fantom.address,
    abi: chains.fantom.abi,
    functionName: "getVaccines",
    args: [address, hash],
    enabled: false,
  });

  vaccine && console.log(vaccine);

  const { estimate } = useGetGas();

  const { config } = usePrepareContractWrite({
    address: chains.fantom.address,
    abi: chains.fantom.abi,
    functionName: "verify",
    args: [debouncedHash],
    overrides: {
      value: estimate,
    },
  });

  const { write: verifyHash, data, isLoading } = useContractWrite(config);

  const { isLoading: isTx } = useWaitForTransaction({
    hash: data?.hash,
    confirmations: 3,
    onSuccess(tx) {
      //GMP Initiated
      console.log(tx?.transactionHash);
      //setHash("");
      setTxHash(tx?.transactionHash);
      setIsGmpInProgress(true);
    },
  });

  const handleVerify = () => {
    //checks if caller has requested before
    if (vaccine?.name) {
      //set global state and check
      setIsVaccineLoaded(true);
      setVaccine(vaccine);
    } else {
      //reset any initial cache
      setIsVaccineLoaded(false);
      //verify status with GMP
      verifyHash?.();
    }
  };

  return (
    <div className="flex flex-col rounded-sm space-y-5 mt-6 p-5 bg-gray-800">
      <div className="w-full">
        <span className="text-sm text-gray-100">Paste Hash</span>
        <input
          type="text"
          placeholder="0x.."
          className="w-full text-gray-800 p-2 rounded-sm focus:outline-none"
          value={hash}
          onChange={(e) => {
            setHash(e.target.value);
            retrieve();
          }}
          disabled={isLoading || isTx}
        />
        <span className="text-xs">
          Gas Estimate: {ethers.utils.formatEther(estimate || "0")}
        </span>
      </div>

      <button
        className="bg-black p-3 flex justify-center items-center rounded-sm disabled:bg-gray-400"
        onClick={() => handleVerify()}
        disabled={isLoading || isTx || isLoadingVaccine}
      >
        {isLoading || isTx || isLoadingVaccine ? (
          <>
            <Loader />
            <span> Verifying</span>
          </>
        ) : (
          "Verify"
        )}
      </button>
    </div>
  );
};
export default Verify;