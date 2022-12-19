import React from "react";
import { useForm } from "react-hook-form";

const UpdateProfileModal = ({ updateInfo, setUpdateInfo }) => {
  const { name, email, address, phoneNumber, companyName } = updateInfo;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log("hello");
  };

  return (
    <div>
      <input type="checkbox" id="updateProfileModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="updateProfileModal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Update your profile!</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Name</span>
              </label>
              <input className="input input-bordered" disabled value={name} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Company Name</span>
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="input input-bordered"
                {...register("companyName", {
                  required: {
                    value: true,
                    message: "Company Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.companyName?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.companyName.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered"
                {...register("companyName", {
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                })}
              />
              <label className="label">
                {errors.companyName?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.companyName.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={email}
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">
                  Your Office Address
                </span>
              </label>
              <input
                type="text"
                placeholder="Office Address"
                className="input input-bordered"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Office Address is required",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.address.message}
                  </span>
                )}
              </label>
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

export default UpdateProfileModal;
