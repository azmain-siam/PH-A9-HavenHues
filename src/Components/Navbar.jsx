import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <div className="navbar max-w-7xl md:h-[80px] w-[95%] md:w-[93%] mx-auto">
        <div className="navbar-start gap-0">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0 pr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/profile-update"}>Update Profile</NavLink>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-lg md:text-3xl cursor-pointer font-bold "
          >
            Real Estate
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/profile-update"}>Update Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-1 md:gap-3">
          <Link to={"/login"}>
            {/* <button className="btn bg-[#5b56bb] border-[#5b56bb] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 text-xs md:text-sm">
              Login
            </button> */}
            <button className="font-semibold text-sm md:text-base hover:text-[#5b56bb]">
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            {/* <button className="btn bg-[#5b56bb] border-[#5b56bb] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 text-xs md:text-sm">
              Register
            </button> */}
            <button className="font-semibold text-sm md:text-base hover:text-[#5b56bb]">
              Register
            </button>
          </Link>
          <div
            data-tip="Name"
            className="h-10 md:h-12 w-10 md:w-12 tooltip tooltip-left cursor-pointer rounded-full bg-slate-400"
          >
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
