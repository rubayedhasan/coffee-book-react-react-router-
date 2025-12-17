import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      {/*toast container:: For display toast  */}
      <Toaster></Toaster>

      {/* navbar  */}
      <div className="h-20">
        <Navbar></Navbar>
      </div>

      {/* dynamic section container */}
      <section className="min-h-[calc(100vh-192px)] md:min-h-[calc(100vh-160px)] py-6 lg:py-10 w-11/12 lg:w-4/5 mx-auto">
        {/* dynamic section  */}
        <Outlet />
      </section>

      {/* footer  */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
