import React from "react";
import { useForm } from "react-hook-form";

const AdminPaymentModal = ({
  balanceRefetch,
  setLoading,
  tableRefetch,
  setModal,
  modal,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const date = new Date().toLocaleString();
  const onSubmit = (data) => {
    setLoading(true);
    const amount = data.amount;
    const transaction = data.transaction;
    const transactionID = data.transactionID;
    const netBalance = modal[0].balance - parseInt(amount);
    const balance = {
      balance: netBalance,
      id: modal[0]._id,
    };
    console.log(balance);
    const info = {
      date: date,
      amount,
      transaction,
      transactionID,
    };
    fetch(`https://ashrafs-servier.vercel.app/admin/update-balance`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(balance),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://ashrafs-servier.vercel.app/admin/add-payment`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then(() => {
            setLoading(false);
            balanceRefetch();
            tableRefetch();
            setModal(false);
          });
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="admin-payment-modal"
        className="modal-toggle"
      />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="admin-payment-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">!</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Amount</span>
              </label>
              <input
                type="number"
                onWheel={(e) => e.target.blur()}
                className="input input-bordered"
                placeholder="Amount"
                {...register("amount", {
                  required: {
                    value: true,
                    message: "Your Amount is required",
                  },
                })}
              />
              <label className="label">
                {errors.amount?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.amount.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Transaction</span>
              </label>
              <input
                type="text"
                placeholder="Transaction"
                className="input input-bordered"
                {...register("transaction", {
                  required: {
                    value: true,
                    message: "Transaction is required",
                  },
                })}
              />
              <label className="label">
                {errors.transaction?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.transaction.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Transaction ID</span>
              </label>
              <input
                type="text"
                placeholder="Transaction ID"
                className="input input-bordered"
                {...register("transactionID", {
                  required: {
                    value: true,
                    message: "Transaction ID is required",
                  },
                })}
              />
              <label className="label">
                {errors.transactionID?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.transactionID.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Cash Out</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPaymentModal;
