import Layout from "../components/Layout";
import EnrollBox from "../components/enroll/EnrollBox";
import AllVaccines from "../components/enroll/AllVaccines";
import {
  useNetwork,
  useSwitchNetwork,
  useContractRead,
  useAccount,
} from "wagmi";
import { useRouter } from "next/router";
import chains from "../chains";
import { useEffect } from "react";
const Enroll = () => {
  const { chain } = useNetwork();
  const { isLoading, switchNetwork } = useSwitchNetwork();
  const { address, isConnected } = useAccount();
  const router = useRouter();
  //@ts-ignore
  const sourceChainId = parseInt(process.env.NEXT_PUBLIC_SOURCE_ID);
  const { data: owner } = useContractRead({
    //@ts-ignore
    address: chains.enrollService.address,
    abi: chains.enrollService.abi,
    functionName: "owner",
  });

  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected]);

  return (
    <Layout>
      <section className="px-4 lg:px-16 min-h-screen backdrop-blur-sm py-8">
        {chain?.id == sourceChainId && address == owner ? (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 space-y-4 lg:space-y-0">
            <EnrollBox />
            <AllVaccines />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full rounded-md space-y-5 p-5  bg-gray-800">
            <h1 className="font-bold text-red-500">A Tiny ERROR 😉</h1>
            <p> Welcome to the Source Contract. </p>

            {chain?.id !== sourceChainId && (
              <>
                <h3 className="font-maven text-center">
                  You must be connected to{" "}
                  <b className="text-green-500">Avalanche Fuji Testnet</b> to
                  access Enrollment service.
                </h3>

                <p>
                  *️⃣ Please add <b>Avalanche Fuji Testnet</b> to your Metamask
                  in{" "}
                  <a
                    href="https://chainid.network"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-500 underline"
                  >
                    one click
                  </a>{" "}
                  or switch.
                </p>
              </>
            )}

            <p>
              *️⃣ Please <b>import test wallet</b> PK to your MetaMask. Only
              Deployer can enroll 🙌
              <br />
              1818bf734fb041b3a84fd4a7159a58ba105305969d2a6ddb5f46dc5788e39104
              <br />
              *Funds are already loaded to make testing easy ❤️
            </p>
            {chain?.id !== sourceChainId && (
              <button
                className="p-3 rounded-md bg-red-600 hover:bg-green-600"
                //@ts-ignore
                onClick={() => switchNetwork(sourceChainId)}
              >
                {isLoading ? "Switching.." : "Switch To Avalanche"}
              </button>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
};
export default Enroll;
