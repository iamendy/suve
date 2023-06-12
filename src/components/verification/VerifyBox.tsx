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
import { useContext } from "react";

const Verify = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const baseConfig = {
    address: chains?.verificationService[chain?.id]?.address,
    abi: chains?.verificationService?.abi,
  };

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
    ...baseConfig,
    functionName: "getVaccines",
    args: [address, hash],
    enabled: false,
  });

  const { estimate } = useGetGas();

  const { config } = usePrepareContractWrite({
    address: chains?.verificationService[chain?.id]?.address,
    abi: chains?.verificationService?.abi,
    functionName: "verify",
    args: [debouncedHash],
    overrides: {
      value: estimate,
    },
  });

  config && console.log(config);

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
    <div className="flex flex-col rounded-sm space-y-5 p-5 bg-gray-800">
      <div className="mb-2">
        <span className="text-sm lg:text-base text-gray-100">Paste Hash</span>
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
        <p>{chain.id}</p>
        <span className="text-xs">
          Gas Estimate: {ethers.utils.formatEther(estimate || "0")}
        </span>
      </div>

      <button
        className="bg-black hover:bg-black/50 active:bg-black p-3 flex justify-center items-center rounded-sm disabled:bg-gray-400"
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
