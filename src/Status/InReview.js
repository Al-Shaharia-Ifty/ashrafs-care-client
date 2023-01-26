import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import StatusHeader from "../Components/StatusHeader";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Shared/Loading";

const InReview = () => {
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

  // all order function
  let allOrder = [];
  if (userInfo.role === "member") {
    allOrder = allOrders?.allOrder;
  } else if (userInfo.role === "admin") {
    allOrder = adminAllOrder;
  }
  const inReview = allOrder.filter((p) => {
    return p.status === "In-review";
  });

  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-center text-3xl py-5 font-bold">All In-Review</h2>
        <div className="mx-0 py-5 bg-white rounded-lg min-h-[500px]">
          <StatusHeader />
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="border-t-0">
                <tr className="bg-primary text-white">
                  <th>Order Type</th>
                  <th className="hidden lg:block">Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody className="rounded-lg">
                {inReview
                  .slice()
                  .reverse()
                  .map((o, i) => (
                    <tr key={i}>
                      <th>{o.orderType}</th>
                      <td className="hidden lg:flex">{o.date}</td>
                      <th>{o.dollarAmount || o.like || o.amount} Tk</th>
                      <th>
                        {(o.status === "Pending" && (
                          <p className="text-warning">Pending</p>
                        )) ||
                          (o.status !== "Pending" && o.status)}
                      </th>
                      <th>
                        <Link to={`/dashboard/order-details/${o._id}`}>
                          <button className="btn btn-xs text-white btn-primary">
                            View
                          </button>
                        </Link>
                      </th>
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

export default InReview;
