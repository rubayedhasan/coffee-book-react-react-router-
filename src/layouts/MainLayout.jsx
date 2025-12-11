import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <div>
      {/* navbar  */}
      <Navbar></Navbar>

      {/* dynamic section  */}
      <section className="min-h-[calc(100vh-160px)]"></section>

      {/* footer  */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
