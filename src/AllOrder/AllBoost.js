import { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import OrderHeader from "../Components/OrderHeader";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Shared/Loading";

const AllBoost = () => {
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
  const allBoost = allOrder.filter((p) => {
    return p.orderType === "boost";
  });
  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-center text-3xl py-5">All Boost</h2>
        <div className="mx-0 lg:mx-5 px-0 lg:px-5 py-5 mt-5 bg-white rounded-lg min-h-[500px]">
          <OrderHeader />
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="border-t-0">
                <tr className="bg-primary text-white">
                  <th className="">Order type</th>
                  <th className="hidden lg:flex ">date</th>
                  <th className="">name</th>
                  <th className="">page name</th>
                  <th className="">phone Number</th>
                  <th className="">Status</th>
                  <th className="">ad manager</th>
                  <th className="">Amount</th>
                  <th className="">Payment </th>
                  <th className="">details</th>
                </tr>
              </thead>
              <tbody className=" border-gray-100 border-2  border-t-0 rounded-lg">
                {allBoost
                  .slice()
                  .reverse()
                  .map((o, i) => (
                    <tr key={i}>
                      <td className="uppercase font-semibold">{o.orderType}</td>
                      <td className="hidden lg:flex ">
                        {o.date.split(",")[0]}
                      </td>
                      <td className="">{o.name}</td>
                      <td className="">
                        {o.pageName.length > 20 ? (
                          <span>{o.pageName.slice(0, 20)}...</span>
                        ) : (
                          o.pageName
                        )}
                      </td>
                      <td className="">
                        {o?.phoneNumber?.length > 11 ? (
                          <span>{o.phoneNumber.slice(0, 11)}...</span>
                        ) : (
                          o.phoneNumber
                        )}
                      </td>
                      <td className="">
                        {(o.status === "Pending" && (
                          <p className="text-warning">Pending</p>
                        )) ||
                          (o.status === "Active" && (
                            <p className="text-primary">Active</p>
                          )) ||
                          (o.status !== "Pending" && o.status)}
                      </td>
                      <td className="">
                        {o?.manager?.length > 15 ? (
                          <span>{o.manager.slice(0, 15)}...</span>
                        ) : (
                          o.manager
                        )}
                      </td>
                      <td className="">
                        {o.dollarAmount || o.like || o.amount} Tk
                      </td>
                      <td className="">
                        {" "}
                        {o.payment === "Due" && (
                          <p className="text-error">Due</p>
                        )}
                        {o.payment !== "Due" && (
                          <p className="text-success">Paid</p>
                        )}
                      </td>
                      <td className="">
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

export default AllBoost;
