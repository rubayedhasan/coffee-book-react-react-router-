import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      {/* navbar  */}
      <Navbar></Navbar>

      {/* dynamic section container */}
      <section className="min-h-[calc(100vh-192px)] md:min-h-[calc(100vh-160px)]">
        {/* dynamic section  */}
        <Outlet />
      </section>

      {/* footer  */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
