import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
