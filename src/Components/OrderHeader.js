import React from "react";
import { NavLink } from "react-router-dom";

const OrderHeader = () => {
  return (
    <div>
      <div className="flex justify-between flex-wrap gap-5 mx-5">
        <NavLink
          to={"/dashboard/all-order"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary md:rounded-b-none text-white"
              : "btn btn-ghost"
          }
        >
          All Order
        </NavLink>
        <NavLink
          to={"/dashboard/all-boost"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary md:rounded-b-none text-white"
              : " btn btn-ghost"
          }
        >
          All boost
        </NavLink>
        <NavLink
          to={"/dashboard/all-setup"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary md:rounded-b-none text-white"
              : " btn btn-ghost"
          }
        >
          All setup
        </NavLink>
        <NavLink
          to={"/dashboard/all-promote"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary md:rounded-b-none text-white"
              : " btn btn-ghost"
          }
        >
          All promote
        </NavLink>
        <NavLink
          to={"/dashboard/all-recover"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-primary rounded-b-none text-white"
              : " btn btn-ghost"
          }
        >
          All recover
        </NavLink>
      </div>
    </div>
  );
};

export default OrderHeader;
