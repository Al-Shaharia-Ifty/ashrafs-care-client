import React from "react";
import { useQuery } from "react-query";
import OrderHeader from "../Components/OrderHeader";
import Loading from "../Shared/Loading";

const AllOrder = () => {
  const { data: allOrders, isLoading } = useQuery({
    queryKey: ["allOrders"],
    queryFn: () =>
      fetch(`http://localhost:5000/all-orders`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  console.log(allOrders);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-center text-3xl">All Order</h2>
        <div className="m-5 p-5 bg-white rounded-lg min-h-[500px]">
          <OrderHeader />
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="border-t-0">
                <tr className="bg-primary text-white">
                  <th>date</th>
                  <th>Order type</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Order ID</th>
                  <th>details</th>
                </tr>
              </thead>
              <tbody className=" border-gray-100 border-2  border-t-0">
                {allOrders.allOrder
                  .slice()
                  .reverse()
                  .map((o, i) => (
                    <tr key={i}>
                      <th>{o.date}</th>
                      <td className="font-bold">{o.orderType}</td>
                      <th>{o.dollarAmount || o.like || o.amount}</th>
                      <th>
                        {o.status === "pending" && (
                          <p className="text-warning">Pending</p>
                        )}
                      </th>
                      <th>{o._id}</th>
                      <th>
                        <button className="btn btn-xs text-white btn-primary">
                          View
                        </button>
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

export default AllOrder;
