import React from "react";
import { Link } from "react-router-dom";
import google from "../Assets/website-img/google-play.png";
import das from "../Assets/icons/Artboard 1.png";
import order from "../Assets/icons/Artboard 2.png";
import bel from "../Assets/icons/Artboard 11.png";
import status from "../Assets/icons/Artboard 22.png";
import sett from "../Assets/icons/Artboard 23.png";
import pay from "../Assets/icons/Artboard-6.png";
import ord from "../Assets/icons/Order.png";
import srp from "../Assets/icons/Artboard 31.png";
import rpt from "../Assets/icons/Artboard 9.png";
import OrderModal from "../Modal/OrderModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const DashBoard = () => {
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

  // all order function
  const allOrder = allOrders.allOrder;
  const pending = allOrder.filter((p) => {
    return p.status === "Pending";
  });
  const inReview = allOrder.filter((p) => {
    return p.status === "In-review";
  });
  const activeAds = allOrder.filter((p) => {
    return p.status === "Active Ads";
  });
  const pausedAds = allOrder.filter((p) => {
    return p.status === "Paused Ads";
  });
  const boostRejects = allOrder.filter((p) => {
    return p.status === "Boost Rejected";
  });
  const notDelivering = allOrder.filter((p) => {
    return p.status === "Not Delivering";
  });
  const complete = allOrder.filter((p) => {
    return p.status === "Complete";
  });

  // code.
  return (
    <div>
      {/* mobile and tab view */}
      <div className="lg:hidden min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-3 my-auto">
          <Link
            to={"/dashboard/mobile"}
            className="block text-center mt-2 text-xl"
          >
            <div className="flex justify-center mb-2">
              <img className="w-14" src={das} alt="" />
            </div>
            <p>Dashboard</p>
          </Link>
          <Link
            to={"/dashboard/status"}
            className="block text-center mt-2 text-xl"
          >
            <div className="flex justify-center mb-2">
              <img className="w-14" src={status} alt="" />
            </div>
            <p>Summery</p>
          </Link>
          <Link
            to={"/dashboard/all-order"}
            className="block text-center mt-2 text-xl"
          >
            <div className="flex justify-center mb-2">
              <img className="w-14" src={ord} alt="" />
            </div>
            <p>All Order</p>
          </Link>
          <Link className="block text-center mt-2 text-xl">
            <div className="flex justify-center mb-2">
              <img className="w-14" src={pay} alt="" />
            </div>
            <p>Payments</p>
          </Link>
          <Link className="block text-center mt-2 text-xl">
            <div className="flex justify-center mb-2">
              <img className="w-14" src={rpt} alt="" />
            </div>
            <p>Report</p>
          </Link>
          <Link className="block text-center mt-2 text-xl">
            <div className="flex justify-center mb-2">
              <img className="w-14" src={srp} alt="" />
            </div>
            <p>Support</p>
          </Link>
          <Link className="block text-center mt-2 text-xl">
            <div className="flex justify-center mb-2">
              <img className="w-14" src={sett} alt="" />
            </div>
            <p>Settings</p>
          </Link>
        </div>
      </div>
      {/* pc view */}
      <div className="lg:block hidden">
        <div className="min-h-screen mx-5 md:mx-10">
          {/* cart */}
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 justify-center pt-10 gap-5 md:gap-10">
            {/* order modal */}
            <label
              htmlFor="order-modal"
              className="label bg-white p-4 rounded-lg flex items-center justify-start"
            >
              <img className="w-14" src={order} alt="" />
              <h2 className="text-2xl ml-5 text-primary">Add Order</h2>
            </label>
            <div className="bg-white p-4 rounded-lg flex items-center">
              <img className="w-14" src={bel} alt="" />
              <div>
                <h2 className="text-2xl ml-5 text-primary">Balance</h2>
                <p>{""}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg flex justify-center">
              <a href="https://youtube.com">
                <img className="w-60" src={google} alt="" />
              </a>
            </div>
          </div>
          {/*  */}
          <div className="mt-10">
            <h2 className="text-2xl">Status</h2>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 md:gap-10 mt-5">
            <Link
              to={"/dashboard/all-status"}
              className="bg-white p-4 rounded-md"
            >
              <h2 className="text-xl">Total Order</h2>
              <p>{allOrder.length}</p>
            </Link>
            <Link
              to={"/dashboard/all-pending"}
              className="bg-white p-4 rounded-md"
            >
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
            <Link
              to={"/dashboard/all-active-ads"}
              className="bg-white p-4 rounded-md"
            >
              <h2 className="text-xl text-green-600">Active Ads</h2>
              <p>{activeAds.length}</p>
            </Link>
            <Link
              to={"/dashboard/all-paused-ads"}
              className="bg-white p-4 rounded-md"
            >
              <h2 className="text-xl text-red-600">Paused Ads</h2>
              <p>{pausedAds.length}</p>
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
          </div>

          <OrderModal />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
