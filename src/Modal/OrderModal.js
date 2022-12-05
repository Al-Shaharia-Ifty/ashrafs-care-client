import React from "react";
import { Link } from "react-router-dom";

const OrderModal = () => {
  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Select Our Order.</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-5 text-center">
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link to={`faceBook-instagram/marketing`}>
                <h2 className="text-xl">FaceBook or Instagram</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link>
                <h2 className="text-xl">Graphics Design</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link>
                <h2 className="text-xl">Website Development</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link>
                <h2 className="text-xl t">Video Editing or Recording</h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link>
                <h2 className="text-xl">WhatsApp Marketing </h2>
              </Link>
            </div>
            <div className="bg-[#166534] text-white p-3 rounded-md">
              <Link>
                <h2 className="text-xl">SMS Marketing</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
