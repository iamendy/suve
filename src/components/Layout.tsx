import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const Layout = ({ children }: any) => {
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [toggle]);
  return (
    <main className="font-maven">
      <MobileNav toggle={toggle} setToggle={setToggle} />
      <Navbar toggle={toggle} setToggle={setToggle} />
      {children}
      <Footer />
    </main>
  );
};
export default Layout;
