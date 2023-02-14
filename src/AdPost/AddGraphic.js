import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Shared/Loading";

const AddGraphic = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (loading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    setLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageStorageKey}`;
    if (image) {
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            const img = result.data.url;
            const postInfo = {
              img,
              designName: data.designName,
              amount: data.amount,
            };

            fetch(`http://localhost:5000/admin/post-design`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(postInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  setLoading(false);
                  Swal.fire("Add Order Successful", "", "success");
                  navigate("/dashboard");
                } else {
                  Swal.fire("Failed to Add Order", "", "error");
                }
              });
          }
        });
    }
  };
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Design Name</span>
              </label>
              <input
                type="text"
                placeholder="Design Name"
                className="input input-bordered"
                {...register("designName", {
                  required: {
                    value: true,
                    message: "Design Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.designName?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.designName.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Image</span>
              </label>
              <input
                type="file"
                className="input input-bordered"
                accept="image/gif, image/jpeg, image/png"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Your Image is required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Design Price</span>
              </label>
              <input
                type="number"
                onWheel={(e) => e.target.blur()}
                placeholder="Design Price"
                className="input input-bordered"
                {...register("amount", {
                  required: {
                    value: true,
                    message: "Design Price is required",
                  },
                })}
              />
              <label className="label">
                {errors.amount?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.amount.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Ad Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGraphic;
