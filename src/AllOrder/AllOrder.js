import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import OrderHeader from "../Components/OrderHeader";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Shared/Loading";

const AllOrder = () => {
  const { userInfo, adminAllOrder, adminOrderLoading } =
    useContext(AuthContext);
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
  if (isLoading || adminOrderLoading) {
    return <Loading />;
  }

  // check admin and member
  let allOrder = [];
  if (userInfo.role === "member") {
    allOrder = allOrders?.allOrder;
  } else if (userInfo.role === "admin") {
    allOrder = adminAllOrder;
  }
  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-center text-3xl py-5">All Order</h2>
        <div className="mx-0 lg:mx-5 px-0 lg:px-5 py-5 mt-5 bg-white rounded-lg min-h-[500px]">
          <OrderHeader />
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="border-t-0">
                <tr className="bg-primary text-white">
                  <th className="px-2">Order type</th>
                  <th className="hidden lg:flex px-2">date</th>
                  <th className="px-2">Status</th>
                  <th className="px-2">Amount</th>
                  <th className="px-2">Payment </th>
                  <th className="px-2">details</th>
                </tr>
              </thead>
              <tbody className=" border-gray-100 border-2  border-t-0 rounded-lg">
                {allOrder
                  .slice()
                  .reverse()
                  .map((o, i) => (
                    <tr key={i}>
                      <td className="px-2">{o.orderType}</td>
                      <td className="hidden lg:flex px-2">{o.date}</td>
                      <td className="px-2">
                        {(o.status === "Pending" && (
                          <p className="text-warning">Pending</p>
                        )) ||
                          (o.status === "Active" && (
                            <p className="text-primary">Active</p>
                          )) ||
                          (o.status !== "Pending" && o.status)}
                      </td>
                      <td className="px-2">
                        {o.dollarAmount || o.like || o.amount} Tk
                      </td>
                      <td className="px-2">
                        {" "}
                        {o.payment === "Due" && (
                          <p className="text-error">Due</p>
                        )}
                        {o.payment === "Paid" && (
                          <p className="text-success">Paid</p>
                        )}
                      </td>
                      <td className="px-2">
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
    </div>
  );
};

export default AllOrder;
