import React from "react";
import { Link } from "react-router-dom";

const SupportFooter = () => {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#006737] to-[#6BA63F] py-16 flex justify-center text-white text-center">
        <div className="w-1/2">
          <h4>আপনার সমস্যা সমাধান হয়নি?</h4>
          <h2 className="text-4xl py-3">Find answers or contact support</h2>
          <Link to={"/dashboard/get-support"}>
            <button className="btn btn-accent">get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportFooter;
