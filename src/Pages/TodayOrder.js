import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";

const TodayOrder = () => {
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

  if (isLoading) {
    return <Loading />;
  }
  // date
  const date = new Date().toLocaleString();
  const todayDate = date.split(",")[0].split("/");

  //   today
  const today = adminAllOrder.filter((p) => {
    return (
      p.date.split(",")[0].split("/")[0] === todayDate[0] &&
      p.date.split(",")[0].split("/")[1] === todayDate[1] &&
      p.date.split(",")[0].split("/")[2] === todayDate[2]
    );
  });
  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-4xl text-center py-5">Today's Order</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-2">Order type</th>
                <th className="hidden lg:flex px-2">date</th>
                <th className="px-2">Status</th>
                <th className="px-2">Amount</th>
                <th className="px-2">Payment </th>
                <th className="px-2">details</th>
              </tr>
            </thead>
            <tbody>
              {today
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
                      {o.payment === "Due" && <p className="text-error">Due</p>}
                      {o.payment !== "Due" && (
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
  );
};

export default TodayOrder;
