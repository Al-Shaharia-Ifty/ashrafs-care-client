import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthProvider";

const PageRecoverModal = ({ setPageRecover, pageRecover }) => {
  const { userInfo } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const fullDate = new Date().toString();
  const date = fullDate.split("GMT")[0];

  const onSubmit = (data) => {
    const pageName = data.pageName;
    const pageLink = data.pageLink;
    const phoneNumber = data.phoneNumber;

    const pageInfo = {
      email: userInfo.email,
      orderType: "page recovery",
      pageName,
      pageLink,
      phoneNumber,
      date: date,
      amount: "1500Tk",
      status: "pending",
    };
    fetch("https://ashrafs-servier.vercel.app/recover", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(pageInfo),
    })
      .then((res) => res.json())
      .then(() => {
        setPageRecover(false);
        Swal.fire("Done", "Your Order is Successful", "success");
      });
  };
  return (
    <div>
      <input type="checkbox" id="pageRecover-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="pageRecover-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Fill up the Below Information</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Page Name</span>
              </label>
              <input
                type="text"
                placeholder="Page Name"
                className="input input-bordered"
                {...register("pageName", {
                  required: {
                    value: true,
                    message: "Page name is required",
                  },
                })}
              />
              <label className="label">
                {errors.pageName?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.pageName.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Page Link</span>
              </label>
              <input
                type="text"
                placeholder="Page Link"
                className="input input-bordered"
                {...register("pageLink", {
                  required: {
                    value: true,
                    message: "Page Link is required",
                  },
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Your link is not valid",
                  },
                })}
              />
              <label className="label">
                {errors.pageLink?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.pageLink.message}
                  </span>
                )}
                {errors.pageLink?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.pageLink.message}
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
                className="input input-bordered"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                  minLength: {
                    value: 10,
                    message: "Your number is not valid",
                  },
                })}
              />
              <label className="label">
                {errors.phoneNumber?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.phoneNumber.message}
                  </span>
                )}
                {errors.phoneNumber?.type === "minLength" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Order now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageRecoverModal;
