import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import OrderHeader from "../Components/OrderHeader";
import Loading from "../Shared/Loading";

const AllBoost = () => {
  const { data: allBoost, isLoading } = useQuery({
    queryKey: ["allBoost"],
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
        <h2 className="text-center text-3xl py-5">All Boost</h2>
        <div className="mx-0 lg:mx-5 px-0 lg:px-5 py-5 mt-5 bg-white rounded-lg min-h-[500px]">
          <OrderHeader />
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="border-t-0">
                <tr className="bg-primary text-white">
                  <th>Order Type</th>
                  <th className="hidden lg:flex">date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>details</th>
                </tr>
              </thead>
              <tbody className=" border-gray-100 border-2  border-t-0 rounded-lg">
                {allBoost.boost
                  .slice()
                  .reverse()
                  .map((o, i) => (
                    <tr key={i}>
                      <th>{o.orderType}</th>
                      <td className="hidden lg:flex">{o.date}</td>
                      <th>{o.dollarAmount || o.like || o.amount} Tk</th>
                      <th>
                        {o.status === "Pending" && (
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

export default AllBoost;
