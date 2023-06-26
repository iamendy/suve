import Link from "next/link";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import hands from "../../public/img/hands.svg";
import { motion } from "framer-motion";

const transition = {
  duration: 1.4,
  ease: [0.6, 0.01, 0.05, 0.9],
};

const slideUp = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const MImage = motion(Image);

const Hero = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  return (
    <section className="px-4 py-24 lg:px-0 lg:py-28 lg:flex lg:justify-between items-center lg:max-w-6xl xl:max-w-7xl lg:mx-auto">
      <motion.div initial="initial" animate="animate" className="lg:w-[50%]">
        <motion.h1 className="font-paytone text-[3rem] lg:text-[5rem] leading-tight mb-3 overflow-hidden">
          <motion.span
            className="inline-block"
            variants={slideUp}
            transition={{ ...transition, delay: 0.5 }}
          >
            Your life,
          </motion.span>{" "}
          <motion.span
            className="inline-bock"
            variants={slideUp}
            transition={{ ...transition, delay: 1 }}
          >
            {" "}
            in your hands
          </motion.span>
        </motion.h1>
        <motion.p
          variants={opacity}
          transition={{ ...transition, delay: 1.5 }}
          className="mb-4 lg:w-[70%] lg:mb-9 lg:text-lg xl:text-xl"
        >
          Verify your vaccines and protect yourself against counterfeits, by
          leveraging on our secured interchain technology.
        </motion.p>

        {isConnected ? (
          <motion.div
            variants={opacity}
            transition={{ ...transition, delay: 1.5 }}
            className="mb-5"
          >
            <Link
              href="/verification"
              className="launch inline-block text-center p-3 w-[40%] lg:max-w-[200px] lg:p-4 hover:bg-white hover:text-black hover:font-bold border-white border-2 text-sm rounded-sm"
            >
              Launch App
            </Link>
          </motion.div>
        ) : (
          <button
            className="launch inline-block text-center p-3 w-[40%] lg:max-w-[200px] lg:p-4 hover:bg-white hover:text-black hover:font-bold border-white border-2 text-sm rounded-sm"
            onClick={openConnectModal}
          >
            Connect Wallet
          </button>
        )}
      </motion.div>

      <div className="relative eth p-4 flex justify-center items-center">
        <div className="w-[70%] lg:w-full">
          <MImage
            src={hands}
            alt="suve 3d hands"
            variants={slideUp}
            transition={{ delay: 1, ...transition }}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
