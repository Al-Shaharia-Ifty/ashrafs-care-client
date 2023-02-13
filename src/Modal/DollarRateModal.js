import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Contexts/AuthProvider";

const DollarRateModal = ({ setLoading }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { dollarRate } = useContext(AuthContext);

  const onSubmit = (data) => {
    setLoading(true);
    const rate = data.dollarRate;
    const id = dollarRate[0]._id;
    const info = {
      rate: parseInt(rate),
      id: id,
    };
    fetch("https://ashrafs-servier.vercel.app/admin/updateDollarRate", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        fetch(`https://ashrafs-servier.vercel.app/admin/add-notification`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ p: `Now DollarRate is ${rate} Taka` }),
        });
      });
  };
  return (
    <div>
      <input type="checkbox" id="dollar-rate-modal" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="dollar-rate-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Dollar Rate Update</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <div className="flex items-center">
              <div className="w-full">
                <input
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Dollar Rate"
                  className="input input-bordered w-full"
                  {...register("dollarRate", {
                    required: {
                      value: true,
                      message: "Dollar Rate is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.dollarRate?.type === "required" && (
                    <span className="text-red-500 label-text-alt">
                      {errors.dollarRate.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DollarRateModal;
