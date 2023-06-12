import Layout from "../components/Layout";
import EnrollBox from "../components/enroll/EnrollBox";
import AllVaccines from "../components/enroll/AllVaccines";
import { useNetwork, useSwitchNetwork } from "wagmi";

const Enroll = () => {
  const { chain } = useNetwork();
  const { isLoading, switchNetwork } = useSwitchNetwork();

  return (
    <Layout>
      <section className="px-4 lg:px-16 min-h-screen backdrop-blur-sm py-8">
        {chain.id == 43113 ? (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 space-y-4 lg:space-y-0">
            <EnrollBox />
            <AllVaccines />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full rounded-md space-y-5 p-5  bg-gray-800">
            <h1 className="font-bold text-red-500">Small ERROR 😉</h1>
            <h3 className="font-maven text-center">
              Welcome to the Source Contract. <br /> You must be connected to
              Ethereum Sepolia Testnet to access Enrollment service.
            </h3>

            <p>
              1. Add Ethereum Sepolia Testnet to your Metamask in{" "}
              <a
                href="https://chainid.network"
                target="_blank"
                className="text-green-500 underline"
              >
                one click
              </a>
            </p>
            <p>
              2. Import test wallet PK to your MetaMask. Only Deployer can
              enroll 🙌
            </p>
            <button
              className="p-3 rounded-md bg-red-600 hover:bg-green-600"
              onClick={() => switchNetwork(43113)}
            >
              {isLoading ? "Switching.." : "Switch To Sepolia"}
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
};
export default Enroll;
