import React from "react";
import { useForm } from "react-hook-form";

const UpdateNoteModal = ({ note, setLoading }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    const message = data.updateNote;
    const id = note._id;
    const info = {
      message,
      id,
    };
    fetch("https://ashrafs-servier.vercel.app/admin/updateNote", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        note(false);
        reset();
      });
  };
  return (
    <div>
      <input type="checkbox" id="update-note-modal" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="update-note-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Update Your Notification!</h3>
          <p className="py-4">
            Your old message is{" "}
            <span className="text-secondary text-2xl font-semibold">
              {note.p}
            </span>
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <div className="flex items-center">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Notification message"
                  className="input input-bordered w-full"
                  {...register("updateNote", {
                    required: {
                      value: true,
                      message: "Notification message is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.updateNote?.type === "required" && (
                    <span className="text-red-500 label-text-alt">
                      {errors.updateNote.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateNoteModal;
