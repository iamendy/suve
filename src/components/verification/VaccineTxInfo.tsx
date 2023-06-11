import ShowTxStatus from "./ShowTxStatus";
import { useContractRead, useAccount } from "wagmi";
import VaccineContext from "../../context/VaccineContext";
import { useContext, useEffect } from "react";
import useGetTxStatus from "../../hooks/useGetTxStatus";
import chains from "../../chains";
const VaccineTxInfo = () => {
  const { address } = useAccount();
  const { hash, txHash, setIsGmpInProgress, setVaccine, setIsVaccineLoaded } =
    useContext(VaccineContext);

  const { txStatus, step, callBackTxStatus } = useGetTxStatus(txHash);

  //watch for GMP completed then get vaccine
  useEffect(() => {
    if (step == 8) {
      retrieve?.();
    }
  }, [step]);

  const { refetch: retrieve } = useContractRead({
    address: chains.fantom.address,
    abi: chains.fantom.abi,
    functionName: "getVaccines",
    args: [address, hash],
    enabled: false,
    onSuccess(vaccine) {
      setVaccine(vaccine);
      setIsVaccineLoaded(true);
      setIsGmpInProgress(false);
    },
  });

  return (
    <>
      <div className="flex flex-col rounded-sm space-y-5 mt-6 p-4 bg-gray-800">
        <ShowTxStatus
          txStatus={txStatus}
          step={step}
          callBackTxStatus={callBackTxStatus}
          hash={hash}
        />

        <div className="shadow rounded-sm max-w-sm">
          <div className="animate-pulse">
            <div className=" h-[200px] rounded-sm bg-slate-700 mb-2"></div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col space-y-1">
                <span className="w-[50px] h-4 bg-slate-700 rounded-md"></span>
                <div className="h-5 bg-slate-700 rounded-md"></div>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="w-[50px] h-4 bg-slate-700 rounded-md"></span>
                <div className="h-5 bg-slate-700 rounded-md"></div>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="w-[50px] h-4 bg-slate-700 rounded-md"></span>
                <div className="h-5 bg-slate-700 rounded-md"></div>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="w-[50px] h-4 bg-slate-700 rounded-md"></span>
                <div className="h-5 bg-slate-700 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VaccineTxInfo;