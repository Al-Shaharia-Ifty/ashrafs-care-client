import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import MemberSupport from "../Components/MemberSupport";
// import QNA from "../Components/QNA";
import SupportFooter from "../Components/SupportFooter";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Shared/Loading";

const Support = () => {
  const { userInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // admin get all reports
  const {
    data: supports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["supports"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/admin/allSupport`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (loading || isLoading) {
    return <Loading />;
  }

  const onSubmit = (id, state) => {
    setLoading(true);
    let info;
    if (state === "true") {
      info = {
        id,
        solve: "true",
      };
    } else {
      info = {
        id,
        solve: "false",
      };
    }
    fetch(`https://ashrafs-servier.vercel.app/admin/support-solve`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        refetch();
      });
  };

  return (
    <div>
      {userInfo.role === "member" && (
        <div className="min-h-screen bg-white">
          <div className="flex justify-center items-center py-16 px-5 bg-primary text-white">
            <div className="md:w-1/2">
              <h2 className="lg:text-6xl md:text-4xl text-3xl text-center">
                Contact Support
              </h2>
              <p className="text-center text-xs md:text-md lg:text-xl mt-3">
                Select the options below for specific questions or issues. We
                will be happy to solve your problem.
              </p>
            </div>
          </div>
          {/* <QNA /> */}
          <MemberSupport />
          <SupportFooter />
        </div>
      )}
      {userInfo.role === "admin" && (
        <div className="min-h-screen">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 p-4">
            {supports
              .slice()
              .reverse()
              .map((s, i) => (
                <div className="bg-white p-3 rounded-lg">
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
                  </div>
                  <p className="text-2xl font-semibold mt-4">
                    Subject: {s.subject}
                  </p>
                  <p className="text-xl">
                    <span className="font-semibold">Details: </span>
                    {s.details}
                  </p>
                  <div className="text-end mt-2">
                    {s.solve !== "true" ? (
                      <>
                        <button
                          onClick={() => onSubmit(s._id, "true")}
                          className="btn text-white btn-primary"
                        >
                          Solved
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => onSubmit(s._id, "false")}
                        className="btn text-white btn-error"
                      >
                        Unsolved
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
