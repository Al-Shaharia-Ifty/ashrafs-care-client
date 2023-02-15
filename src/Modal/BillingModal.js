import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Contexts/AuthProvider";

const BillingModal = ({ setBill, details, refetch, setLoading }) => {
  const { _id, editor, manager, bill, transID, remarks } = details;
  const { adminBalance } = useContext(AuthContext);
  const [edit, setEditor] = useState(editor);
  const [mana, setManager] = useState(manager);
  const [trans, setTransID] = useState(transID);
  const [remark, setRemarks] = useState(remarks);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // setLoading(true);
    const editor = edit;
    const manager = mana;
    const addBill = data.addBill;

    const newBill = parseInt(addBill) + parseInt(bill);
    const payment = data.status;
    const method = data.method;
    const transID = trans;
    const remarks = remark;
    const oldBalance = adminBalance[0].balance;
    const newBalance = oldBalance + parseInt(addBill);
    const balance = {
      balance: newBalance,
      id: adminBalance[0]._id,
    };
    const update = {
      editor,
      manager,
      bill: newBill,
      payment,
      method,
      transID,
      remarks,
    };
    fetch(`http://localhost:5000/admin/update-balance`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(balance),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://ashrafs-servier.vercel.app/admin/orderStatus/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(update),
        })
          .then((res) => res.json())
          .then(() => {
            setLoading(false);
            refetch();
            setBill(false);
          });
      });
  };
  return (
    <div>
      <input type="checkbox" id="billing-modal" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <label
            htmlFor="billing-modal"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Billing</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Editor Id</span>
              </label>
              <input
                type="text"
                placeholder="Editor ID"
                value={edit}
                onChange={(e) => setEditor(e.target.value)}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">AD Manager</span>
              </label>
              <input
                type="text"
                placeholder="AD Manager"
                className="input input-bordered"
                value={mana}
                onChange={(e) => setManager(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Paid Bill {bill}</span>
              </label>
              <input
                type="number"
                onWheel={(e) => e.target.blur()}
                placeholder="Add Now Bill"
                className="input input-bordered"
                {...register("addBill", {
                  required: {
                    value: true,
                    message: "Add Minimum 0",
                  },
                })}
              />
              <label className="label">
                {errors.addBill?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.addBill.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Status</span>
              </label>
              <select
                className="select select-bordered w-full"
                {...register("status")}
              >
                <option>Due</option>
                <option>Paid</option>
                <option>Old Payment</option>
                <option>Advanced</option>
              </select>
              <label className="label">
                {errors.status?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.status.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Method</span>
              </label>
              <select
                className="select select-bordered w-full"
                {...register("method")}
              >
                <option>Nagad 29</option>
                <option>BKM 23</option>
                <option>BK 501</option>
                <option>NG 29</option>
                <option>NG 800</option>
                <option>BKM 66</option>
                <option>City</option>
                <option>DBBL</option>
                <option>IBBL</option>
                <option>EBL</option>
                <option>BKM 33</option>
                <option>BK 69</option>
              </select>
              <label className="label">
                {errors.status?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.status.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Trans. ID</span>
              </label>
              <input
                type="text"
                placeholder="Trans. ID"
                className="input input-bordered"
                value={trans}
                onChange={(e) => setTransID(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Remarks</span>
              </label>
              <input
                type="text"
                placeholder="Remarks"
                className="input input-bordered"
                value={remark}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Order now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillingModal;
