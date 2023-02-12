import React from "react";
import member from "../Assets/icons/Artboard 2-8.png";
import branch from "../Assets/icons/Artboard 3-8.png";
import customer from "../Assets/icons/Artboard 4-8.png";
import investor from "../Assets/icons/Artboard 5-8.png";

const OurStory = () => {
  return (
    <div className="py-40 px-5">
      <div className="text-center">
        <h2 className="lg:text-4xl text-3xl font-semibold">
          A short story of our success
        </h2>
        <div className="flex justify-center">
          <p className="lg:w-3/4 w-ful p-5 font-semibold text-gray-500">
            From 2018 to 2022 our service was limited, the company was
            short-lived and gained a nationwide reputation. Customer demand was
            high. And our plans were far-reaching. So we are constantly
            encouraging customers. After receiving love, we have made a big
            change in our service and it is now the largest marketing platform
            in Bangladesh. Let's start walking anew, today ashrafs care is your
            organization of love.
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
