import React from "react";
import PrimaryButton from "./PrimaryButton";
import community from "../Assets/website-img/community.png";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div>
      <div className="mt-10 mx-10 2xl:mx-36 shadow-xl rounded-2xl bg-gray-100 flex items-center">
        <div className="p-10 md:w-3/5 w-full text-center">
          <h2 className="md:text-2xl text-xl">
            Join <span className="font-bold text-[#6DA940]">ashrafs care</span>{" "}
            community.
          </h2>
          <p className="my-5 text-justify">
            Do marketing with planning. If you plan and do marketing, you will
            succeed in business quickly. Your marketing platform is huge on all
            social media including Facebook, Instagram, and YouTube. We have
            positive reviews from 2000+ members. We are with you to boost your
            confidence. Our goal is to serve you honestly through long
            experience and hard work.
          </p>
          <div className="text-center">
            <Link to={"/dashboard"}>
              <PrimaryButton>Join Now</PrimaryButton>
            </Link>
          </div>
        </div>
        <img className="w-2/4 hidden md:flex" src={community} alt="" />
      </div>
    </div>
  );
};

export default Community;
