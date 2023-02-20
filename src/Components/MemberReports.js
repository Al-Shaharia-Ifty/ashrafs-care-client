import React from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const MemberReports = () => {
  const {
    data: membersReports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["membersReports"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/user/reports`, {
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
      <div className="m-5 mt-0">
        <h2 className="text-2xl lg:text-3xl font-bold text-center">
          Your Reports
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          {membersReports
            .slice()
            .reverse()
            .map((r, i) => (
              <div className="bg-white p-3 rounded-lg">
                <p>{r.date}</p>
                <h2 className="text-xl">{r.question}</h2>
                <div className="grid grid-cols-3">
                  <p>Name</p>
                  <p className="col-span-2">: {r.name}</p>
                  <p>Email</p>
                  <p className="col-span-2 ">: {r.email}</p>
                  <p>Order ID</p>
                  <p className="col-span-2">: {r.orderID}</p>
                  <p>Number</p>
                  <p className="col-span-2">: {r.phoneNumber}</p>
                  <p>State</p>
                  <p className="col-span-2">
                    :{" "}
                    {r.solve === "true" ? (
                      <span className="text-success">Solved</span>
                    ) : (
                      <span className="text-warning">Pending</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MemberReports;
