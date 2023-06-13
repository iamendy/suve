import Layout from "../components/Layout";
import VerifyBox from "../components/verification/VerifyBox";
import VaccineTxInfo from "../components/verification/VaccineTxInfo";
import VaccineContext from "../context/VaccineContext";
import { useContext, useEffect } from "react";
import VaccineCard from "../components/VaccineCard";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

const Verification = () => {
  //@ts-ignore
  const { isVaccineLoaded, isGmpInProgress, vaccine } =
    useContext(VaccineContext);
  const router = useRouter();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected]);

  return (
    <Layout>
      <section className="px-4 min-h-screen backdrop-blur-sm py-8 ">
        <div className="lg:max-w-xl lg:mx-auto">
          <VerifyBox />

          {isVaccineLoaded && <VaccineCard vaccine={vaccine} />}
          {isGmpInProgress && <VaccineTxInfo />}
        </div>
      </section>
    </Layout>
  );
};
export default Verification;
