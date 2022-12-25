import React from "react";
import { useForm } from "react-hook-form";

const GraphicsOrderModal = ({ order, setOrder }) => {
  const { name, details } = order;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <input type="checkbox" id="graphic-order" className="modal-toggle" />
      <div className="modal glass z-10">
        <div className="modal-box relative">
          <label
            htmlFor="graphic-order"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Your {name} information</h3>
          <p className="py-4">{details}</p>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Phone Number</span>
              </label>
              <input
                type="number"
                onWheel={(e) => e.target.blur()}
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Description</span>
              </label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered min-h-[150px] max-h-[200px]"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                })}
              ></textarea>
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GraphicsOrderModal;
