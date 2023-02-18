import React from "react";
import { useForm } from "react-hook-form";

const AddUpdateModal = ({ setAddUpdate, setLoading }) => {
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
              heading: data.heading,
              details: data.details,
              details2: data.details2,
              details3: data.details3,
              details4: data.details4,
              details5: data.details5,
            };

            fetch(`https://ashrafs-servier.vercel.app/admin/add-update`, {
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
              });
          }
        });
    }
  };
  return (
    <div>
      <input type="checkbox" id="add-update-modal" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="add-update-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Update!</h3>
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
                <span className="label-text text-black">Your Heading Name</span>
              </label>
              <input
                type="text"
                placeholder="Heading Name"
                className="input input-bordered"
                {...register("heading", {
                  required: {
                    value: true,
                    message: "Heading Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.heading?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.heading.message}
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
                className="textarea textarea-bordered min-h-[110px] max-h-[180px]"
                {...register("details", {
                  required: {
                    value: true,
                    message: "Description is required",
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Description 2</span>
              </label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered min-h-[110px] max-h-[180px]"
                {...register("details2")}
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Description 3</span>
              </label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered min-h-[110px] max-h-[180px]"
                {...register("details3")}
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Description 4</span>
              </label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered min-h-[110px] max-h-[180px]"
                {...register("details4")}
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Description 5</span>
              </label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered min-h-[110px] max-h-[180px]"
                {...register("details5")}
              ></textarea>
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

export default AddUpdateModal;
