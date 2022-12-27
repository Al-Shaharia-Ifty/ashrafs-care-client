import React from "react";
import { useContext } from "react";
import { useUpdatePassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthProvider";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const ChangePassword = () => {
  const { user } = useContext(AuthContext);
  const [updatePassword, updating, error] = useUpdatePassword(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (updating) {
    return <Loading />;
  }
  if (error) {
    Swal.fire("Something is wrong", "Please try again", "error");
  }

  const onSubmit = async (data) => {
    const password = data.newPass;
    const success = await updatePassword(password);
    if (success) {
      Swal.fire("Your Password Update Successful", "", "success");
      navigate("/dashboard/user/profile");
    }
  };
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            <h2 className="text-2xl text-center font-semibold">
              Change Your Password
            </h2>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-black">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
                disabled
                value={user?.email}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-black">Your New Password</span>
              </label>
              <input
                type="password"
                placeholder="New password"
                class="input input-bordered"
                {...register("newPass", {
                  required: {
                    value: true,
                    message: "Your password is required",
                  },
                  minLength: {
                    value: 8,
                    message: "Please Add strong password",
                  },
                })}
              />
              <label className="label">
                {errors.newPass?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.newPass.message}
                  </span>
                )}
                {errors.newPass?.type === "minLength" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.newPass.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
