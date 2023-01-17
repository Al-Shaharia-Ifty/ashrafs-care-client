import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import pho from "../Assets/website-img/help.png";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Shared/Loading";

const GetSupport = () => {
  const [loading, setLoading] = useState(false);
  const { userInfo } = useContext(AuthContext);
  const { name, email, phoneNumber } = userInfo;
  const date = new Date().toLocaleString();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  if (loading) {
    return <Loading />;
  }
  const onSubmit = (data) => {
    setLoading(true);
    const id = data.orderID;
    const subject = data.subject;
    const details = data.details;
    const supportDetails = {
      date,
      name,
      email,
      phoneNumber,
      orderID: id,
      subject,
      details,
    };
    fetch(`https://ashrafs-servier.vercel.app/get-support`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(supportDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire(
          "We have received your message",
          "It will be resolved quickly and will be notified in your mail.",
          "success"
        );
        setLoading(false);
        reset();
      });
  };
  return (
    <div>
      <div className="hero min-h-screen md:px-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={pho}
            className="max-w-sm w-full rounded-lg lg:mr-20"
            alt=""
          />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-xl">
                আসসালামু আলাইকুম, আমরা আপনাকে কীভাবে হেল্প করতে পারি?
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Your Order Id</span>
                </label>
                <input
                  type="text"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Order Id"
                  className="input input-bordered"
                  {...register("orderID", {
                    required: {
                      value: true,
                      message: "Order Id is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.orderID?.type === "required" && (
                    <span className="text-red-500 label-text-alt">
                      {errors.orderID.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Your Subject</span>
                </label>
                <input
                  type="text"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Subject"
                  className="input input-bordered"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Subject is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.subject?.type === "required" && (
                    <span className="text-red-500 label-text-alt">
                      {errors.subject.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Details</span>
                </label>
                <textarea
                  placeholder="Details"
                  className="textarea textarea-bordered min-h-[110px] max-h-[180px]"
                  {...register("details", {
                    required: {
                      value: true,
                      message: "Details is required",
                    },
                  })}
                ></textarea>
                <label className="label">
                  {errors.details?.type === "required" && (
                    <span className="text-red-500 label-text-alt">
                      {errors.details.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSupport;
