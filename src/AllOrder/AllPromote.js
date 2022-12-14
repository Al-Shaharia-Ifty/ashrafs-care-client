import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import OrderHeader from "../Components/OrderHeader";
import Loading from "../Shared/Loading";

const AllPromote = () => {
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
  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-center text-3xl py-5">All Promote</h2>
        <div className="mx-0 lg:mx-5 px-0 lg:px-5 py-5 mt-5 bg-white rounded-lg min-h-[500px]">
          <OrderHeader />
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="border-t-0">
                <tr className="bg-primary text-white">
                  <th>Order type</th>
                  <th className="hidden lg:flex">date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>details</th>
                </tr>
              </thead>
              <tbody className=" border-gray-100 border-2  border-t-0 rounded-lg">
                {allOrders.promote
                  .slice()
                  .reverse()
                  .map((o, i) => (
                    <tr key={i}>
                      <th>{o.orderType}</th>
                      <td className="hidden lg:flex">{o.date}</td>
                      <th>{o.dollarAmount || o.like || o.amount}</th>
                      <th>
                        {o.status === "pending" && (
                          <p className="text-warning">Pending</p>
                        )}
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

export default AllPromote;
