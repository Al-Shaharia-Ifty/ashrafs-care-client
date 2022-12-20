import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthProvider";

const TargetAudience = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const { userInfo } = useContext(AuthContext);
  const date = new Date().toLocaleString();

  const onSubmit = (data) => {
    const like = data.like;
    const pageName = data.pageName;
    const postLink = data.pageLink;
    const phoneNumber = data.number;
    const gender = data.gender;
    const minAge = data.minAge;
    const maxAge = data.maxAge;
    const location = data.location;
    const audience = data.audience;

    const basic = {
      like,
      pageName,
      postLink,
      phoneNumber,
      gender,
      minAge,
      maxAge,
      location,
      audience,
      name: userInfo.name,
      email: userInfo.email,
      promote: "targeting",
      orderType: "promote",
      date: date,
      status: "Pending",
    };
    fetch("https://ashrafs-servier.vercel.app/promote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(basic),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Your Promote Inreview", "", "success");
        navigate("/dashboard");
      });
  };
  return (
    <div>
      <div className="flex min-h-screen justify-center items-center bg-accent">
        <div className="card  max-w-md w-full bg-base-100 shadow-xl">
          <div className="card-body border-2 rounded-lg">
            <h2 className="text-center text-3xl">Targeting</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-sm">
                <select
                  className="select select-bordered w-full"
                  {...register("like")}
                >
                  <option value={"4080"}>5k Like (4080Tk)</option>
                  <option value={"7752"}>10k Like (7752Tk) 5% off</option>
                  <option value={"15015"}>20k Like (15015Tk) 10% off</option>
                  <option value={"35200"}>50k Like (35200Tk) 15% off</option>
                  <option value={"65100"}>100k Like (65100Tk) 20% off</option>
                </select>
              </div>
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text text-black">Your Page Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Page name"
                  className="input input-bordered w-full max-w-sm"
                  {...register("pageName", {
                    required: {
                      value: true,
                      message: "Page name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.pageName?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.pageName.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text text-black">Your Page Link</span>
                </label>
                <input
                  type="url"
                  placeholder="Page Link"
                  className="input input-bordered w-full max-w-sm"
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
                    <span className="label-text-alt text-red-500">
                      {errors.pageLink.message}
                    </span>
                  )}
                  {errors.pageLink?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.pageLink.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control flex-row ">
                <div className=" w-1/3 mr-2">
                  <label className="label flex justify-center">
                    <span className="label-text text-black">Gender</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    {...register("gender")}
                  >
                    <option>All</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className=" w-2/3 flex items-center">
                  <div className="w-1/2">
                    <label className="label flex justify-center">
                      <span className="label-text text-black">Minimum Age</span>
                    </label>
                    <input
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="18"
                      className="input input-bordered w-full"
                      {...register("minAge", {
                        min: {
                          value: 18,
                          message: "Minimum Age 18",
                        },
                        max: {
                          value: 60,
                          message: "Maximum age 60",
                        },
                        required: {
                          value: true,
                          message: "Age is required",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.minAge?.type === "required" && (
                        <span className="text-red-500 label-text-alt">
                          {errors.minAge.message}
                        </span>
                      )}
                      {errors.minAge?.type === "min" && (
                        <span className="text-red-500 label-text-alt">
                          {errors.minAge.message}
                        </span>
                      )}
                      {errors.minAge?.type === "max" && (
                        <span className="text-red-500 label-text-alt">
                          {errors.minAge.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <p className="mx-1">To</p>
                  <div className="w-1/2">
                    <label className="label flex justify-center">
                      <span className="label-text text-black">Max Age</span>
                    </label>
                    <input
                      type="number"
                      onWheel={(e) => e.target.blur()}
                      placeholder="65"
                      className="input input-bordered w-full"
                      {...register("maxAge", {
                        min: {
                          value: 23,
                          message: "Minimum Age 23",
                        },
                        max: {
                          value: 65,
                          message: "Maximum age 65",
                        },
                        required: {
                          value: true,
                          message: "Age is required",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.maxAge?.type === "required" && (
                        <span className="text-red-500 label-text-alt">
                          {errors.maxAge.message}
                        </span>
                      )}
                      {errors.maxAge?.type === "min" && (
                        <span className="text-red-500 label-text-alt">
                          {errors.maxAge.message}
                        </span>
                      )}
                      {errors.maxAge?.type === "max" && (
                        <span className="text-red-500 label-text-alt">
                          {errors.maxAge.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  className="input input-bordered"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "Location is required",
                    },
                  })}
                />{" "}
                <label className="label">
                  {errors.location?.type === "required" && (
                    <span className="text-red-500 label-text-alt">
                      {errors.location.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">
                    Detailed Targeting
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Audience"
                  className="input input-bordered"
                  {...register("audience", {
                    required: {
                      value: true,
                      message: "Audience is required",
                    },
                  })}
                />{" "}
                <label className="label">
                  {errors.audience?.type === "required" && (
                    <span className="text-red-500 label-text-alt">
                      {errors.audience.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text text-black">
                    Your Phone Number
                  </span>
                </label>
                <input
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-sm"
                  {...register("number", {
                    required: {
                      value: true,
                      message: "Phone Number is required",
                    },
                    minLength: {
                      value: 10,
                      message: "Please Add valid Number",
                    },
                  })}
                />
                <label className="label">
                  {errors.number?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.number.message}
                    </span>
                  )}
                  {errors.number?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.number.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn btn-primary bg-gradient-to-r from-[#6CA83F] via-[#4C8F3E] to-[#166534] text-white w-full max-w-sm"
                value="Promote Now"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
