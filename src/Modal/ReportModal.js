import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthProvider";

const ReportModal = ({ problem, setProblem, setLoading }) => {
  const { userInfo } = useContext(AuthContext);
  const { name, email, phoneNumber } = userInfo;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const date = new Date().toLocaleString();

  const onSubmit = (data) => {
    setProblem(false);
    setLoading(true);
    const orderID = data.orderID;
    const support = {
      date: date,
      name: name,
      email: email,
      orderID: orderID,
      question: problem,
      phoneNumber: phoneNumber,
    };
    fetch("https://ashrafs-servier.vercel.app/support", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(support),
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        Swal.fire(
          "We have received your report",
          "Please wait, We will solve it soon. Thanks for being with us.",
          "success"
        );
      });
  };
  return (
    <div>
      <input type="checkbox" id="support-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="support-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg">Your problem is</h3>
          <p className="py-4 font-bold text-xl">{problem}</p>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Order ID</span>
              </label>
              <input
                type="text"
                placeholder="Order ID"
                className="input input-bordered"
                {...register("orderID", {
                  required: {
                    value: true,
                    message: "Order ID is required",
                  },
                })}
              />
              <label className="label">
                {errors.orderID?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.orderID.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
