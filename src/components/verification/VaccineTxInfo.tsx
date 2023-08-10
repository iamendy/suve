import ShowTxStatus from "./ShowTxStatus";
import { useContractRead, useAccount } from "wagmi";
import VaccineContext from "../../context/VaccineContext";
import { useContext, useEffect } from "react";
import useGetTxStatus from "../../hooks/useGetTxStatus";
import chains from "../../chains";
import { useNetwork } from "wagmi";
import { Chain } from "wagmi";
const VaccineTxInfo = () => {
  const { address } = useAccount();
  //@ts-ignore
  const { hash, txHash, setIsGmpInProgress, setVaccine, setIsVaccineLoaded } =
    useContext(VaccineContext);
  const { chain } = useNetwork();

  const baseConfig = {
    //@ts-ignore
    address: chains.verificationService[chain?.id]?.address,
    abi: chains.verificationService.abi,
  };
  const { txStatus, step, callBackTxStatus } = useGetTxStatus(txHash);

  //watch for GMP completed then get vaccine
  useEffect(() => {
    if (step == 8) {
      retrieve?.();
    }
  }, [step]);

  const { refetch: retrieve } = useContractRead({
    ...baseConfig,
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
      <div className="flex flex-col rounded-sm space-y-5 mt-6 p-5 bg-gray-800 w-full">
        <ShowTxStatus
          txStatus={txStatus}
          step={step}
          callBackTxStatus={callBackTxStatus}
          hash={txHash}
        />

        <div className="shadow rounded-sm w-full">
          <div className="animate-pulse">
            <div className=" h-[200px] rounded-sm bg-slate-700 mb-2"></div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col space-y-1">
                <span className="w-[50px] lg:w-[70px] h-4 bg-slate-700 rounded-md"></span>
                <div className="h-5 bg-slate-700 rounded-md"></div>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="w-[50px] lg:w-[70px] h-4 bg-slate-700 rounded-md"></span>
                <div className="h-5 bg-slate-700 rounded-md"></div>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="w-[50px] lg:w-[70px] h-4 bg-slate-700 rounded-md"></span>
                <div className="h-5 bg-slate-700 rounded-md"></div>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="w-[50px] lg:w-[70px] h-4 bg-slate-700 rounded-md"></span>
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
