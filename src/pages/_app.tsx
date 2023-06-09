import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import "../styles/globals.css";
import { chains, client } from "../wagmi";
import { Paytone_One, Maven_Pro } from "next/font/google";
import { VaccineProvider } from "../context/VaccineContext";

const paytoneOne = Paytone_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--paytone",
});

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--maven",
});

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme()}
        modalSize="compact"
      >
        <NextHead>
          <title>SUVe | Interchain Vaccine Verification</title>
        </NextHead>

        {mounted && (
          <main
            className={`${paytoneOne.variable} ${mavenPro.variable} bg-black/[97%] text-white main overflow-hidden`}
          >
            <VaccineProvider>
              <Component {...pageProps} />
            </VaccineProvider>
          </main>
        )}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
