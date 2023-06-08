import Layout from "../components/Layout";

const Verification = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-black/80 px-4">
        <div className="flex flex-col rounded-sm space-y-5 mt-6 p-5 bg-gray-800">
          <div className="w-full">
            <input type="text" className="w-full" />
          </div>
          <input type="text" />
          <button>Validate</button>
        </div>
      </section>
    </Layout>
  );
};
export default Verification;
