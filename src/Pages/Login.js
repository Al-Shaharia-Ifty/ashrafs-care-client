import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../Hooks/useTooken";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(user);

  let signInErrorMessage;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    signInErrorMessage = <p className="text-red-500 mb-2">{error?.message}</p>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <div className="pt-20 bg-green-800"></div>
      <div className="flex min-h-screen justify-center items-center bg-accent">
        <div className="card  max-w-md bg-base-100 shadow-xl">
          <div className="card-body border-2 rounded-lg">
            <h2 className="text-center text-3xl">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-sm"
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
              {/* Password */}
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-sm"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {/*  */}
              {signInErrorMessage}
              <input
                className="btn btn-primary bg-gradient-to-r from-[#6CA83F] via-[#4C8F3E] to-[#166534] text-white w-full max-w-sm"
                value="login"
                type="submit"
              />
            </form>
            <div className="divider"></div>
            <p>
              New to ashrafs care{" "}
              <Link to="/register" className="text-blue-500">
                Create and Account
              </Link>{" "}
            </p>
            <p>
              Are you forget your password?{" "}
              <Link to="/reset_pass" className="text-blue-500">
                Reset Password
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
