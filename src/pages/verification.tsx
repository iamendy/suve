import Layout from "../components/Layout";
import VerifyBox from "../components/verification/VerifyBox";
import VaccineTxInfo from "../components/verification/VaccineTxInfo";
import VaccineContext from "../context/VaccineContext";
import { useContext } from "react";
import VaccineCard from "../components/verification/VaccineCard";

const Verification = () => {
  const { isVaccineLoaded, isGmpInProgress } = useContext(VaccineContext);
  return (
    <Layout>
      <section className="px-4 min-h-screen backdrop-blur-sm py-8 ">
        <div className="lg:max-w-xl lg:mx-auto">
          <VerifyBox />

          {isVaccineLoaded && <VaccineCard />}
          {isGmpInProgress && <VaccineTxInfo />}
        </div>
      </section>
    </Layout>
  );
};
export default Verification;
