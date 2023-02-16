import React from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AdminBalance = () => {
  // admin balance
  const {
    data: adminBalance,
    isLoading,
    refetch,
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
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="bg-white p-3 rounded-lg ml-5 flex items-center">
        <p className="font-bold text-xl">Balance</p>
        <p className="text-2xl ml-5">{adminBalance[0].balance} Tk</p>
      </div>
    </div>
  );
};

export default AdminBalance;
