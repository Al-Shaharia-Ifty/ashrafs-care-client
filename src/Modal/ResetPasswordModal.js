import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const ResetPasswordModal = ({ setModal }) => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (sending) {
    return <Loading />;
  }
  if (error) {
    Swal.fire("Something is wrong", "Please try again", "error");
  }
  const onSubmit = async (data) => {
    const email = data.email;
    const success = await sendPasswordResetEmail(email);
    if (success) {
      Swal.fire("Send Reset Email", "Please check you email", "success");
      setModal(false);
    }
  };
  return (
    <div>
      <input type="checkbox" id="reset-modal" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="reset-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">
            Reset Your Password!
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-4 flex justify-center"
          >
            <div className="max-w-sm w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">
                    Enter Your Email Address
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn btn-primary bg-gradient-to-r from-[#6CA83F] via-[#4C8F3E] to-[#166534] text-white w-full"
                value="Reset"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
