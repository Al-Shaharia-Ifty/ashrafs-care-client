import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import google from "../Assets/website-img/google-play.png";
import order from "../Assets/icons/Artboard 2.png";
import bel from "../Assets/icons/Artboard 11.png";
import set from "../Assets/icons/Artboard 23.png";
import status from "../Assets/icons/Artboard 22.png";
import pay from "../Assets/icons/Artboard-6.png";
import ord from "../Assets/icons/Order.png";
import srp from "../Assets/icons/Artboard 31.png";
import rpt from "../Assets/icons/Artboard 9.png";
import OrderModal from "../Modal/OrderModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { AuthContext } from "../Contexts/AuthProvider";
import Carousel from "react-multi-carousel";
import { PhotoProvider, PhotoView } from "react-photo-view";
import DashboardAdmin from "../Components/DashboardAdmin";
import AdminBalance from "../Components/AdminBalance";

const DashBoard = () => {
  const { userInfo, refetch } = useContext(AuthContext);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1660 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1660, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
  const { data: banner } = useQuery({
    queryKey: ["banner"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/banner`).then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return <Loading />;
  }

  // all order function
  const allOrder = allOrders.allOrder;
  const allBalanceDue = allOrder.filter((p) => {
    return p.due;
  });

  const allAmount = allBalanceDue.map((p) => {
    return parseInt(p?.due);
  });
  let dueAmount = allAmount.reduce((a, b) => a + b, 0);

  const allBalanceBill = allOrder.filter((p) => {
    return p.bill;
  });
  const allBill = allBalanceBill.map((p) => {
    return parseInt(p?.bill);
  });
  let billAmount = allBill.reduce((a, b) => a + b, 0);

  const totalAmount = dueAmount - billAmount;

  //
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
    <div className="min-h-screen">
      {userInfo?.role === "member" && (
        <>
          {/* mobile and tab view */}
          <div className="lg:hidden">
            <div className="px-5 pt-10">
              <Link to={"/dashboard/payment"}>
                <div className="border-2 p-2 border-primary flex items-center rounded-xl justify-between">
                  <div className="flex items-center">
                    <img className="w-14" src={bel} alt="" />
                    <h2 className="md:text-2xl text-xl pl-3">Balance</h2>
                  </div>
                  <p className="ml-5 font-bold bg-primary text-white p-2 rounded-xl">
                    <span className="text-red-600">Due </span>
                    {totalAmount} Tk
                  </p>
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 py-10">
              <label htmlFor="order-modal" className="label block text-center">
                <div className="flex justify-center items-center mb-2">
                  <img className="w-14" src={order} alt="" />
                </div>
                <h2 className="text-xl">Add Order</h2>
              </label>
              <Link
                to={"/dashboard/summery"}
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
              <Link
                to={"/dashboard/payment"}
                className="block text-center mt-2 text-xl"
              >
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={pay} alt="" />
                </div>
                <p>Payments</p>
              </Link>
              <Link
                to={`/dashboard/report`}
                className="block text-center mt-2 text-xl"
              >
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={rpt} alt="" />
                </div>
                <p>Report</p>
              </Link>
              <Link
                to={`/dashboard/support`}
                className="block text-center mt-2 text-xl"
              >
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={srp} alt="" />
                </div>
                <p>Support</p>
              </Link>
            </div>
          </div>
          {/* pc view */}
          <div className="lg:block hidden">
            <div className="mx-5 md:mx-10">
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
                <Link to={"/dashboard/payment"}>
                  <div className="bg-white p-4 rounded-lg flex items-center">
                    <img className="w-14" src={bel} alt="" />
                    <div>
                      <h2 className="text-2xl ml-5 text-primary">Balance</h2>
                      <p className="ml-5 font-bold">
                        Due{" "}
                        <span className="text-red-600 text-xl">
                          {totalAmount}
                        </span>
                        Tk
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="bg-white rounded-lg flex justify-center">
                  <a href="https://ashrafs-care.web.app/">
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
            </div>
          </div>
          {/* banner */}
          <div className="p-10 pt-0 lg:pt-10 2xl:py-20">
            <PhotoProvider>
              <Carousel
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                responsive={responsive}
                className=" text-white text-center z-10"
              >
                {banner
                  ?.slice(-3)
                  .reverse()
                  .map((c) => (
                    <div key={c._id} className="">
                      <div className="flex justify-center">
                        <PhotoView src={c.img}>
                          <img className="w-full" src={c.img} alt="" />
                        </PhotoView>
                      </div>
                    </div>
                  ))}
              </Carousel>
            </PhotoProvider>
          </div>
        </>
      )}
      {userInfo?.role === "admin" && (
        <>
          <div className="lg:hidden">
            <AdminBalance />
            <div className="grid grid-cols-2 md:grid-cols-3 py-10">
              <Link
                to={"/dashboard/summery"}
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
              <Link
                to={"/dashboard/payment"}
                className="block text-center mt-2 text-xl"
              >
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={pay} alt="" />
                </div>
                <p>Payments</p>
              </Link>
              <Link
                to={`/dashboard/report`}
                className="block text-center mt-2 text-xl"
              >
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={rpt} alt="" />
                </div>
                <p>Report</p>
              </Link>
              <Link
                to={`/dashboard/support`}
                className="block text-center mt-2 text-xl"
              >
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={srp} alt="" />
                </div>
                <p>Support</p>
              </Link>
              <Link
                to={`/dashboard/user/profile`}
                className="block text-center mt-2 text-xl"
              >
                <div className="flex justify-center mb-2">
                  <img className="w-14" src={set} alt="" />
                </div>
                <p>Setting</p>
              </Link>
            </div>
          </div>
          <div className="">
            <DashboardAdmin />
          </div>
        </>
      )}
      <OrderModal />
    </div>
  );
};

export default DashBoard;
