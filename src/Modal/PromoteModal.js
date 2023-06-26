import React from "react";
import { Link } from "react-router-dom";

const PromoteModal = ({ setPromote }) => {
  return (
    <div>
      <input type="checkbox" id="promote-modal" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="promote-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            What type of promote do you want?
          </h3>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <Link
              to={"/dashboard/promote/basic-audience"}
              onClick={() => setPromote(false)}
            >
              <div className="bg-[#166534] text-white text-2xl text-center p-5 rounded-lg">
                Basic
              </div>
            </Link>
            <Link
              to={"/dashboard/promote/target-audience"}
              onClick={() => setPromote(false)}
            >
              <div className="bg-[#166534] text-white text-2xl text-center p-5 rounded-lg">
                Targeting
              </div>
            </Link>
          </div>
          <p className="mt-5 text-xl">
            টার্গেটিং মানে নির্দিষ্ট এরিয়া, বয়স, জেন্ডার এবং স্পেসিফিক ডিটেইল
            টার্গেটিং ইত্যাদি সিলেক্ট করে প্রোমোট করা। আর বেসিক মানে যে কেউ
            আপনার পেজে লাইক করবে।
          </p>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default PromoteModal;
