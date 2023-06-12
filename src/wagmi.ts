import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import {
  sepolia,
  celoAlfajores,
  polygonMumbai,
  fantomTestnet,
  avalancheFuji,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [sepolia, celoAlfajores, polygonMumbai, fantomTestnet, avalancheFuji],
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
