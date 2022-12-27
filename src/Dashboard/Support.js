import React from "react";
import QNA from "../Components/QNA";
import SupportFooter from "../Components/SupportFooter";

const Support = () => {
  return (
    <div>
      <div className="min-h-screen bg-white">
        <div className="flex justify-center items-center py-16 px-5 bg-primary text-white">
          <div className="md:w-1/2">
            <h2 className="lg:text-6xl md:text-4xl text-3xl text-center">
              Contact Support
            </h2>
            <p className="text-center text-xs md:text-md lg:text-xl mt-3">
              Select the options below for specific questions or issues. We will
              be happy to solve your problem.
            </p>
          </div>
        </div>
        <QNA />

        <SupportFooter />
      </div>
    </div>
  );
};

export default Support;
