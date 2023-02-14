import React from "react";
import { useForm } from "react-hook-form";

const AddNoteModal = ({ setAddNote, setLoading }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const info = {
      p: data.description,
    };
    fetch(`https://ashrafs-servier.vercel.app/admin/add-notification`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setAddNote(false);
      });
  };
  return (
    <div>
      <input type="checkbox" id="add-note-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add-note-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Notification</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Description</span>
              </label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered min-h-[110px] max-h-[180px]"
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
              <button className="btn btn-primary text-white">Ad Note</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;
