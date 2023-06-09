import { useChainModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useAccount } from "wagmi";
const Navbar = () => {
  const { openChainModal } = useChainModal();
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();

  return (
    <div
      className="bg-black px-3 py-4 flex justify-between items-center border-white border-t border-b
    lg:py-5 lg:px-16"
    >
      <Link
        href="/"
        className="text-white text-xl lg:text-2xl xl:text-3xl font-extrabold"
      >
        SUVe
      </Link>

      <div className="space-x-5">
        <a href="#" className="font-bold">
          Blog
        </a>
        {isConnected ? (
          <Link href="/verification" className="font-bold">
            Verify
          </Link>
        ) : (
          <button onClick={openConnectModal} className="font-bold">
            Connect
          </button>
        )}
      </div>
      {/* <ConnectButton /> */}
    </div>
  );
};
export default Navbar;
