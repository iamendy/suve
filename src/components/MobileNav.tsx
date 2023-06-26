import {
  useChainModal,
  useConnectModal,
  useAccountModal,
} from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useAccount, useNetwork } from "wagmi";
import UserIcon from "./icons/UserIcon";
import Chevron from "./icons/Chevron";
import Close from "./icons/Close";

type Props = {
  toggle: boolean;
  setToggle: (x: boolean) => void;
};

const MobileNav = ({ toggle, setToggle }: Props) => {
  const { openChainModal } = useChainModal();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  return (
    <div
      className={`${
        toggle ? "visible" : "invisible"
      } absolute lg:hidden top-0 left-0 w-full h-full bg-black/70 backdrop-blur-md z-[10000]`}
    >
      <div className="absolute top-8 right-5" onClick={() => setToggle(false)}>
        <Close />
      </div>
      <div className="flex flex-col items-center space-y-9 border h-full w-full pt-32">
        {isConnected ? (
          <div className="flex items-center text-2xl flex-col space-y-9">
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

            <a
              href="https://blog.nnamdiumeh.dev/beyond-blockchain-bridges-an-introduction-to-axelar-protocol"
              className="font-bold rounded-sm text-2xl hover:bg-white hover:text-black px-5 py-2"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
        ) : (
          <button
            onClick={openConnectModal}
            className="font-bold text-2xl rounded-sm hover:bg-white hover:text-black px-5 py-2"
          >
            Connect
          </button>
        )}
      </div>
    </div>
  );
};
export default MobileNav;
