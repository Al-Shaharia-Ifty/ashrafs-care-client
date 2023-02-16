import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AdminPayment = () => {
  // admin balance
  const {
    // data: adminBalance,
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ["adminBalance"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/admin-balance`, {
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
        <h2 className="text-3xl font-bold text-center py-4">Payment History</h2>
      </div>
    </div>
  );
};

export default AdminPayment;
