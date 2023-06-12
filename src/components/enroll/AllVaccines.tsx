import { useContractRead, useAccount } from "wagmi";
import chains from "../../chains";
import { useState } from "react";
import VaccineCard from "../VaccineCard";

const AllVaccines = () => {
  const [vaccines, setVaccines] = useState([]);
  const { address } = useAccount();

  useContractRead({
    address: chains.enrollService.address,
    abi: chains.enrollService.abi,
    functionName: "getAllVaccines",
    chainId: 43113,
    overrides: {
      from: address,
    },
    onSuccess(vaccines) {
      setVaccines(vaccines);
    },
    watch: true,
  });

  return (
    <div className="lg:col-span-8">
      <div className="flex flex-col rounded-md space-y-5 p-5  bg-gray-800 h-full">
        <h3 className="font-paytone text-lg">Enrolled Vaccines</h3>

        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-x-2">
          {vaccines &&
            vaccines
              ?.slice(0)
              .reverse()
              .map((vac) => (
                <VaccineCard key={vac.hash} vaccine={vac} enroll={true} />
              ))}
        </div>
      </div>
    </div>
  );
};
export default AllVaccines;
