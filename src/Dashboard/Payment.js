import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import AdminPayment from "../DashboardAdmin/AdminPayment";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { userInfo } = useContext(AuthContext);
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
  return (
    <div>
      {userInfo.role === "member" && (
        <div className="min-h-screen">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold pt-5">
            Payment History
          </h2>
          <div className="md:p-10 text-xl font-semibold">
            <h4>
              Your Balance{" "}
              <span className="px-5 bg-primary text-white font-normal">
                Due {totalAmount}
              </span>
            </h4>
            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
                <thead>
                  <tr className="bg-[#006837] text-white text-center">
                    <th>No</th>
                    <th>Description</th>
                    <th>Dollar</th>
                    <th>Price</th>
                    <th>Charge</th>
                    <th>Total</th>
                    <th>Due</th>
                    <th>Stutas</th>
                    <th>More</th>
                  </tr>
                </thead>
                <tbody className="font-normal">
                  {allOrders.allOrder
                    .slice()
                    .reverse()
                    .map((o, i) => (
                      <tr key={i} className="text-center">
                        <th className="bg-[#B2CE9B]">{i + 1}</th>
                        <td className="px-2 text-start xl:w-[350px]">
                          {o.orderType}
                        </td>
                        <td className="px-2 bg-[#B2CE9B]">
                          {o.dollar ? (
                            <p className="text-center">{o.dollar}</p>
                          ) : (
                            <p></p>
                          )}
                        </td>
                        <td className="px-2">
                          {(o.orderType === "boost" && (
                            <p className="text-center">{o.dollarRate}</p>
                          )) ||
                            (o.orderType !== "boost" && (
                              <p className="text-center">
                                {o.amount || o.like}
                              </p>
                            ))}
                        </td>
                        <td className=" bg-[#B2CE9B]">{o?.charge}</td>
                        <td className="">{o?.totalAmount}</td>
                        <td className=" bg-[#B2CE9B] text-red-500">
                          {o?.bill ? o?.due - o?.bill : o?.due}
                        </td>
                        <td className="">
                          {o?.payment === "Due" ? "Due" : "Paid"}
                        </td>
                        <td className="px-2 bg-[#B2CE9B]">
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
      )}
      {userInfo.role === "admin" && <AdminPayment />}
    </div>
  );
};

export default Payment;
