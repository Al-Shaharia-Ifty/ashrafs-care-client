import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthProvider";

const BoostModal = ({ setBoost }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { userInfo } = useContext(AuthContext);

  const onSubmit = (data) => {
    const pageName = data.pageName;
    const dollarAmount = data.dollarAmount;
    const boostDay = data.boostDay;
    const gender = data.gender;
    const minAge = data.minAge;
    const maxAge = data.maxAge;
    const location = data.location;
    const audience = data.audience;
    const postLink = data.postLink;
    const phoneNumber = data.phone;

    const boostInfo = {
      pageName,
      dollarAmount,
      boostDay,
      gender,
      minAge,
      maxAge,
      location,
      audience,
      postLink,
      name: userInfo.name,
      email: userInfo.email,
      phoneNumber,
    };

    fetch("http://localhost:5000/facebookBoost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(boostInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setBoost(false);
        Swal.fire("Your Order is Successful", "", "success");
      });
  };
  return (
    <div>
      <input type="checkbox" id="boost-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="boost-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">FaceBook Boost Information</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">
                  Your Page Name (Optional)
                </span>
              </label>
              <input
                type="text"
                placeholder="Page Name"
                className="input input-bordered"
                {...register("pageName")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">
                  Dollar You want to boost
                </span>
              </label>
              <div className="flex items-center">
                <div className="w-full">
                  <input
                    type="number"
                    placeholder="Dollar Amount"
                    className="input input-bordered w-full"
                    {...register("dollarAmount", {
                      required: {
                        value: true,
                        message: "Dollar is required",
                      },
                      min: {
                        value: 5,
                        message: "Minimum 5 dollar boost",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.dollarAmount?.type === "required" && (
                      <span className="text-red-500 label-text-alt">
                        {errors.dollarAmount.message}
                      </span>
                    )}
                    {errors.dollarAmount?.type === "min" && (
                      <span className="text-red-500 label-text-alt">
                        {errors.dollarAmount.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">
                  How many day you want to boost
                </span>
              </label>
              <input
                type="number"
                placeholder="Per day 2 Dollars minimum"
                className="input input-bordered"
                {...register("boostDay", {
                  required: {
                    value: true,
                    message: "Day is required",
                  },
                  min: {
                    value: 1,
                    message: "Minimum 1 day",
                  },
                })}
              />
              <label className="label">
                {errors.boostDay?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.boostDay.message}
                  </span>
                )}
                {errors.boostDay?.type === "min" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.boostDay.message}
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your post link</span>
              </label>
              <input
                type="url"
                placeholder="Your Link"
                className="input input-bordered"
                {...register("postLink", {
                  required: {
                    value: true,
                    message: "Post link is required",
                  },
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Your link is not valid",
                  },
                })}
              />
              <label className="label">
                {errors.postLink?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.postLink.message}
                  </span>
                )}
                {errors.postLink?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.postLink.message}
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
                {...register("phone", {
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
                {errors.phone?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.phone.message}
                  </span>
                )}
                {errors.phone?.type === "minLength" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Boost</button>
            </div>
          </form>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BoostModal;
