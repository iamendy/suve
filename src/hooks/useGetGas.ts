import { useEffect, useState } from "react";
import { useNetwork } from "wagmi";
const useGetGas = () => {
  const [estimate, setEstimate] = useState<string>();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const { chain } = useNetwork();

  useEffect(() => {
    setIsFetching(true);
    fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/gas-estimate?chainId=${chain?.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEstimate(data.gas);
        setIsFetching(false);
      })
      .catch((e) => console.log(e));
  }, [chain]);

  return { estimate, isFetching };
};
export default useGetGas;
