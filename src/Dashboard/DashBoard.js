import React from "react";
import { Link } from "react-router-dom";
import google from "../Assets/google-play.png";
import order from "../Assets/icons/Add Order.png";
import OrderModal from "../Modal/OrderModal";

const DashBoard = () => {
  return (
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

        <div className="bg-white p-4 text-center rounded-lg">
          <h2 className="text-2xl text-primary">Summery</h2>
        </div>
        <div className="bg-white p-4 text-center rounded-lg">
          <h2 className="text-2xl text-primary">Balance</h2>
        </div>
        <div className="bg-white p-4 text-center rounded-lg">
          <h2 className="text-2xl text-primary">Insight</h2>
        </div>
        <div className="bg-white p-4 text-center rounded-lg">
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
          <p>0</p>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-xl text-green-400">Delivered</h2>
          <p>0</p>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-xl text-red-500">Cancelled</h2>
          <p>0</p>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-xl text-yellow-400">Pending</h2>
          <p>0</p>
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
  );
};

export default DashBoard;
