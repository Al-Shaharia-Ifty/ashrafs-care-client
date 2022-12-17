import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "../Shared/DashboardNavbar";
import status from "../Assets/icons/Artboard 20.png";
import sett from "../Assets/icons/Artboard 23.png";
import pay from "../Assets/icons/Artboard-6.png";
import ord from "../Assets/icons/Order.png";
import srp from "../Assets/icons/Artboard 31.png";
import rpt from "../Assets/icons/Artboard 9.png";

const Dashboard = () => {
  return (
    <div className="text-black">
      <DashboardNavbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}

          <div className="bg-gray-200">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 md:w-60 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">
                <p className="btn btn-primary text-white w-full">Dashboard</p>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/status"}
                className="block text-center mt-2 text-xl"
              >
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={status} alt="" />
                </div>
                <p>Status</p>
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
              <Link className="block text-center mt-2 text-xl">
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={pay} alt="" />
                </div>
                <p>View Payments</p>
              </Link>
            </li>
            <li>
              <Link className="block text-center mt-2 text-xl">
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={rpt} alt="" />
                </div>
                <p>Report</p>
              </Link>
            </li>
            <li>
              <Link className="block text-center mt-2 text-xl">
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={srp} alt="" />
                </div>
                <p>Support</p>
              </Link>
            </li>
            <li>
              <Link className="block text-center mt-2 text-xl">
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={sett} alt="" />
                </div>
                <p>Settings</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
