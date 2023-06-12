import Layout from "../components/Layout";
import EnrollBox from "../components/enroll/EnrollBox";
import AllVaccines from "../components/enroll/AllVaccines";
const Enroll = () => {
  return (
    <Layout>
      <section className="px-4 lg:px-16 min-h-screen backdrop-blur-sm py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 space-y-4 lg:space-y-0">
          <EnrollBox />
          <AllVaccines />
        </div>
      </section>
    </Layout>
  );
};
export default Enroll;
