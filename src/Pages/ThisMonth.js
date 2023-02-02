import React from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";

const ThisMonth = () => {
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

  const date = new Date().toLocaleString();
  const monthArray = date.split(",")[0].split("/");
  monthArray.splice(1, 1);

  // this mount collection
  const thisMonth = adminAllOrder.filter((p) => {
    const orderMouth = p.date.split(",")[0].split("/");
    orderMouth.splice(1, 1);
    return orderMouth[0] === monthArray[0] && orderMouth[1] === monthArray[1];
  });
  console.log(thisMonth);
  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-4xl text-center py-5">This Month</h2>
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
              {thisMonth
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

export default ThisMonth;
