import React from "react";
import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import SupportFooter from "../Components/SupportFooter";
import ReportModal from "../Modal/ReportModal";
import Loading from "../Shared/Loading";

const Report = () => {
  const [problem, setProblem] = useState(false);
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="min-h-screen bg-white">
        <div className="flex justify-center items-center py-16 px-5 bg-primary text-white">
          <div className="md:w-1/2">
            <h2 className="lg:text-6xl md:text-4xl text-3xl text-center">
              Report a problem
            </h2>
            <p className="text-center text-xs md:text-md lg:text-xl mt-3">
              Select the options below for specific questions or issues. We will
              be happy to solve your problem.
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
        <SupportFooter />
      </div>
      <ReportModal
        problem={problem}
        setProblem={setProblem}
        setLoading={setLoading}
      />
    </div>
  );
};

export default Report;
