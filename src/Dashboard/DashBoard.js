import React from "react";
import { Link } from "react-router-dom";
import google from "../Assets/google-play.png";
import order from "../Assets/icons/Artboard 2.png";
import sum from "../Assets/icons/Artboard 22.png";
import bel from "../Assets/icons/Artboard 11.png";
import ins from "../Assets/icons/Artboard 39.png";
import status from "../Assets/icons/Artboard 20.png";
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
  const complete = allOrder.filter((p) => {
    return p.status === "Complete";
  });
  const cancelled = allOrder.filter((p) => {
    return p.status === "Cancelled";
  });
  console.log(allOrder);

  // code.
  return (
    <div>
      <div className="lg:hidden min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-3 my-auto">
          <Link
            to={"/dashboard/mobile"}
            className="block text-center mt-2 text-xl"
          >
            <div className="flex justify-center mb-2">
              <img className="w-14" src={status} alt="" />
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
            <p>status</p>
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
            <p>View Payments</p>
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
      <div className="lg:block hidden">
        <div className="min-h-screen mx-5 md:mx-10">
          {/* cart */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center pt-10 gap-5 md:gap-10">
            {/* order modal */}
            <label
              htmlFor="order-modal"
              className="label bg-white p-4 text-center rounded-lg flex items-center justify-evenly"
            >
              <img className="w-14" src={order} alt="" />
              <h2 className="text-2xl text-primary">Add Order</h2>
            </label>

            <div className="bg-white p-4 text-center rounded-lg flex items-center justify-evenly">
              <img className="w-14" src={sum} alt="" />
              <h2 className="text-2xl text-primary">Summery</h2>
            </div>
            <div className="bg-white p-4 text-center rounded-lg flex items-center justify-evenly">
              <img className="w-14" src={ins} alt="" />
              <h2 className="text-2xl text-primary">Insight</h2>
            </div>
            <div className="bg-white p-4 text-center rounded-lg flex items-center justify-evenly">
              <img className="w-14" src={bel} alt="" />
              <div>
                <h2 className="text-2xl text-primary">Balance</h2>
                <p>{""}</p>
              </div>
            </div>
            <div className="bg-white p-4 text-center rounded-lg flex items-center justify-evenly">
              <h2 className="text-2xl text-primary"> </h2>
            </div>
            <div className="bg-white text-center rounded-2xl">
              <a href="https://youtube.com">
                <img className="w-60" src={google} alt="" />
              </a>
            </div>
          </div>
          {/*  */}
          <div className="mt-10">
            <h2 className="text-2xl">Summery (last 30 days)</h2>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 md:gap-10 mt-5">
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-xl">Total Order</h2>
              <p>{allOrder.length}</p>
            </div>
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-xl text-green-400">Delivered</h2>
              <p>{complete.length}</p>
            </div>
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-xl text-red-500">Cancelled</h2>
              <p>{cancelled.length}</p>
            </div>
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-xl text-yellow-400">Pending</h2>
              <p>{pending.length}</p>
            </div>
          </div>
          {/*  */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-xl">Pending Consignments(0)</h2>
              <div className="text-end">
                <Link>
                  <i>View All</i>
                </Link>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-xl">Pending Consignments(0)</h2>
              <div className="text-end">
                <Link>
                  <i>View All</i>
                </Link>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-xl">Pending Consignments(0)</h2>
              <div className="text-end">
                <Link>
                  <i>View All</i>
                </Link>
              </div>
            </div>
          </div>
          <OrderModal />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
