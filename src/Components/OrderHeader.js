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
  const allOrder = allOrders.allOrder;

  const allBoost = allOrder.filter((p) => {
    return p.orderType === "boost";
  });
  const allSetup = allOrder.filter((p) => {
    return p.orderType === "page setup";
  });
  const allPromote = allOrder.filter((p) => {
    return p.orderType === "promote";
  });
  const allRecovery = allOrder.filter((p) => {
    return p.orderType === "page recovery";
  });
  const allGraphic = allOrder.filter((p) => {
    return p.orderType === "graphic";
  });
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

        {allBoost?.length > 0 && (
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
        {allSetup?.length > 0 && (
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
        {allPromote?.length > 0 && (
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
        {allRecovery?.length > 0 && (
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
        {allGraphic?.length > 0 && (
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
