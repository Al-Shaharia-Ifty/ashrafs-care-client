import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Shared/Loading";

const Summery = () => {
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
  const { userInfo } = useContext(AuthContext);
  const { data: adminAllOrder } = useQuery({
    queryKey: ["adminAllOrder"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/admin/allOrder`, {
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

  // all order function

  let allOrder = [];
  if (userInfo.role === "member") {
    allOrder = allOrders?.allOrder;
  } else if (userInfo.role === "admin") {
    allOrder = adminAllOrder;
  }
  const pending = allOrder.filter((p) => {
    return p.status === "Pending";
  });
  const inReview = allOrder.filter((p) => {
    return p.status === "In-review";
  });
  const active = allOrder.filter((p) => {
    return p.status === "Active";
  });
  const paused = allOrder.filter((p) => {
    return p.status === "Paused";
  });
  const boostRejects = allOrder.filter((p) => {
    return p.status === "Rejected";
  });
  const notDelivering = allOrder.filter((p) => {
    return p.status === "Not Delivering";
  });
  const complete = allOrder.filter((p) => {
    return p.status === "Complete";
  });
  const pageRestricted = allOrder.filter((p) => {
    return p.status === "Page Restricted";
  });
  const accessNeed = allOrder.filter((p) => {
    return p.status === "Access Need";
  });
  const fullAccessNeed = allOrder.filter((p) => {
    return p.status === "Full Access Need";
  });
  return (
    <div className="min-h-screen mx-5">
      <div className="pt-10">
        <h2 className="text-2xl">Order Summery</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 md:gap-10 mt-5">
        <Link to={"/dashboard/all-status"} className="bg-white p-4 rounded-md">
          <h2 className="text-xl">Total Order</h2>
          <p>{allOrder.length}</p>
        </Link>
        <Link to={"/dashboard/all-pending"} className="bg-white p-4 rounded-md">
          <h2 className="text-xl text-yellow-400">Pending</h2>
          <p>{pending.length}</p>
        </Link>
        <Link
          to={"/dashboard/all-in-review"}
          className="bg-white p-4 rounded-md"
        >
          <h2 className="text-xl text-yellow-400">In-review</h2>
          <p>{inReview.length}</p>
        </Link>
        <Link to={"/dashboard/all-active"} className="bg-white p-4 rounded-md">
          <h2 className="text-xl text-green-600">Active Ads</h2>
          <p>{active.length}</p>
        </Link>
        <Link to={"/dashboard/all-paused"} className="bg-white p-4 rounded-md">
          <h2 className="text-xl text-red-600">Paused Ads</h2>
          <p>{paused.length}</p>
        </Link>
        <Link
          to={"/dashboard/all-boost-rejected"}
          className="bg-white p-4 rounded-md"
        >
          <h2 className="text-xl text-red-600">Boost Rejected</h2>
          <p>{boostRejects.length}</p>
        </Link>
        <Link
          to={"/dashboard/all-not-delivering"}
          className="bg-white p-4 rounded-md"
        >
          <h2 className="text-xl text-red-600">Not Delivering</h2>
          <p>{notDelivering.length}</p>
        </Link>
        <Link
          to={"/dashboard/all-complete"}
          className="bg-white p-4 rounded-md"
        >
          <h2 className="text-xl text-green-600">Complete</h2>
          <p>{complete.length}</p>
        </Link>
        <Link
          to={"/dashboard/all-page-restricted"}
          className="bg-white p-4 rounded-md"
        >
          <h2 className="text-xl text-red-600">Page Restricted</h2>
          <p>{pageRestricted.length}</p>
        </Link>
        <Link
          to={"/dashboard/all-access-need"}
          className="bg-white p-4 rounded-md"
        >
          <h2 className="text-xl text-blue-300">Access Need</h2>
          <p>{accessNeed.length}</p>
        </Link>
        <Link
          to={"/dashboard/all-full-access-need"}
          className="bg-white p-4 rounded-md"
        >
          <h2 className="text-xl text-red-600">Full Access Need</h2>
          <p>{fullAccessNeed.length}</p>
        </Link>
      </div>
    </div>
  );
};

export default Summery;
