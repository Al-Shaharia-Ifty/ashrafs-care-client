import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const MemberSupport = () => {
  const {
    data: membersSupport,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["membersSupport"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/user/support`, {
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
      {membersSupport.length !== 0 && (
        <div className="m-5 mt-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-center">
            Your Questions
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 p-4">
            {membersSupport
              .slice()
              .reverse()
              .map((s, i) => (
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p>{s.date}</p>
                  <div className="grid grid-cols-3">
                    <p>Name</p>
                    <p className="col-span-2">: {s.name}</p>
                    <p>Email</p>
                    <p className="col-span-2 ">: {s.email}</p>
                    <p>Order ID</p>
                    <p className="col-span-2">: {s.orderID}</p>
                    <p>Number</p>
                    <p className="col-span-2">: {s.phoneNumber}</p>
                    <p>State</p>
                    <p className="col-span-2">
                      :{" "}
                      {s.solve === "true" ? (
                        <span className="text-success">Solved</span>
                      ) : (
                        <span className="text-warning">Pending</span>
                      )}
                    </p>
                  </div>
                  <p className="text-2xl font-semibold mt-4">
                    Subject: {s.subject}
                  </p>
                  <p className="text-xl">
                    <span className="font-semibold">Details: </span>
                    {s.details}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberSupport;
