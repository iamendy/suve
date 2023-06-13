import {
  useChainModal,
  useConnectModal,
  useAccountModal,
} from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useAccount, useNetwork } from "wagmi";
import UserIcon from "./icons/UserIcon";
import Chevron from "./icons/Chevron";

const Navbar = () => {
  const { openChainModal } = useChainModal();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

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

      <div className="flex items-center space-x-5">
        <a
          href="#"
          className="font-bold rounded-sm hover:bg-white hover:text-black px-5 py-2"
          target="_blank"
        >
          Blog
        </a>
        {isConnected ? (
          <div className=" flex space-x-4">
            <Link
              href="/enroll"
              className="font-bold rounded-sm hover:bg-white hover:text-black px-5 py-2"
            >
              Enroll
            </Link>
            <Link
              href="/verification"
              className="font-bold rounded-sm hover:bg-white hover:text-black px-5 py-2"
            >
              Verify
            </Link>

            {openChainModal && (
              <button
                onClick={openChainModal}
                type="button"
                className="flex items-center font-bold rounded-sm hover:bg-white hover:text-black px-5 py-2"
              >
                <>
                  <b>{chain?.name}</b> <Chevron />
                </>
              </button>
            )}

            {openAccountModal && (
              <button onClick={openAccountModal} type="button">
                <UserIcon />
              </button>
            )}
          </div>
        ) : (
          <button
            onClick={openConnectModal}
            className="font-bold rounded-sm hover:bg-white hover:text-black px-5 py-2"
          >
            Connect
          </button>
        )}
      </div>
      {/* <ConnectButton /> */}
    </div>
  );
};
export default Navbar;
