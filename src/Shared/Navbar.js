import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo-ok-png.png";
import auth from "../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [closeDropDown, setCloseDropDown] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");
  const [user, loading] = useAuthState(auth);
  const { data: userInfo, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () =>
      fetch(`http://localhost:5000/userInfo`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass("fixed top-0 left-0 z-50 bg-green-800 ")
        : setStickyClass("relative");
    }
  };
  if (loading || isLoading) {
    return <Loading />;
  }
  console.log(userInfo);

  return (
    <div
      className={`flex justify-between bg-green-500 text-black w-full ${stickyClass} `}
    >
      <div
        className={`relative mb-[-80px] flex pl-10 2xl:pl-40 w-full items-center ${stickyClass}`}
      >
        <img className="w-48" src={logo} alt="" />

        <div className="hidden md:flex ml-5">
          {!user && (
            <>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-primary mx-2 text-white btn-sm"
                    : "btn btn-ghost hover:btn-primary mx-2 text-white btn-sm"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-primary mx-2 text-white btn-sm"
                    : "btn btn-ghost hover:btn-primary mx-2 text-white btn-sm"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-primary mx-2 text-white btn-sm"
                    : "btn btn-ghost hover:btn-primary mx-2 text-white btn-sm"
                }
              >
                Contact Us
              </NavLink>
            </>
          )}
          {user && (
            <>
              {userInfo.role === "member" && (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-primary mx-2 text-white btn-sm"
                      : "btn btn-ghost hover:btn-primary mx-2 text-white btn-sm"
                  }
                >
                  Dashboard
                </NavLink>
              )}
              {userInfo.role === "admin" && (
                <NavLink
                  to="/control-panel"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-primary mx-2 text-white btn-sm"
                      : "btn btn-ghost hover:btn-primary mx-2 text-white btn-sm"
                  }
                >
                  Control Panel
                </NavLink>
              )}
            </>
          )}
        </div>
      </div>
      <div
        className={`relative mb-[-80px] flex pr-10 2xl:pr-40 items-center justify-end right-0 ${stickyClass}`}
      >
        <div className="hidden md:flex">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-full p-0">
                  <img
                    className="w-11 rounded-full"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    alt=""
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  <li>
                    <h2>Profile</h2>
                  </li>
                  <li>
                    <h2>Change Password</h2>
                  </li>
                  <li>
                    <h2
                      onClick={() => {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                      }}
                      className="text-red-600 hover:text-white hover:bg-red-600"
                    >
                      Sign Out
                    </h2>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-primary mx-2 text-white btn-sm "
                    : "btn btn-ghost hover:btn-primary mx-2 text-white btn-sm"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-primary mx-2 text-white btn-sm"
                    : "btn btn-ghost hover:btn-primary btn-outline mx-2 text-white btn-sm"
                }
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
        <div>
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
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn btn-primary btn-sm my-2 pb-2 text-xs text-white"
                          : ""
                      }
                      to="/home"
                      onClick={() => setCloseDropDown(!closeDropDown)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn btn-primary btn-sm my-2 pb-2 text-xs text-white"
                          : ""
                      }
                      to="/about"
                      onClick={() => setCloseDropDown(!closeDropDown)}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn btn-primary btn-sm my-2 pb-2 text-xs text-white"
                          : ""
                      }
                      to="/contact"
                      onClick={() => setCloseDropDown(!closeDropDown)}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn btn-primary btn-sm my-2 pb-2 text-xs text-white"
                          : ""
                      }
                      to="/login"
                      onClick={() => setCloseDropDown(!closeDropDown)}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn btn-primary btn-sm my-2 pb-2 text-xs text-white"
                          : ""
                      }
                      to="/register"
                      onClick={() => setCloseDropDown(!closeDropDown)}
                    >
                      Sign Up
                    </NavLink>
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
