import React from "react";
import { Link } from "react-router-dom";
import face from "../Assets/icons/Artboard 15.png";
import gra from "../Assets/icons/Artboard 14.png";

const OrderModal = () => {
  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
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
              <Link className="flex justify-start md:justify-center items-center ml-3">
                <img className="w-10" src={gra} alt="" />
                <h2 className="text-xl mx-2">Graphics Design</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link className="flex justify-start md:justify-center items-center ml-3">
                <img className="w-10" src={gra} alt="" />
                <h2 className="text-xl mx-2">Website Development</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link className="flex justify-start md:justify-center items-center ml-3">
                <img className="w-10" src={gra} alt="" />
                <h2 className="text-xl mx-2">Video Editing or Recording</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link className="flex justify-start md:justify-center items-center ml-3">
                <img className="w-10" src={gra} alt="" />
                <h2 className="text-xl mx-2">WhatsApp Marketing </h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link className="flex justify-start md:justify-center items-center ml-3">
                <img className="w-10" src={gra} alt="" />
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
