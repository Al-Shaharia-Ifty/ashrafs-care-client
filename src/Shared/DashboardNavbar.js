import React from "react";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo512.png";
import { AuthContext } from "../Contexts/AuthProvider";
import auth from "../firebase.init";
import spt from "../Assets/icons/Artboard-17.png";
import not from "../Assets/icons/Artboard-18.png";
import pro from "../Assets/icons/Artboard 21.png";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { AiOutlineSearch } from "react-icons/ai";

const DashboardNavbar = () => {
  const [user] = useAuthState(auth);
  const { userInfo } = useContext(AuthContext);
  const [closeDropDown, setCloseDropDown] = useState(false);
  return (
    <div>
      <div className="py-5 bg-[#166534] pl-24 pr-14 flex justify-between items-center">
        <div>
          <Link to={"/dashboard"}>
            <img className="w-16" src={logo} alt="" />
          </Link>
        </div>
        <div>
          {user && (
            <div className="flex">
              {userInfo?.role === "member" && (
                <>
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="flex justify-center items-center h-12">
                        <input
                          type="text"
                          placeholder="Type Order ID"
                          className="input input-bordered w-full h-full max-w-xs rounded-l-full"
                        />
                        <AiOutlineSearch className="bg-white h-full text-xl rounded-r-full px-3 w-16" />
                      </div>
                      <div>
                        <NavLink
                          to="/control-panel"
                          className={({ isActive }) =>
                            isActive
                              ? "btn btn-primary text-white p-0 mx-8"
                              : "btn btn-ghost hover:btn-primary text-white p-0 mx-8"
                          }
                        >
                          <img className="h-[45px]" src={spt} alt="" />
                        </NavLink>
                      </div>
                      <NavLink
                        to="/control-panel"
                        className={({ isActive }) =>
                          isActive
                            ? "btn btn-primary mx-2 text-white p-0"
                            : "btn btn-ghost hover:btn-primary mx-2 text-white p-0"
                        }
                      >
                        <img className="h-[45px]" src={not} alt="" />
                      </NavLink>
                    </div>
                  </div>
                </>
              )}
              {userInfo?.role === "admin" && (
                <NavLink
                  to="/control-panel"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-primary mx-2 text-white p-0 btn-sm"
                      : "btn btn-ghost mx-2 text-white p-0 btn-sm"
                  }
                >
                  Control Panel
                </NavLink>
              )}
              <div className="dropdown dropdown-end ml-8">
                <label tabIndex={0} className="btn btn-ghost rounded-full p-0">
                  <img
                    className="w-11 rounded-full bg-white"
                    src={pro}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
