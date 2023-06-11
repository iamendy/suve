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
      <section className="min-h-screen bg-black/80 px-4">
        <VerifyBox />

        {isVaccineLoaded && <VaccineCard />}
        {isGmpInProgress && <VaccineTxInfo />}
      </section>
    </Layout>
  );
};
export default Verification;
