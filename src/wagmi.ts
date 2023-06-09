import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { fantom, avalancheFuji } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [fantom, avalancheFuji],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "SUVe",
  chains,
});

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { chains };
