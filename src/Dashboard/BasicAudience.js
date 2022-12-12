import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthProvider";
const BasicAudience = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const { userInfo } = useContext(AuthContext);
  const fullDate = new Date().toString();
  const date = fullDate.split("GMT")[0];

  const onSubmit = (data) => {
    const like = data.like;
    const pageName = data.pageName;
    const postLink = data.pageLink;
    const phoneNumber = data.number;

    const basic = {
      like,
      pageName,
      postLink,
      phoneNumber,
      name: userInfo.name,
      email: userInfo.email,
      promote: "basic",
      orderType: "promote",
      date: date,
      status: "pending",
    };
    fetch("http://localhost:5000/promote", {
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
        <div className="card  max-w-sm w-full bg-base-100 shadow-xl">
          <div className="card-body border-2 rounded-lg">
            <h2 className="text-center text-3xl">Basic</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-sm">
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("like")}
                >
                  <option>5k Like (3060Tk)</option>
                  <option>10k Like (5814Tk) 5% off</option>
                  <option>20k Like (11016Tk) 10% off</option>
                  <option>50k Like (26928Tk) 15% off</option>
                  <option>100k Like (52020Tk) 20% off</option>
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
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text text-black">
                    Your Phone Number
                  </span>
                </label>
                <input
                  type="number"
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

              {/*  */}
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

export default BasicAudience;
