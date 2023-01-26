import React from "react";
import { NavLink } from "react-router-dom";

const StatusHeader = () => {
  return (
    <div>
      <div className="grid gap-3 lg:gap-0 lg:grid-cols-11 md:grid-cols-4 grid-cols-2 mx-2">
        <NavLink
          to={"/dashboard/all-status"}
          className={({ isActive }) =>
            isActive
              ? "btn text-xs btn-primary lg:rounded-b-none text-white"
              : "btn text-xs btn-ghost"
          }
        >
          Total Order
        </NavLink>
        <NavLink
          to={"/dashboard/all-pending"}
          className={({ isActive }) =>
            isActive
              ? "btn text-xs btn-primary lg:rounded-b-none text-white"
              : " btn text-xs btn-ghost"
          }
        >
          Pending
        </NavLink>
        <NavLink
          to={"/dashboard/all-in-review"}
          className={({ isActive }) =>
            isActive
              ? "btn text-xs btn-primary lg:rounded-b-none text-white"
              : " btn text-xs btn-ghost"
          }
        >
          in-review
        </NavLink>
        <NavLink
          to={"/dashboard/all-active"}
          className={({ isActive }) =>
            isActive
              ? "btn text-xs btn-primary lg:rounded-b-none text-white"
              : " btn text-xs btn-ghost"
          }
        >
          active-ads
        </NavLink>
        <NavLink
          to={"/dashboard/all-paused"}
          className={({ isActive }) =>
            isActive
              ? "btn text-xs btn-primary md:rounded-b-none text-white"
              : " btn text-xs btn-ghost"
          }
        >
          paused-ads
        </NavLink>
        <NavLink
          to={"/dashboard/all-boost-rejected"}
          className={({ isActive }) =>
            isActive
              ? "btn text-xs btn-primary md:rounded-b-none text-white"
              : " btn text-xs btn-ghost"
          }
        >
          Boost Rejected
        </NavLink>
        <NavLink
          to={"/dashboard/all-not-delivering"}
          className={({ isActive }) =>
            isActive
              ? "btn text-xs btn-primary rounded-b-none text-white"
              : " btn text-xs btn-ghost"
          }
        >
          Not Delivering
        </NavLink>
        <NavLink
          to={"/dashboard/all-complete"}
          className={({ isActive }) =>
            isActive
              ? "btn text-xs btn-primary rounded-b-none text-white"
              : " btn text-xs btn-ghost"
          }
        >
          Complete
        </NavLink>
        <NavLink
          to={"/dashboard/all-page-restricted"}
          className={({ isActive }) =>
            isActive
              ? "btn text-xs btn-primary rounded-b-none text-white"
              : " btn text-xs btn-ghost"
          }
        >
          Page Restricted
        </NavLink>
        <NavLink
          to={"/dashboard/all-access-need"}
          className={({ isActive }) =>
            isActive
              ? "btn text-xs btn-primary rounded-b-none text-white"
              : " btn text-xs btn-ghost"
          }
        >
          Access Need
        </NavLink>
        <NavLink
          to={"/dashboard/all-full-access-need"}
          className={({ isActive }) =>
            isActive
              ? "btn text-xs btn-primary rounded-b-none text-white"
              : " btn text-xs btn-ghost"
          }
        >
          Full Access Need
        </NavLink>
      </div>
    </div>
  );
};

export default StatusHeader;
