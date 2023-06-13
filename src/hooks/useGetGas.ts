import { useEffect, useState } from "react";
import { useNetwork } from "wagmi";
const useGetGas = () => {
  const [estimate, setEstimate] = useState<string>();
  const { chain } = useNetwork();

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/gas-estimate?chainId=${chain?.id}`
    )
      .then((res) => res.json())
      .then((data) => setEstimate(data.gas))
      .catch((e) => console.log(e));
  }, [chain]);

  return { estimate };
};
export default useGetGas;
