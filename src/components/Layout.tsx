import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: any) => {
  return (
    <main className="font-maven">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
export default Layout;
