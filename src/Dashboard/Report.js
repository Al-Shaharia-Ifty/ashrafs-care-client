import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { useQuery } from "react-query";
import MemberReports from "../Components/MemberReports";
import SupportFooter from "../Components/SupportFooter";
import { AuthContext } from "../Contexts/AuthProvider";
import ReportModal from "../Modal/ReportModal";
import Loading from "../Shared/Loading";

const Report = () => {
  const { userInfo } = useContext(AuthContext);
  const [problem, setProblem] = useState(false);
  const [loading, setLoading] = useState(false);

  // admin get all reports
  const {
    data: reports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/admin/allReport`, {
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
    fetch(`https://ashrafs-servier.vercel.app/admin/report-solve`, {
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
                Report a problem
              </h2>
              <p className="text-center text-xs md:text-md lg:text-xl mt-3">
                Select the options below for specific questions or issues. We
                will be happy to solve your problem.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-7 py-24 px-5 md:px-10 lg:px-20">
            <label
              htmlFor="support-modal"
              onClick={(e) => setProblem(e.target.textContent)}
              className="p-11 px-5 md:px-7 lg:px-11 bg-[#C7EAFB94] font-semibold rounded-2xl text-center"
            >
              আমার বুস্ট নট ডেলিভারিং হয়ে আছে
            </label>
            <label
              htmlFor="support-modal"
              onClick={(e) => setProblem(e.target.textContent)}
              className="p-11 px-5 md:px-7 lg:px-11 bg-[#C7EAFB94] font-semibold rounded-2xl text-center"
            >
              আমার বুস্ট রিজেক্ট করে দিয়েছে
            </label>
            <label
              htmlFor="support-modal"
              onClick={(e) => setProblem(e.target.textContent)}
              className="p-11 px-5 md:px-7 lg:px-11 bg-[#C7EAFB94] font-semibold rounded-2xl text-center"
            >
              আমার বুস্ট নট ডেলিভারিং হয়ে আছে
            </label>
            <label
              htmlFor="support-modal"
              onClick={(e) => setProblem(e.target.textContent)}
              className="p-11 px-5 md:px-7 lg:px-11 bg-[#C7EAFB94] font-semibold rounded-2xl text-center"
            >
              আমার বুস্ট নট ডেলিভারিং হয়ে আছে
            </label>
            <label
              htmlFor="support-modal"
              onClick={(e) => setProblem(e.target.textContent)}
              className="p-11 px-5 md:px-7 lg:px-11 bg-[#C7EAFB94] font-semibold rounded-2xl text-center"
            >
              আমার বুস্ট নট ডেলিভারিং হয়ে আছে
            </label>
            <label
              htmlFor="support-modal"
              onClick={(e) => setProblem(e.target.textContent)}
              className="p-11 px-5 md:px-7 lg:px-11 bg-[#C7EAFB94] font-semibold rounded-2xl text-center"
            >
              আমার বুস্ট রিজেক্ট করে দিয়েছে
            </label>
            <label
              htmlFor="support-modal"
              onClick={(e) => setProblem(e.target.textContent)}
              className="p-11 px-5 md:px-7 lg:px-11 bg-[#C7EAFB94] font-semibold rounded-2xl text-center"
            >
              আমার বুস্ট নট ডেলিভারিং হয়ে আছে
            </label>
            <label
              htmlFor="support-modal"
              onClick={(e) => setProblem(e.target.textContent)}
              className="p-11 px-5 md:px-7 lg:px-11 bg-[#C7EAFB94] font-semibold rounded-2xl text-center"
            >
              আমার বুস্ট নট ডেলিভারিং হয়ে আছে
            </label>
            <div className="p-11 px-5 md:px-7 lg:px-11 bg-[#C7EAFB94] font-semibold rounded-2xl flex justify-center items-center">
              আরো ব্রাউজ করুন <BsArrowRightCircle className="ml-3" />
            </div>
          </div>
          <MemberReports />
          <SupportFooter />
        </div>
      )}
      {userInfo.role === "admin" && (
        <div className="min-h-screen">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 p-4">
            {reports
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
                  </div>
                  <div className="text-end mt-2">
                    {r.solve !== "true" ? (
                      <>
                        <button
                          onClick={() => onSubmit(r._id, "true")}
                          className="btn text-white btn-primary"
                        >
                          Solved
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => onSubmit(r._id, "false")}
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
      <ReportModal
        problem={problem}
        setProblem={setProblem}
        setLoading={setLoading}
      />
    </div>
  );
};

export default Report;
