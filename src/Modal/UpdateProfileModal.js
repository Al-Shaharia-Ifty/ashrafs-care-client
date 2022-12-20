import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateProfileModal = ({ updateInfo, setUpdateInfo }) => {
  const { email } = updateInfo;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const address = data.address;
    const phoneNumber = data.phoneNumber;
    const companyName = data.companyName;

    const userInfo = {
      name,
      address,
      phoneNumber,
      companyName,
    };
    fetch(`https://ashrafs-servier.vercel.app/userInfo`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then(() => {
        setUpdateInfo(false);
        Swal.fire("Your profile update complite", "", "success");
      });
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
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Your Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.name.message}
                  </span>
                )}
              </label>
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
                type="number"
                placeholder="Phone Number"
                onWheel={(e) => e.target.blur()}
                className="input input-bordered"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                })}
              />
              <label className="label">
                {errors.phoneNumber?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.phoneNumber.message}
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
