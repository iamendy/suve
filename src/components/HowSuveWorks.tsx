const HowSuveWorks = () => {
  return (
    <section className="px-4 lg:max-w-6xl xl:max-w-7xl lg:mx-auto space-y-4">
      <h3 className=" font-bold text-xl font-paytone mb-3 lg:text-6xl lg:w-[70%] lg:mx-auto lg:text-center lg:mb-5">
        How Does SUVe Work?
      </h3>

      <div className="lg:flex lg:item-baseline lg:justify-between lg:w-[80%] lg:mx-auto lg:mt-4">
        <div className="rounded-lg overflow-clip mb-2 lg:mb-0 lg:w-[50%]">
          <img src="/img/chart.png" alt="" />
        </div>
        <div className="lg:w-[50%] lg:px-5 lg:text-xl space-y-4">
          <p>
            The power of SUVe lies in its underlying interchain architecture
            powered by Alexar protocol.
          </p>
          <p>
            SUVe uses 2-way General Message Passing feature to verify the
            authenticity of vaccines across supported blockchains. This
            architecture can be expanded across other businesses for verication
            services.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HowSuveWorks;
