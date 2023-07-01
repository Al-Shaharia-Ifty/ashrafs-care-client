import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddRating = ({ setLoading }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
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
              userName: data.userName,
              message: data.message,
            };

            fetch(`https://ashrafs-servier.vercel.app/admin/add-ratting`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(postInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                setLoading(false);
                Swal.fire("Add ratting are done", "", "success");
              });
          }
        });
    }
  };
  return (
    <div>
      <input type="checkbox" id="add-rating-modal" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="add-rating-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Rating!</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                className="input input-bordered"
                {...register("userName", {
                  required: {
                    value: true,
                    message: "User Name Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.userName?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.userName.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Message</span>
              </label>
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered min-h-[110px] max-h-[180px]"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Message is required",
                  },
                })}
              ></textarea>
              <label className="label">
                {errors.message?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.message.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Add Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRating;
