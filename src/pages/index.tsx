import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import Hero from "../components/Hero";
import Chains from "../components/Chains";
import WhatIsSuve from "../components/WhatIsSuve";
import HowSuveWorks from "../components/HowSuveWorks";
import Layout from "../components/Layout";

function Page() {
  const { isConnected } = useAccount();
  return (
    <Layout>
      <main className="space-y-9 mb-9 xl:mb-28 lg:space-y-32">
        <Hero />

        <Chains />

        <WhatIsSuve />

        <HowSuveWorks />
      </main>
    </Layout>
  );
}

export default Page;
