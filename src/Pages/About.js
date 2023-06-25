import React from "react";
import pcBanner from "../Assets/website-banner/About.png";
import mobileBanner from "../Assets/website-banner/mobile-About.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="pt-20 bg-green-800"></div>
      <div className="overflow-x-hidden relative">
        <img
          className="w-full hidden md:flex mb-7"
          src={pcBanner}
          alt="Facebook Marketing Banner"
        />
        <img
          className="w-full md:hidden mb-7 -mt-14"
          src={mobileBanner}
          alt="Facebook Marketing Banner"
        />
      </div>

      <div className="flex justify-center gap-2 mb-4">
        <Link
          to={"/about"}
          className="btn bg-[#056739] hover:bg-[#056739] border-0 text-white"
        >
          About Us
        </Link>
        <Link
          to={"/privacy_policy"}
          className="btn bg-primary hover:bg-[#056739] border-0 text-white"
        >
          Privacy Policy
        </Link>
        <Link
          to={"/refund_policy"}
          className="btn bg-primary hover:bg-[#056739] border-0 text-white"
        >
          Refund Policy
        </Link>
      </div>

      <div className="my-10 mx-5 md:mx-10 2xl:mx-40 duration-500">
        <p className="text-justify mt-5 text-xl font-extralight text-gray-500">
          ashrafs.are is the trusted marketing agency in Bangladesh. Which was
          established in 2018 and has been conducting activities equally in all
          sectors of digital marketing including Facebook marketing, graphics
          design, video editing, web development.
        </p>
        <p className="text-justify mt-5 text-xl font-extralight text-gray-500">
          We have been working regularly for about 500 clients for the past 6
          years. Till now our client number is more than 5000. And 10 new
          clients are added daily.
        </p>
        <p className="text-justify mt-5 text-xl font-extralight text-gray-500">
          As a marketing agency we have a responsibility towards our clients,
          entrepreneurs and traders. Our customer's trust is at the core of
          everything we do. We have updated a comprehensive website in view of
          making available to our customers from which clients can create,
          support and report their orders themselves.
        </p>
        <p className="text-justify mt-5 text-xl font-extralight text-gray-500">
          The primary goal as a marketing agency is to help businesses increase
          their brand visibility, attract new customers and ultimately increase
          revenue. They achieve this by creating and implementing targeted
          marketing campaigns that align with the client's objectives and target
          audience. We are basically working in all sectors of Digital Marketing
          including Facebook Marketing, Graphics Design, Video Editing, Web
          Development, Email Marketing, SMS Marketing and Social Media
          Marketing.
        </p>
      </div>

      {/*  */}
      {/* <div className="my-10 mx-10 2xl:mx-40 duration-500">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold">
          About Us
        </h2>
        
      </div> */}
    </div>
  );
};

export default About;
