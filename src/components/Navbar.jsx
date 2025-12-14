import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="h-20 backdrop-blur-xl bg-white/30 shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="navbar w-11/12 lg:w-4/5 mx-auto h-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-1.5"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-base ${isActive && "font-medium text-red-500"}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/coffees"
                className={({ isActive }) =>
                  `text-base ${isActive && "font-medium text-red-500"}`
                }
              >
                Coffees
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `text-base ${isActive && "font-medium text-red-500"}`
                }
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold ml-8 lg:ml-0">
            CoffeeCup
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg ${isActive && "font-medium text-red-500"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/coffees"
              className={({ isActive }) =>
                `text-lg ${isActive && "font-medium text-red-500"}`
              }
            >
              Coffees
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `text-lg ${isActive && "font-medium text-red-500"}`
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
