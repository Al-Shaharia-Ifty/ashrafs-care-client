import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo-white.png";

const Navbar = () => {
  const [closeDropDown, setCloseDropDown] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="relative mb-[-80px] mt-2 flex mx-5 items-center">
        <Link to="/home">
          <img className="w-32" src={logo} alt="" />
        </Link>
        <div className="hidden md:flex">
          <NavLink
            to="home"
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary mx-2 text-white btn-sm"
                : "btn btn-ghost mx-2 text-white btn-sm"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary mx-2 text-white btn-sm"
                : "btn btn-ghost mx-2 text-white btn-sm"
            }
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary mx-2 text-white btn-sm"
                : "btn btn-ghost mx-2 text-white btn-sm"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className="relative mb-[-80px] mt-2 flex mx-5 items-center">
        <div className="hidden md:flex">
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary mx-2 text-white btn-sm "
                : "btn btn-ghost mx-2 text-white btn-sm"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="register"
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary mx-2 text-white btn-sm"
                : "btn btn-ghost btn-outline mx-2 text-white btn-sm"
            }
          >
            Sign Up
          </NavLink>
        </div>
        <div>
          <div className="dropdown dropdown-end hidden">
            <label tabIndex={0} className="btn m-1">
              Click
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                onClick={() => setCloseDropDown(!closeDropDown)}
                className="btn btn-ghost md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              {closeDropDown && (
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <Link
                      to="/home"
                      onClick={() => setCloseDropDown(!closeDropDown)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={() => setCloseDropDown(!closeDropDown)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={() => setCloseDropDown(!closeDropDown)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
