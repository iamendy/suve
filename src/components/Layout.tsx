import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { useNetwork } from "wagmi";

const Layout = ({ children }: any) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { chain } = useNetwork();

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [toggle]);
  return (
    <main className="font-maven pancake">
      {chain?.unsupported && (
        <div className="h-3 w-full bg-red-500 flex justify-center items-center p-2">
          <p>Wrong Network Detected</p>
        </div>
      )}
      <MobileNav toggle={toggle} setToggle={setToggle} />
      <Navbar toggle={toggle} setToggle={setToggle} />

      <div>{children}</div>
      <Footer />
    </main>
  );
};
export default Layout;
