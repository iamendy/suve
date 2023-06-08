const Chains = () => {
  return (
    <section className="px-4 text-center lg:mt-12 lg:max-w-6xl lg:mx-auto">
      <h1 className="text-3xl lg:text-6xl lg:w-[70%]  lg:mx-auto mb-4 font-bold  font-paytone">
        One source, interchain validators
      </h1>
      <p className="mb-4 lg:w-[50%] lg:mx-auto lg:text-xl">
        10,000 people die daily from complications due to counterfeit vaccines.
        SUVe helps you verify vaccines, across any blockchain.
      </p>

      <p className="font-bold text-xl">Supported Chains </p>
      <div className="mt-4 w-[70%] lg: lg:w-[30%] mx-auto flex items-center justify-between space-x-3">
        <img
          src="/img/ethereum-logo.svg"
          alt="Ethereum Logo"
          className="w-9 h-9"
        />

        <img src="/img/celo-logo.svg" alt="Celo Logo" className="w-9 h-9" />

        <img
          src="/img/logo-fantom.webp"
          alt="Fantom Logo"
          className="w-9 h-9"
        />

        <img
          src="/img/avalanche-logo.svg"
          alt="avalanche Logo"
          className="w-9 h-9"
        />
        <img
          src="/img/polygon-logo.svg"
          alt="polygon Logo"
          className="w-9 h-9"
        />
      </div>
    </section>
  );
};
export default Chains;
