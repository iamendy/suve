import Link from "next/link";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const Hero = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <section className="px-4 mt-4 lg:px-0 lg:mt-12 lg:flex lg:justify-between items-center lg:max-w-6xl xl:max-w-7xl lg:mx-auto">
      <div className="lg:w-[50%]">
        <h1 className="font-paytone uppercase text-[3rem] lg:text-[5rem] leading-tight mb-3">
          Your life, in your hands
        </h1>
        <p className="mb-4 lg:w-[70%] lg:mb-9 lg:text-lg xl:text-xl">
          Verify your vaccines and protect yourself against counterfeits by
          leveraging on blockchain technology.
        </p>

        {isConnected ? (
          <div className="mb-5">
            <Link
              href="/verification"
              className="launch inline-block text-center p-3 w-[40%] lg:max-w-[200px] lg:p-4 hover:bg-white hover:text-black hover:font-bold border-white border-2 text-sm rounded-sm"
            >
              Launch App
            </Link>
          </div>
        ) : (
          <button
            className="launch inline-block text-center p-3 w-[40%] lg:max-w-[200px] lg:p-4 hover:bg-white hover:text-black hover:font-bold border-white border-2 text-sm rounded-sm"
            onClick={openConnectModal}
          >
            Connect Wallet
          </button>
        )}
      </div>

      <div className="relative eth p-4 flex justify-center items-center">
        <img src="/img/hands.svg" alt="hands" className="w-[70%] lg:w-[100%]" />
      </div>
    </section>
  );
};
export default Hero;
