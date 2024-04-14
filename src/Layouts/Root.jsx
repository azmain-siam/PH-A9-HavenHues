import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Root = () => {
  // React AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-montserrat">
      <Navbar />
      <div className="max-w-7xl w-[93%] mx-auto"></div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
