import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Contexts/AuthProvider";

const EditOrderDetails = ({ editOrder, refetch, setLoading, setEditOrder }) => {
  const { dollarRate } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {
    _id,
    postLink,
    boostDay,
    dollar,
    orderType,
    gender,
    location,
    audience,
  } = editOrder;

  const onSubmit = (data) => {
    setLoading(true);
    const dollar = data.dollarAmount;
    const amount = dollarRate[0].dollarRate * dollar;
    const chargeAmount = parseInt(amount / 1000);
    let charge = chargeAmount * 20;
    if (chargeAmount === 0) {
      charge = 20;
    }
    const totalAmount = charge + amount;
    const boostDay = data.boostDay;
    const postLink = data.postLink;
    const location = data.location;
    const audience = data.audience;
    const gender = data.gender;
    const editInfo = {
      dollar,
      totalAmount,
      boostDay,
      postLink,
      due: totalAmount,
      location,
      audience,
      gender,
    };
    fetch(`https://ashrafs-servier.vercel.app/admin/edit-details/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(editInfo),
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        refetch();
        setEditOrder(false);
      });
  };
  return (
    <div>
      <input type="checkbox" id="edit-order-details" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="edit-order-details"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit Order Details</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            {orderType === "boost" && (
              <>
                <div className="form-control">
                  <div className="">
                    <label className="label">
                      <span className="label-text text-black">Gender</span>
                      <span className="label-text-alt text-black text-xl font-bold">
                        {gender}
                      </span>
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">
                      Detailed Targeting
                    </span>
                    <span className="label-text-alt text-black text-xl font-bold">
                      {audience}
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
                    <span className="label-text text-black">Location</span>
                    <span className="label-text-alt text-black text-xl font-bold">
                      {location}
                    </span>
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
                    <span className="label-text text-black">Dollar</span>
                    <span className="label-text-alt text-black text-xl font-bold">
                      {dollar} dollar
                    </span>
                  </label>
                  <input
                    type="number"
                    onWheel={(e) => e.target.blur()}
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Boost Day</span>
                    <span className="label-text-alt text-black text-xl font-bold">
                      {boostDay} Day
                    </span>
                  </label>
                  <input
                    type="number"
                    onWheel={(e) => e.target.blur()}
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
                <div className="form-control">
                  <h2 className="text-blue-500">{postLink}</h2>
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
              </>
            )}

            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Update now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditOrderDetails;
