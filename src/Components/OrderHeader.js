import React from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import Loading from "../Shared/Loading";

const OrderHeader = () => {
  const { data: allOrders, isLoading } = useQuery({
    queryKey: ["allOrders"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/all-orders`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex justify-start flex-wrap gap-5 mx-5">
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

        {allOrders?.boost?.length > 0 && (
          <NavLink
            to={"/dashboard/all-boost"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary md:rounded-b-none text-white"
                : " btn btn-ghost"
            }
          >
            Boost
          </NavLink>
        )}
        {allOrders?.pageSetup?.length > 0 && (
          <NavLink
            to={"/dashboard/all-setup"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary md:rounded-b-none text-white"
                : " btn btn-ghost"
            }
          >
            Setup
          </NavLink>
        )}
        {allOrders?.promote?.length > 0 && (
          <NavLink
            to={"/dashboard/all-promote"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary md:rounded-b-none text-white"
                : " btn btn-ghost"
            }
          >
            Promote
          </NavLink>
        )}
        {allOrders?.recover?.length > 0 && (
          <NavLink
            to={"/dashboard/all-recover"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary rounded-b-none text-white"
                : " btn btn-ghost"
            }
          >
            Recover
          </NavLink>
        )}
        {allOrders?.graphicOrder?.length > 0 && (
          <NavLink
            to={"/dashboard/all-graphic-order"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary rounded-b-none text-white"
                : " btn btn-ghost"
            }
          >
            Graphic
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default OrderHeader;
