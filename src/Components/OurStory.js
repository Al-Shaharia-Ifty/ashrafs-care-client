import React from "react";
import member from "../Assets/new-icon/Artboard 2-8.png";
import branch from "../Assets/new-icon/Artboard 3-8.png";
import customer from "../Assets/new-icon/Artboard 4-8.png";
import investor from "../Assets/new-icon/Artboard 5-8.png";

const OurStory = () => {
  return (
    <div className="py-40 px-5">
      <div className="text-center">
        <h2 className="lg:text-4xl text-3xl font-semibold">
          A short story of our success
        </h2>
        <div className="flex justify-center">
          <p className="lg:w-3/4 w-ful p-5 font-semibold text-gray-500">
            We had an organization called Designbari, the organization was
            short-lived Gained nationwide reputation. However, Designbari's
            service was limited. Customer demand was high. So we are endlessly
            encouraging customers After getting love, we made a big change in
            our service and called it Rangchitra Let's start walking anew, today
            Rangchitra is your love institution.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-3/4 grid grid-cols-2 lg:grid-cols-4 text-center gap-10">
          <div>
            <img src={member} alt="" />
            <h2 className="text-lg font-semibold">08</h2>
            <p className="text-gray-500">Team Member</p>
          </div>
          <div>
            <img src={branch} alt="" />
            <h2 className="text-lg font-semibold">07</h2>
            <p className="text-gray-500">Branch</p>
          </div>
          <div>
            <img src={customer} alt="" />
            <h2 className="text-lg font-semibold">5080</h2>
            <p className="text-gray-500">Regular Customer</p>
          </div>
          <div>
            <img src={investor} alt="" />
            <h2 className="text-lg font-semibold">05</h2>
            <p className="text-gray-500">Investor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
