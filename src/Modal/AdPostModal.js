import React from "react";
import { Link } from "react-router-dom";
import face from "../Assets/icons/Artboard 15.png";
import gra from "../Assets/icons/Artboard 14.png";
import web from "../Assets/icons/Artboard 29.png";
import sms from "../Assets/icons/sms.png";
import vid from "../Assets/icons/Artboard 6.png";
import what from "../Assets/icons/Artboard 16.png";

const AdPostModal = ({ setAdPost }) => {
  return (
    <div>
      <input type="checkbox" id="ad-post-modal" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="ad-post-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Post.</h3>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-5">
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                className="flex justify-start md:justify-center items-center ml-3"
                to={`/dashboard/admin/add-content`}
              >
                <img className="w-10" src={face} alt="" />
                <h2 className="text-xl mx-2">FaceBook Marketing</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                to="admin/add-graphic"
                className="flex justify-start md:justify-center items-center ml-3"
              >
                <img className="w-10" src={gra} alt="" />
                <h2 className="text-xl mx-2">Graphics Design</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                to={`/dashboard/admin/add-webDesign`}
                className="flex justify-start md:justify-center items-center ml-3"
              >
                <img className="w-10" src={web} alt="" />
                <h2 className="text-xl mx-2">Website Development</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                to={`/dashboard/admin/add-videoEdit`}
                className="flex justify-start md:justify-center items-center ml-3"
              >
                <img className="w-10" src={vid} alt="" />
                <h2 className="text-xl mx-2">Video Editing or Recording</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                to={`/dashboard/admin/add-whatsApp`}
                className="flex justify-start md:justify-center items-center ml-3"
              >
                <img className="w-10" src={what} alt="" />
                <h2 className="text-xl mx-2">WhatsApp Marketing </h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link
                to={`/dashboard/admin/add-smsMarketing`}
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

export default AdPostModal;
