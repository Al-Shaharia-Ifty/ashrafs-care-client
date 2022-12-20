import React from "react";
import { NavLink } from "react-router-dom";

const StatusHeader = () => {
  return (
    <div>
      <div className="grid gap-3 lg:gap-0 lg:grid-cols-8 md:grid-cols-4 grid-cols-2 mx-5 ">
        <NavLink
          to={"/dashboard/all-status"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary lg:rounded-b-none text-white"
              : "btn btn-ghost bg-gray-200"
          }
        >
          Total Order
        </NavLink>
        <NavLink
          to={"/dashboard/all-pending"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary lg:rounded-b-none text-white"
              : " btn btn-ghost bg-gray-200"
          }
        >
          Pending
        </NavLink>
        <NavLink
          to={"/dashboard/all-in-review"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary lg:rounded-b-none text-white"
              : " btn btn-ghost bg-gray-200"
          }
        >
          in-review
        </NavLink>
        <NavLink
          to={"/dashboard/all-active-ads"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary lg:rounded-b-none text-white"
              : " btn btn-ghost bg-gray-200"
          }
        >
          active-ads
        </NavLink>
        <NavLink
          to={"/dashboard/all-paused-ads"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary md:rounded-b-none text-white"
              : " btn btn-ghost bg-gray-200"
          }
        >
          paused-ads
        </NavLink>
        <NavLink
          to={"/dashboard/all-boost-rejected"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary md:rounded-b-none text-white"
              : " btn btn-ghost bg-gray-200"
          }
        >
          Boost Rejected
        </NavLink>
        <NavLink
          to={"/dashboard/all-not-delivering"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary rounded-b-none text-white"
              : " btn btn-ghost bg-gray-200"
          }
        >
          Not Delivering
        </NavLink>
        <NavLink
          to={"/dashboard/all-complete"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary rounded-b-none text-white"
              : " btn btn-ghost bg-gray-200"
          }
        >
          Complete
        </NavLink>
      </div>
    </div>
  );
};

export default StatusHeader;
