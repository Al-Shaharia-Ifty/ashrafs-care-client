import React, { useContext } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import bel from "../Assets/icons/Artboard 11.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const AdminBalance = () => {
  const { adminAllOrder, adminOrderLoading } = useContext(AuthContext);
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
  if (isLoading || adminOrderLoading) {
    return <Loading />;
  }

  const allAmount = adminAllOrder?.filter((p) => {
    return p.payment === "Due";
  });
  const allDueAmount = allAmount?.map((p) => {
    return parseInt(p?.due);
  });
  let dueAmount = allDueAmount?.reduce((a, b) => a + b, 0);

  return (
    <div>
      <div className="hidden lg:flex items-center">
        <Link
          to={"/dashboard/payment"}
          className="bg-white p-3 rounded-lg ml-8 flex items-center"
        >
          <p className="font-bold text-md xl:text-xl">Balance</p>
          <p className="text-md xl:text-2xl ml-5">
            {adminBalance[0].balance} Tk
          </p>
        </Link>
        <Link
          to={"/dashboard/due-payment"}
          className="bg-white p-3 rounded-lg ml-3 flex items-center"
        >
          <p className="font-bold text-md xl:text-xl text-red-500">Due</p>
          <p className="text-md xl:text-2xl ml-5">{dueAmount} Tk</p>
        </Link>
      </div>

      <div className="border-primary border-2 m-5 rounded-xl lg:hidden">
        <Link
          to={"/dashboard/payment"}
          className=" mb-0 p-2 flex items-center justify-between"
        >
          <div className="flex items-center">
            <img className="w-14" src={bel} alt="" />
            <h2 className="md:text-2xl text-xl pl-3">Balance</h2>
          </div>
          <p className="ml-5 font-bold bg-primary text-white p-2 rounded-xl">
            {adminBalance[0]?.balance} Tk
          </p>
        </Link>
        <Link
          to={"/dashboard/due-payment"}
          className=" mb-0 p-2 flex items-center rounded-xl justify-between"
        >
          <div className="flex items-center">
            <img className="w-14" src={bel} alt="" />
            <h2 className="md:text-2xl text-xl pl-3 text-red-500">Due</h2>
          </div>
          <p className="ml-5 font-bold bg-primary text-white p-2 rounded-xl">
            {dueAmount} Tk
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AdminBalance;
