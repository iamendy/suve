import { useEffect, useState } from "react";
import { ethers } from "ethers";
const useGetGas = () => {
  const [estimate, setEstimate] = useState<string>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/gas-estimate`)
      .then((res) => res.json())
      .then((data) => setEstimate(data.gas))
      .catch((e) => console.log(e));
  }, []);

  return { estimate };
};
export default useGetGas;
