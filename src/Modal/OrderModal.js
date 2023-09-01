import React from "react";
import { Link } from "react-router-dom";
import face from "../Assets/icons/Artboard 15.png";
import gra from "../Assets/icons/Artboard 14.png";
import web from "../Assets/icons/Artboard 29.png";
import vid from "../Assets/icons/Artboard 6.png";
import what from "../Assets/icons/Artboard 16.png";
import sms from "../Assets/icons/sms.png";

const OrderModal = () => {
  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Select Our Order.</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                className="flex justify-start md:justify-center items-center ml-3"
                to={`/dashboard/faceBook-instagram/marketing`}
              >
                <img className="w-10" src={face} alt="" />
                <h2 className="text-xl mx-2">FaceBook Marketing</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                to={`/dashboard/graphics-design`}
                className="flex justify-start md:justify-center items-center ml-3"
              >
                <img className="w-10" src={gra} alt="" />
                <h2 className="text-xl mx-2">Graphics Design</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                to={`/dashboard/web-design`}
                className="flex justify-start md:justify-center items-center ml-3"
              >
                <img className="w-10" src={web} alt="" />
                <h2 className="text-xl mx-2">Website Development</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                to={`/dashboard/video-editing`}
                className="flex justify-start md:justify-center items-center ml-3"
              >
                <img className="w-10" src={vid} alt="" />
                <h2 className="text-xl mx-2">Video Editing or Recording</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                to={`/dashboard/whatsapp-marketing`}
                className="flex justify-start md:justify-center items-center ml-3"
              >
                <img className="w-10" src={what} alt="" />
                <h2 className="text-xl mx-2">WhatsApp Marketing </h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                to={`/dashboard/sms-marketing`}
                className="flex justify-start md:justify-center items-center ml-3"
              >
                <img className="w-10" src={sms} alt="" />
                <h2 className="text-xl mx-2">SMS Marketing</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
