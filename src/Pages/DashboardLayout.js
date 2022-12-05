import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  return (
    <div className="text-black">
      <Navbar />
      <div className="pt-20 bg-green-800"></div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}

          <div className="bg-gray-200">
            <DashboardNavbar />
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 md:w-60 bg-base-100 ">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Dashboard</Link>
            </li>
            <li>
              <Link>Sidebar Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
