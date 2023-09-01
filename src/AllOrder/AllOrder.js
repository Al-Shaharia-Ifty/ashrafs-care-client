import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import OrderHeader from "../Components/OrderHeader";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Shared/Loading";

const AllOrder = () => {
  // const [number, setNumber] = useState("");
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
        {/* <div className="flex justify-end items-center mr-5">
          <input
            type="number"
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            className="input w-full max-w-xs"
          />
          <button
            onClick={handleSearchNumber}
            className="btn text-white ml-3 btn-primary"
          >
            search
          </button>
          <button
            onClick={() => refetch()}
            className="btn text-white ml-3 btn-info"
          >
            clear
          </button>
        </div> */}
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
                {allOrder
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
                        {o.pageName?.length > 20 ? (
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
                      <th className="">
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

export default AllOrder;
