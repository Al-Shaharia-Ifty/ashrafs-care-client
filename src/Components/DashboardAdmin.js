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

const DashboardAdmin = () => {
  const { data: adminAllOrder, isLoading } = useQuery({
    queryKey: ["adminAllOrder"],
    queryFn: () =>
      fetch(`http://localhost:5000/admin/allOrder`, {
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
  const pending = adminAllOrder.filter((p) => {
    return p.status === "Pending";
  });
  return (
    <div>
      <div className="p-8">
        {/* first 3 is here */}
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-white rounded-md">
            <div className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-8 rounded-md text-white text-lg">
              <h2>Total Sale</h2>
              <img className="h-10" src={sell} alt="" />
            </div>
            <div className="h-[180px] flex justify-center items-center">
              <p className="text-5xl text-[#0D6739] font-bold">12110 ৳</p>
            </div>
          </div>
          <div className="bg-white rounded-md">
            <div className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-8 rounded-md text-white text-lg">
              <h2>Current Month Sale</h2>
              <img className="h-10" src={month} alt="" />
            </div>
            <div className="h-[180px] flex justify-center items-center">
              <p className="text-5xl text-[#0D6739] font-bold">12110 ৳</p>
            </div>
          </div>
          <div className="bg-white rounded-md">
            <div className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-8 rounded-md text-white text-lg">
              <h2>Today'zs Sale</h2>
              <img className="h-10" src={amt} alt="" />
            </div>
            <div className="h-[180px] flex justify-center items-center">
              <p className="text-5xl text-[#0D6739] font-bold">12110 ৳</p>
            </div>
          </div>
        </div>
        {/* middle 2 is here */}
        <div className="grid grid-cols-3 gap-5 py-5 text-[#0D6739]">
          <div>
            <div className="bg-white flex justify-evenly items-center rounded-md p-4 text-2xl font-bold">
              <p>Ad Banner</p>
              <img className="w-36" src={adBanner} alt="" />
            </div>
            <div className="grid grid-cols-2 gap-5 text-center pt-5 text-xl font-bold">
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
                <p>Ad Rate</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white rounded-md">
            <p className="text-xl p-5 pb-0">Resent Orders</p>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th></th>
                    <th>Name</th>
                    <th>Order Type</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {adminAllOrder
                    .slice(0, 3)
                    .reverse()
                    .map((o, i) => (
                      <tr key={i}>
                        <th>{i + 1}</th>
                        <td>{o.name}</td>
                        <td>{o.orderType}</td>
                        <td>{o.dollarAmount || o.like || o.amount} Tk</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* last 3 is here */}
        <div className="grid grid-cols-3 gap-5">
          <div className="grid grid-cols-2 gap-5 text-white text-center">
            <div className="bg-[#0D6739] rounded-md p-5">
              <div className="flex justify-center">
                <img className="h-16" src={panel} alt="" />
              </div>
              <p>User Panel</p>
            </div>
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
          <div className="bg-white rounded-md text-secondary">
            <p className="p-8 text-3xl font-bold">Pending Order</p>
            <p className="text-center font-bold text-8xl">{pending?.length}</p>
          </div>
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
      <OrderModal />
    </div>
  );
};

export default DashboardAdmin;
