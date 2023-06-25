import React from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import bel from "../Assets/icons/Artboard 11.png";
import { Link } from "react-router-dom";

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
    <Link to={"/dashboard/payment"}>
      <div className="bg-white p-3 rounded-lg ml-8 hidden lg:flex items-center">
        <p className="font-bold text-xl">Balance</p>
        <p className="text-2xl ml-5">{adminBalance[0].balance} Tk</p>
      </div>
      <div className="lg:hidden border-2 m-5 mb-0 p-2 border-primary flex items-center rounded-xl justify-between">
        <div className="flex items-center">
          <img className="w-14" src={bel} alt="" />
          <h2 className="md:text-2xl text-xl pl-3">Balance</h2>
        </div>
        <p className="ml-5 font-bold bg-primary text-white p-2 rounded-xl">
          {adminBalance[0]?.balance} Tk
        </p>
      </div>
    </Link>
  );
};

export default AdminBalance;
