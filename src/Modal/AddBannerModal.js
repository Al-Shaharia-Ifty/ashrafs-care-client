import React from "react";
import { useForm } from "react-hook-form";

const AddBannerModal = ({ setAddBanner, setLoading }) => {
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
            fetch(`https://ashrafs-servier.vercel.app/admin/post-banner`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify({ img }),
            })
              .then((res) => res.json())
              .then((data) => {
                setLoading(false);
                setAddBanner(false);
              });
          }
        });
    }
  };
  return (
    <div>
      <input type="checkbox" id="add-banner-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add-banner-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Your Banner</h3>
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
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Ad Banner</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBannerModal;
