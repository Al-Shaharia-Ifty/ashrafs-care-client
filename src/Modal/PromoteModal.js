import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const PromoteModal = ({ setPromote }) => {
  return (
    <div>
      <input type="checkbox" id="promote-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="promote-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            What type of promote do you want?
          </h3>
          <div className=""></div>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default PromoteModal;
