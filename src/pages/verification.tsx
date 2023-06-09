import Layout from "../components/Layout";
import Verify from "../components/verification/Verify";

const Verification = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-black/80 px-4">
        <Verify />

        <div className="verified relative flex flex-col rounded-sm space-y-5 mt-6 p-5 bg-gray-800">
          <div className="flex justify-center items-center border-gray-300 border rounded-sm">
            <img src="/img/vaccine.svg" alt="dummy image" />
          </div>
          <div>
            <span className="text-sm font-bold">Name</span>
            <h3>COV-19 superflux</h3>
          </div>
          <div>
            <span className="text-sm font-bold">Description</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <span className="text-sm font-bold">Registered</span>
            <p>12th May, 2022</p>
          </div>
          <div>
            <span className="text-sm font-bold">Expires</span>
            <p>12th May, 2028</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Verification;
