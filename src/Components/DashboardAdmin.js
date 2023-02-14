import React from "react";
import sell from "../Assets/admin-logo/admin-panel-10.png";
import month from "../Assets/admin-logo/admin-panel-12.png";
import amt from "../Assets/admin-logo/admin-panel-11.png";
import adBanner from "../Assets/admin-logo/admin-panel-1.png";
import adUpdate from "../Assets/admin-logo/admin-panel.png";
import adRate from "../Assets/admin-logo/admin-panel-3.png";
import panel from "../Assets/admin-logo/admin-panel-9.png";
import custom from "../Assets/admin-logo/admin-panel-7.png";
import icon from "../Assets/admin-logo/admin-panel-6.png";
import note from "../Assets/admin-logo/admin-panel-8.png";
import order from "../Assets/admin-logo/admin-panel-4.png";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import OrderModal from "../Modal/OrderModal";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import DollarRateModal from "../Modal/DollarRateModal";
import { useState } from "react";
import AdPostModal from "../Modal/AdPostModal";
import AddBannerModal from "../Modal/AddBannerModal";
import AddNoteModal from "../Modal/AddNoteModal";
import AddUpdateModal from "../Modal/AddUpdateModal";

const DashboardAdmin = () => {
  const [modal, setModal] = useState(false);
  const [adPost, setAdPost] = useState(false);
  const [addBanner, setAddBanner] = useState(false);
  const [addNote, setAddNote] = useState(false);
  const [addUpdate, setAddUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    data: adminAllOrder,
    isLoading,
    refetch,
  } = useQuery({
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
  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading || loading) {
    return <Loading />;
  }

  // date
  const date = new Date().toLocaleString();
  const monthArray = date.split(",")[0].split("/");
  monthArray.splice(1, 1);
  const todayDate = date.split(",")[0].split("/");

  // all pending order function
  const pending = adminAllOrder.filter((p) => {
    return p.status === "Pending";
  });

  // all order amount
  const allAmount = adminAllOrder.map((p) => {
    return parseInt(p.amount) || parseInt(p.like) || parseInt(p.dollarAmount);
  });

  let totalAmount = allAmount.reduce((a, b) => a + b, 0);

  // this mount collection
  const thisMonth = adminAllOrder.filter((p) => {
    const orderMouth = p.date.split(",")[0].split("/");
    orderMouth.splice(1, 1);
    return orderMouth[0] === monthArray[0] && orderMouth[1] === monthArray[1];
  });
  const thisMountAmount = thisMonth.map((p) => {
    return parseInt(p.amount) || parseInt(p.like) || parseInt(p.dollarAmount);
  });
  let monthAmount = thisMountAmount.reduce((a, b) => a + b, 0);

  // today collection
  const today = adminAllOrder.filter((p) => {
    return (
      p.date.split(",")[0].split("/")[0] === todayDate[0] &&
      p.date.split(",")[0].split("/")[1] === todayDate[1] &&
      p.date.split(",")[0].split("/")[2] === todayDate[2]
    );
  });
  const thisDayAmount = today.map((p) => {
    return parseInt(p.amount) || parseInt(p.like) || parseInt(p.dollarAmount);
  });
  let todayAmount = thisDayAmount.reduce((a, b) => a + b, 0);

  return (
    <div>
      {/* pc view */}
      <div className="hidden lg:flex lg:flex-col">
        <div className="p-8">
          {/* first 3 is here */}
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-white rounded-md">
              <div className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-8 rounded-md text-white text-lg">
                <h2>Total Sale</h2>
                <img className="h-10" src={sell} alt="" />
              </div>
              <div className="h-[180px] flex justify-center items-center">
                <p className="text-5xl text-[#0D6739] font-bold">
                  {!totalAmount ? 0 : totalAmount} ৳
                </p>
              </div>
            </div>
            <Link
              to={"/dashboard/admin/this-month"}
              className="bg-white rounded-md"
            >
              <div className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-8 rounded-md text-white text-lg">
                <h2>Current Month Sale</h2>
                <img className="h-10" src={month} alt="" />
              </div>
              <div className="h-[180px] flex justify-center items-center">
                <p className="text-5xl text-[#0D6739] font-bold">
                  {!monthAmount ? 0 : monthAmount} ৳
                </p>
              </div>
            </Link>
            <div className="bg-white rounded-md">
              <div className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-8 rounded-md text-white text-lg">
                <h2>Today'zs Sale</h2>
                <img className="h-10" src={amt} alt="" />
              </div>
              <div className="h-[180px] flex justify-center items-center">
                <p className="text-5xl text-[#0D6739] font-bold">
                  {!todayAmount ? 0 : todayAmount} ৳
                </p>
              </div>
            </div>
          </div>
          {/* middle 2 is here */}
          <div className="grid grid-cols-3 gap-5 py-5 text-[#0D6739]">
            <div>
              <label
                onClick={() => setAdPost(true)}
                htmlFor="ad-post-modal"
                className="bg-white flex justify-evenly items-center rounded-md p-4 text-2xl font-bold"
              >
                <p>Ad Post</p>
                <img className="w-36" src={adBanner} alt="" />
              </label>
              <div className="grid grid-cols-2 gap-5 text-center pt-5 text-xl font-bold">
                <label
                  onClick={() => setAddUpdate(true)}
                  htmlFor="add-update-modal"
                  className="bg-white rounded-md p-3"
                >
                  <div className="flex justify-center">
                    <img className="h-20 mb-2" src={adUpdate} alt="" />
                  </div>
                  <p>Ad Update</p>
                </label>
                <label
                  htmlFor="dollar-rate-modal"
                  className="bg-white rounded-md p-3"
                  onClick={() => setModal(true)}
                >
                  <div className="flex justify-center">
                    <img className="h-20 mb-2" src={adRate} alt="" />
                  </div>
                  <p>Ad Rating</p>
                </label>
              </div>
            </div>
            <div className="col-span-2 bg-white rounded-md">
              <p className="text-xl p-5 pb-0 text-center">Resent Orders</p>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <tbody>
                    {adminAllOrder
                      .slice(-4)
                      .reverse()
                      .map((o, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>{o.name}</td>
                          <td>{o.orderType}</td>
                          <td>{o.dollarAmount || o.like || o.amount} Tk</td>
                          <td>
                            <Link to={`/dashboard/order-details/${o._id}`}>
                              <button className="btn btn-xs text-white btn-primary">
                                View
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* last 3 is here */}
          <div className="grid grid-cols-3 gap-5">
            {/* 4 item is here */}
            <div className="grid grid-cols-2 gap-5 text-white text-center">
              <Link
                to={"/dashboard/admin-panel"}
                className="bg-[#0D6739] rounded-md p-5"
              >
                <div className="flex justify-center">
                  <img className="h-16" src={panel} alt="" />
                </div>
                <p>Admin Panel</p>
              </Link>
              <Link
                to={"/dashboard/user-panel"}
                className="bg-[#307C3D] rounded-md p-5"
              >
                <div className="flex justify-center">
                  <img className="h-16" src={custom} alt="" />
                </div>
                <p>User Panel</p>
              </Link>
              <label
                htmlFor="add-banner-modal"
                onClick={() => setAddBanner(true)}
                className="bg-[#508F41] rounded-md p-5"
              >
                <div className="flex justify-center">
                  <img className="h-16" src={icon} alt="" />
                </div>
                <p>Ad Banner</p>
              </label>
              <label
                onClick={() => setAddNote(true)}
                htmlFor="add-note-modal"
                className="bg-[#6DA642] rounded-md p-5"
              >
                <div className="flex justify-center">
                  <img className="h-16" src={note} alt="" />
                </div>
                <p>Ad Note</p>
              </label>
            </div>
            <Link
              to={"/dashboard/all-pending"}
              className="bg-white rounded-md text-secondary"
            >
              <p className="p-8 text-3xl font-bold">Pending Order</p>
              <p className="text-center font-bold text-8xl">
                {pending?.length}
              </p>
            </Link>
            <div className="flex justify-center items-center bg-white rounded-md">
              <div>
                <label htmlFor="order-modal">
                  <img className="w-36" src={order} alt="" />
                  <p className="text-center font-bold text-secondary text-2xl">
                    Add Order
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="lg:hidden p-2 md:p-8 grid gap-3">
        {/* 3 amount option */}
        <div className="grid gap-3">
          <div className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-4 md:p-8 rounded-md text-white text-lg">
            <h2>Total Sale</h2>
            <p className="text-4xl text-white font-bold">
              {!totalAmount ? 0 : totalAmount} ৳
            </p>
          </div>
          <Link
            to={"/dashboard/admin/this-month"}
            className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-4 md:p-8 rounded-md text-white text-lg"
          >
            <h2>Current Month</h2>
            <p className="text-4xl text-white font-bold">
              {!monthAmount ? 0 : monthAmount} ৳
            </p>
          </Link>
          <div className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-4 md:p-8 rounded-md text-white text-lg">
            <h2>Today'zs Sale</h2>
            <p className="text-4xl text-white font-bold">
              {!todayAmount ? 0 : todayAmount} ৳
            </p>
          </div>
        </div>
        {/* pending and order option */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            to={"/dashboard/all-pending"}
            className="p-2 bg-white rounded-md text-secondary"
          >
            <p className="text-2xl font-bold">Pending Order</p>
            <p className="text-center pt-4 font-bold text-8xl">
              {pending?.length}
            </p>
          </Link>
          <div className="flex justify-center items-center bg-white rounded-md p-2">
            <div>
              <label htmlFor="order-modal">
                <img className="w-full" src={order} alt="" />
                <p className="text-center font-bold text-secondary text-2xl">
                  Add Order
                </p>
              </label>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <p className="text-xl p-5 pb-0 text-center">Resent Orders</p>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <tbody>
                {adminAllOrder
                  .slice(-4)
                  .reverse()
                  .map((o, i) => (
                    <tr className="text-xs" key={i}>
                      <td>{o.name}</td>
                      <td>{o.orderType}</td>
                      <td>{o.dollarAmount || o.like || o.amount} Tk</td>
                      <td>
                        <Link to={`/dashboard/order-details/${o._id}`}>
                          <button className="btn btn-xs text-white btn-primary">
                            View
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* ad banner and ets. */}
        <div>
          <div className="bg-white flex justify-evenly items-center rounded-md p-4 text-2xl font-bold">
            <p>Ad Banner</p>
            <img className="w-36" src={adBanner} alt="" />
          </div>
          {/* update */}
          <div className="grid grid-cols-2 gap-3 text-center pt-3 text-xl font-bold">
            <div className="bg-white rounded-md p-3">
              <div className="flex justify-center">
                <img className="h-20 mb-2" src={adUpdate} alt="" />
              </div>
              <p>Ad Update</p>
            </div>
            <div className="bg-white rounded-md p-3">
              <div className="flex justify-center">
                <img className="h-20 mb-2" src={adRate} alt="" />
              </div>
              <p>Ad Rating</p>
            </div>
          </div>
        </div>
        {/* last 4 part */}
        <div className="grid grid-cols-2 gap-3 text-white text-center">
          <Link
            to={"/dashboard/admin-panel"}
            className="bg-[#0D6739] rounded-md p-5"
          >
            <div className="flex justify-center">
              <img className="h-16" src={panel} alt="" />
            </div>
            <p>User Panel</p>
          </Link>
          <div className="bg-[#307C3D] rounded-md p-5">
            <div className="flex justify-center">
              <img className="h-16" src={custom} alt="" />
            </div>
            <p>Customers</p>
          </div>
          <div className="bg-[#508F41] rounded-md p-5">
            <div className="flex justify-center">
              <img className="h-16" src={icon} alt="" />
            </div>
            <p>Ad Icon</p>
          </div>
          <div className="bg-[#6DA642] rounded-md p-5">
            <div className="flex justify-center">
              <img className="h-16" src={note} alt="" />
            </div>
            <p>Ad Note</p>
          </div>
        </div>
      </div>
      <OrderModal />
      {modal && <DollarRateModal setLoading={setLoading} />}
      {adPost && <AdPostModal setAdPost={setAdPost} />}
      {addBanner && (
        <AddBannerModal setAddBanner={setAddBanner} setLoading={setLoading} />
      )}
      {addNote && (
        <AddNoteModal setAddNote={setAddNote} setLoading={setLoading} />
      )}
      {addUpdate && (
        <AddUpdateModal setAddUpdate={setAddUpdate} setLoading={setLoading} />
      )}
    </div>
  );
};

export default DashboardAdmin;
