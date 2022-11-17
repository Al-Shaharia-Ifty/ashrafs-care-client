import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import graphicImg from "../Assets/course image/JCWL-GW01-GRAPHICS-WORK-4.png";
import fbImg from "../Assets/course image/faceBook markting.png";
import adMarkImg from "../Assets/course image/advanced markting.jpg";
import appDevImg from "../Assets/course image/app development.png";
import socialMediaImg from "../Assets/course image/download.png";
import insMktImg from "../Assets/course image/instagram-marketing.png";
import seoImg from "../Assets/course image/Seo markting.png";
import videoImg from "../Assets/course image/video edit.png";

const Header = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1660 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 1660, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 pt-20 pb-10">
        <h2 className="text-white text-3xl text-center font-bold mt-10">
          All the assets you need, in one place
        </h2>
        <h4 className="text-white text-center text-xl mt-5">
          Find and download the best high-quality photos, designs, and mockups
        </h4>
        <form className="mt-5 mx-5 flex justify-center">
          <input
            type="text"
            name=""
            className="w-full lg:w-3/5 rounded-l-full input input-bordered"
          />
          <button className="bg-white rounded-r-full text-2xl px-3 text-black">
            <AiOutlineSearch />
          </button>
        </form>
        <div>
          <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            responsive={responsive}
            className="mx-10 mt-16 text-white text-center"
          >
            <div>
              <div className="flex justify-center">
                <img
                  className="rounded-full w-3/5 border-white p-1 border-[3px]"
                  src={graphicImg}
                  alt=""
                />
              </div>
              <p className="text-center mt-3 text-sm">Graphic Design</p>
            </div>
            <div>
              <div className="flex justify-center">
                <img
                  className="rounded-full w-3/5 border-white p-1 border-[3px]"
                  src={fbImg}
                  alt=""
                />
              </div>
              <p className="text-center mt-3 text-sm">FaceBook Marketing</p>
            </div>
            <div>
              <div className="flex justify-center">
                <img
                  className="rounded-full w-3/5 border-white p-1 border-[3px]"
                  src={adMarkImg}
                  alt=""
                />
              </div>
              <p className="text-center mt-3 text-sm">Advance Marketing</p>
            </div>
            <div>
              <div className="flex justify-center">
                <img
                  className="rounded-full w-3/5 border-white p-1 border-[3px]"
                  src={appDevImg}
                  alt=""
                />
              </div>
              <p className="text-center mt-3 text-sm">App Development</p>
            </div>
            <div>
              <div className="flex justify-center">
                <img
                  className="rounded-full w-3/5 border-white p-1 border-[3px]"
                  src={socialMediaImg}
                  alt=""
                />
              </div>
              <p className="text-center mt-3 text-sm">Social Media Marketing</p>
            </div>
            <div>
              <div className="flex justify-center">
                <img
                  className="rounded-full w-3/5 border-white p-1 border-[3px]"
                  src={insMktImg}
                  alt=""
                />
              </div>
              <p className="text-center mt-3 text-sm">Instagram Marketing</p>
            </div>
            <div>
              <div className="flex justify-center">
                <img
                  className="rounded-full w-3/5 border-white p-1 border-[3px]"
                  src={seoImg}
                  alt=""
                />
              </div>
              <p className="text-center mt-3 text-sm">Seo Marketing</p>
            </div>
            <div>
              <div className="flex justify-center">
                <img
                  className="rounded-full w-3/5 border-white p-1 border-[3px]"
                  src={videoImg}
                  alt=""
                />
              </div>
              <p className="text-center mt-3 text-sm">
                Professional Video Editing
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Header;
