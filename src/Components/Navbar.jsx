import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="shadow-md">
      <div className="navbar max-w-7xl w-[95%] md:w-[93%] mx-auto md:h-[80px] ">
        <div className="navbar-start gap-0">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0 pr-2"
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
                <NavLink to={"/profile-update"}>User Profile</NavLink>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-2xl font-spartan pt-1 md:text-4xl min-w-full flex items-center cursor-pointer font-bold "
          >
            Haven<span className="text-[#5b56bb]  font-bold">Hues</span>.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/profile-update"}>User Profile</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-1 md:gap-3">
          {user ? (
            <div
              data-tip={user.displayName}
              className="dropdown dropdown-end tooltip tooltip-left"
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-8 md:w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2 md:gap-3">
              <Link to={"/login"}>
                <button className="font-semibold text-sm md:text-base hover:text-[#5b56bb]">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="font-semibold text-sm md:text-base hover:text-[#5b56bb]">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
