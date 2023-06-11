import { createContext, useState } from "react";

const VaccineContext = createContext(null);

interface Vaccine {
  name: string;
  description: string;
  registeredAt: string;
  expiresAt: string;
}

export function VaccineProvider({ children }: any) {
  const [vaccine, setVaccine] = useState<Vaccine>();
  const [isVaccineLoaded, setIsVaccineLoaded] = useState<boolean>(false);
  const [isGmpInProgress, setIsGmpInProgress] = useState<boolean>(false);
  const [hash, setHash] = useState<string>("");
  const [txHash, setTxHash] = useState<string>("");

  return (
    <VaccineContext.Provider
      value={{
        vaccine,
        setVaccine,
        isVaccineLoaded,
        setIsVaccineLoaded,
        txHash,
        setTxHash,
        isGmpInProgress,
        setIsGmpInProgress,
        hash,
        setHash,
      }}
    >
      {children}
    </VaccineContext.Provider>
  );
}

export default VaccineContext;
