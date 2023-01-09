import React from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { userInfo, dollarRate } = useContext(AuthContext);
  const { balance } = userInfo;
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
  console.log(dollarRate);
  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold pt-5">
          Payment History
        </h2>
        <div className="md:p-10 text-xl font-semibold">
          <h4>
            Your Balance{" "}
            <span className="px-5 bg-primary text-white font-normal">
              {balance}
            </span>
          </h4>
          <div className="overflow-x-auto mt-10">
            <table className="table w-full">
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th>No</th>
                  <th>Description</th>
                  <th>Dollar</th>
                  <th>Price</th>
                  <th>Charge</th>
                  <th>Total</th>
                  <th>Stutas</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody className="font-normal">
                {allOrders.allOrder
                  .slice()
                  .reverse()
                  .map((o, i) => (
                    <tr key={i}>
                      {console.log(o)}
                      <th className="bg-[#B2CE9B]">{i + 1}</th>
                      <td className="px-2">{o.orderType}</td>
                      <td className="px-2">
                        {o.dollar ? <p>{o.dollar}</p> : <p></p>}
                      </td>
                      <td className="px-2 bg-[#B2CE9B]">
                        {(o.orderType === "boost" && <p>{o.dollarRate}</p>) ||
                          (o.orderType !== "boost" && <p>{o.amount}</p>)}
                      </td>
                      <td>{o?.charge}</td>
                      <td className="bg-[#B2CE9B]">{o?.totalAmount}</td>
                      <td>{o?.payment}</td>
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
    </div>
  );
};

export default Payment;
