import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "../Shared/DashboardNavbar";
import status from "../Assets/icons/Artboard 22.png";
import das from "../Assets/icons/Artboard 1.png";
import sett from "../Assets/icons/Artboard 23.png";
import pay from "../Assets/icons/Artboard-6.png";
import ord from "../Assets/icons/Order.png";
import srp from "../Assets/icons/Artboard 31.png";
import rpt from "../Assets/icons/Artboard 9.png";
import { AuthContext } from "../Contexts/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <div className="text-black">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}

          <div className="bg-gray-200">
            {" "}
            <DashboardNavbar />
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 md:w-60 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {userInfo.role === "member" && (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={das} alt="" />
                    </div>
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/summery"}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={status} alt="" />
                    </div>
                    <p>Summery</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/all-order"}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={ord} alt="" />
                    </div>
                    <p>All Orders</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/payment"}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={pay} alt="" />
                    </div>
                    <p>Payments</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/report"}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={rpt} alt="" />
                    </div>
                    <p>Report</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/dashboard/support`}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={srp} alt="" />
                    </div>
                    <p>Support</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/user/profile"}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={sett} alt="" />
                    </div>
                    <p>Settings</p>
                  </Link>
                </li>
              </>
            )}
            {userInfo.role === "admin" && (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={das} alt="" />
                    </div>
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/summery"}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={status} alt="" />
                    </div>
                    <p>Summery</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/all-order"}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={ord} alt="" />
                    </div>
                    <p>All Orders</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/payment"}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={pay} alt="" />
                    </div>
                    <p>Payments</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/report"}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={rpt} alt="" />
                    </div>
                    <p>Report</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/dashboard/support`}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={srp} alt="" />
                    </div>
                    <p>Support</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/user/profile"}
                    className="block text-center mt-2 text-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <img className="w-14" src={sett} alt="" />
                    </div>
                    <p>Settings</p>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
