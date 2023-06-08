import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Navbar from "../components/Navbar";

function Page() {
  const { isConnected } = useAccount();
  return (
    <>
      <Navbar />

      <main className="space-y-9 mb-9 xl:mb-28 lg:space-y-32">
        <section className="px-4 mt-4 lg:px-0 lg:mt-12 lg:flex lg:justify-between items-center lg:max-w-6xl xl:max-w-7xl lg:mx-auto">
          <div className="lg:w-[50%]">
            <h1 className="font-paytone uppercase text-[3rem] lg:text-[5rem] leading-tight mb-3">
              Your life, in your hands
            </h1>
            <p className="mb-4 lg:w-[70%] lg:mb-9 lg:text-lg">
              Verify your vaccines and protect yourself against counterfeits by
              leveraging on blockchain technology.
            </p>

            <div className="mb-5">
              <button className="launch relative p-3 w-[40%] lg:max-w-[200px] lg:p-4 border-white border-2 text-sm rounded-sm">
                Launch App
              </button>
            </div>
          </div>

          <div>
            <div className="eth relative p-4 flex justify-center items-center">
              <img
                src="/img/hands.svg"
                alt="hands"
                className="w-[70%] lg:w-[100%]"
              />
            </div>
          </div>
        </section>

        <section className="px-4 text-center lg:mt-12 lg:max-w-6xl lg:mx-auto">
          <h1 className="text-3xl lg:text-6xl lg:w-[70%]  lg:mx-auto mb-4 font-bold  font-paytone">
            One source, interchain validators
          </h1>
          <p className="mb-4 lg:w-[50%] lg:mx-auto lg:text-xl">
            10,000 people die daily from complications due to counterfeit
            vaccines. SUVe helps you verify vaccines, across any blockchain.
          </p>

          <p className="font-bold text-xl">Supported Chains </p>
          <div className="mt-4 w-[70%] lg: lg:w-[30%] mx-auto flex items-center justify-between space-x-3">
            <img
              src="/img/ethereum-logo.svg"
              alt="Ethereum Logo"
              className="w-9 h-9"
            />

            <img src="/img/celo-logo.svg" alt="Celo Logo" className="w-9 h-9" />

            <img
              src="/img/logo-fantom.webp"
              alt="Fantom Logo"
              className="w-9 h-9"
            />

            <img
              src="/img/avalanche-logo.svg"
              alt="avalanche Logo"
              className="w-9 h-9"
            />
            <img
              src="/img/polygon-logo.svg"
              alt="polygon Logo"
              className="w-9 h-9"
            />
          </div>
        </section>

        <section className="px-4 lg:max-w-6xl lg:mx-auto space-y-4">
          <h3 className="font-bold text-xl font-paytone mb-3 lg:text-6xl lg:w-[70%] lg:mx-auto lg:text-center">
            What is SUVe?
          </h3>
          <div className="mt-4 lg:text-xl lg:text-center lg:w-[60%] lg:mx-auto">
            <p className="mt-4">
              SUVe (Super Verification) is a dApp that helps users validate
              their vaccines. The Covid pandemic saw the influx of substandard
              and unverifiable vaccines being shipped all over the world
              especially in developing nations.
            </p>

            <p className="mt-3">
              With SUVe, Pharmaceutical companies can leverage on the security,
              scalability and transperency of SUVe, to ensure only approved
              vaccines are administered.
            </p>
          </div>
        </section>

        <section className="px-4 lg:max-w-6xl xl:max-w-7xl lg:mx-auto space-y-4">
          <h3 className=" font-bold text-xl font-paytone mb-3 lg:text-6xl lg:w-[70%] lg:mx-auto lg:text-center lg:mb-5">
            How Does SUVe Work?
          </h3>

          <div className="lg:flex lg:item-baseline lg:justify-between lg:w-[80%] lg:mx-auto lg:mt-4">
            <div className="rounded-lg overflow-clip mb-2 lg:mb-0 lg:w-[50%]">
              <img src="/img/chart.png" alt="" />
            </div>
            <div className="lg:w-[50%] lg:px-5 lg:text-xl space-y-4">
              <p>
                The power of SUVe lies in its underlying interchain architecture
                powered by Alexar protocol.
              </p>
              <p>
                SUVe uses 2-way General Message Passing feature to verify the
                authenticity of vaccines across supported blockchains. This
                architecture can be expanded across other businesses for
                verication services.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black px-4 py-3 text-center text-sm text-white/60">
        Axelar X OSCA 🖤
      </footer>

      {/* <ConnectButton /> */}
    </>
  );
}

export default Page;
