import React from "react";
import { useQuery } from "react-query";
import OrderHeader from "../Components/OrderHeader";
import Loading from "../Shared/Loading";

const AllOrder = () => {
  const { data: allOrder, isLoading } = useQuery({
    queryKey: ["allOrder"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/userInfo`, {
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
        <h2 className="text-center text-3xl">All Order</h2>
        <div className="m-5 p-5 bg-white rounded-lg min-h-[500px]">
          <OrderHeader />
          <div className="overflow-x-auto border-gray-100 border-2  border-t-0">
            <table className="table table-zebra w-full">
              <thead className="border-t-0">
                <tr className="bg-primary text-white">
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
