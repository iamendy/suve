import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import {
  avalancheFuji,
  polygonMumbai,
  celoAlfajores,
  fantomTestnet,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [celoAlfajores, polygonMumbai, fantomTestnet, avalancheFuji],
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
});

export { chains };
