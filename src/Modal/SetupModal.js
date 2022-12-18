import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthProvider";

const SetupModal = ({ setupModal, setSetupModal }) => {
  const { type, amount } = setupModal;
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
    const businessAddress = data.businessAddress;
    const businessCategory = data.businessCategory;
    const BusinessEmail = data.email;
    const pageLink = data.pageLink;
    const phoneNumber = data.phoneNumber;
    const webLink = data.webLink;
    const whatsapp = data.whatsapp;

    const pageInfo = {
      type: type,
      amount: amount,
      pageName,
      businessAddress,
      businessCategory,
      BusinessEmail,
      pageLink,
      phoneNumber,
      webLink,
      whatsapp,
      name: userInfo.name,
      email: userInfo.email,
      orderType: "page setup",
      date: date,
      status: "Pending",
    };
    fetch("https://ashrafs-servier.vercel.app/pageSetup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(pageInfo),
    })
      .then((res) => res.json())
      .then(() => {
        setSetupModal(false);
        Swal.fire("Done", "Your Order is Successful", "success");
      });
  };

  return (
    <div>
      <input type="checkbox" id="setup-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="setup-modal"
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
                <span className="label-text text-black">
                  Your Business Address
                </span>
              </label>
              <input
                type="text"
                placeholder="Business Address"
                className="input input-bordered"
                {...register("businessAddress", {
                  required: {
                    value: true,
                    message: "Business Address is required",
                  },
                })}
              />
              <label className="label">
                {errors.businessAddress?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.businessAddress.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">
                  Your Business Category (optional)
                </span>
              </label>
              <input
                type="text"
                placeholder="Business Category"
                className="input input-bordered"
                {...register("businessCategory")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
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
                onWheel={(e) => e.target.blur()}
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">
                  Your Website Link (optional)
                </span>
              </label>
              <input
                type="url"
                placeholder="Website Link"
                className="input input-bordered"
                {...register("webLink", {
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Your link is not valid",
                  },
                })}
              />
              <label className="label">
                {errors.webLink?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.webLink.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">
                  Your Whatsapp Number (optional)
                </span>
              </label>
              <input
                type="number"
                onWheel={(e) => e.target.blur()}
                placeholder="Whatsapp Number"
                className="input input-bordered"
                {...register("whatsapp", {
                  minLength: {
                    value: 10,
                    message: "Your number is not valid",
                  },
                })}
              />
              <label className="label">
                {errors.whatsapp?.type === "minLength" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.whatsapp.message}
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

export default SetupModal;
