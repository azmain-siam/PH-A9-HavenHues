import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <div className="max-w-7xl w-[93%] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
