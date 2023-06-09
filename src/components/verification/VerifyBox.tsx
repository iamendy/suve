import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useAccount,
  useNetwork,
} from "wagmi";
import chains from "../../chains";
import { useDebounce } from "../../hooks/useDebounce";
import Loader from "../icons/Loader";
import useGetGas from "../../hooks/useGetGas";
import { ethers } from "ethers";
import VaccineContext from "../../context/VaccineContext";
import { useContext, useEffect, useState } from "react";
import { Vaccine } from "../../types";
import { motion } from "framer-motion";

type Options = {
  setVaccine: (x: Vaccine) => void;
  setIsVaccineLoaded: (x: boolean) => boolean;
  setTxHash: (x: string) => void;
  setIsGmpInProgress: (x: boolean) => void;
  setHash: (x: string) => void;
  hash: string;
};
const Verify = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const [isValidEntry, setIsValidEntry] = useState<boolean>(false);

  //@ts-ignore
  const {
    setVaccine,
    setIsVaccineLoaded,
    setTxHash,
    setIsGmpInProgress,
    setHash,
    hash,
  }: Options = useContext(VaccineContext);

  const debouncedHash = useDebounce<string>(hash, 500);
  //@ts-ignore
  const sourceChainId: number = parseInt(process.env.NEXT_PUBLIC_SOURCE_ID);

  //dynamically change parameters when verification network changes
  let contractAddress =
    chain?.id == sourceChainId
      ? chains.enrollService.address
      : //@ts-ignore
        chains?.verificationService[chain?.id]?.address;

  let abi =
    chain?.id == sourceChainId
      ? chains?.enrollService?.abi
      : chains?.verificationService?.abi;

  const {
    data: vaccine,
    isLoading: isLoadingVaccine,
    refetch: retrieve,
  } = useContractRead({
    address: contractAddress,
    abi,
    functionName: chain?.id == sourceChainId ? "verify" : "getVaccines",
    args: chain?.id == sourceChainId ? [hash] : [address, hash],
    enabled: true,
  });

  const { estimate, isFetching } = useGetGas();

  //validates hash length
  const validateHash = (str: string) => {
    return /^.{0,65}$/.test(str);
  };

  useEffect(() => {
    if (validateHash(hash)) {
      setIsValidEntry(true);
    } else {
      setIsValidEntry(false);
    }
  }, [hash]);

  //dynamically call verify function on source or validators
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi,
    functionName: "verify",
    args: [debouncedHash],
    overrides: {
      value: chain?.id == sourceChainId ? 0 : estimate,
    },
  });
  const { write: verifyHash, data, isLoading } = useContractWrite(config);

  const { isLoading: isTx } = useWaitForTransaction({
    hash: data?.hash,
    confirmations: 3,
    onSuccess(tx) {
      //Initiate GMP tracking
      setTxHash(tx?.transactionHash);
      setIsGmpInProgress(true);
    },
  });

  const handleVerify = () => {
    //on source chain, no GMP
    if (chain?.id == sourceChainId) {
      setIsVaccineLoaded(true);
      //@ts-ignore
      setVaccine(vaccine);

      //other chains
    } else {
      //checks if caller has requested before
      if (vaccine?.name) {
        setIsVaccineLoaded(true);
        //@ts-ignore
        setVaccine(vaccine);

        //verify hash with GMP
      } else {
        setIsVaccineLoaded(false);
        verifyHash?.();
      }
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
      className="flex flex-col rounded-sm space-y-5 p-5 bg-gray-800"
    >
      <div className="mb-2">
        <span className="text-sm lg:text-base text-gray-100">
          Paste Vaccine ID
        </span>
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

        <div>
          {isFetching ? (
            <div className="animate-pulse bg-slate-600 h-4 w-16 mt-2 rounded-md"></div>
          ) : (
            <span className="text-xs">
              Gas Estimate:{" "}
              {parseFloat(ethers.utils.formatEther(estimate || "0")).toFixed(4)}
            </span>
          )}
        </div>
      </div>

      <button
        className="bg-black hover:bg-black/50 active:bg-black p-3 flex justify-center items-center rounded-sm disabled:bg-gray-400"
        onClick={() => handleVerify()}
        disabled={
          isLoading ||
          isTx ||
          isLoadingVaccine ||
          isValidEntry ||
          chain?.unsupported
        }
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
    </motion.div>
  );
};
export default Verify;
