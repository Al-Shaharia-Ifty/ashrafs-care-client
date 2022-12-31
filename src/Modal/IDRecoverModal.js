import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthProvider";

const IDRecoverModal = ({ idRecover, setIdRecover, setLoading }) => {
  const { userInfo } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const date = new Date().toLocaleString();

  const onSubmit = (data) => {
    setLoading(true);
    const idName = data.IdName;
    const idLink = data.idLink;
    const number = data.phoneNumber;

    const pageInfo = {
      email: userInfo.email,
      orderType: "ID recovery",
      idName,
      idLink,
      number,
      date: date,
      amount: "1500",
      status: "Pending",
      payment: "Due",
    };
    const balanceInfo = {
      balance: 1500 * -1,
    };
    fetch("https://ashrafs-servier.vercel.app/balance", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(balanceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
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
            setLoading(false);
            setIdRecover(false);
            Swal.fire("Done", "Your Order is Successful", "success");
          });
      });
  };
  return (
    <div>
      <input type="checkbox" id="idRecover-modal" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="idRecover-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Fill up the Below Information</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Id Name</span>
              </label>
              <input
                type="text"
                placeholder="Id Name"
                className="input input-bordered"
                {...register("IdName", {
                  required: {
                    value: true,
                    message: "Id Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.IdName?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.IdName.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your ID Link</span>
              </label>
              <input
                type="text"
                placeholder="ID Link"
                className="input input-bordered"
                {...register("idLink", {
                  required: {
                    value: true,
                    message: "ID Link is required",
                  },
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Your link is not valid",
                  },
                })}
              />
              <label className="label">
                {errors.idLink?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.idLink.message}
                  </span>
                )}
                {errors.idLink?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.idLink.message}
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
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Order now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IDRecoverModal;
