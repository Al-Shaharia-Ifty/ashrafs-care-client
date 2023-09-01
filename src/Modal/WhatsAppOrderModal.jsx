import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthProvider";

const WhatsAppOrderModal = ({ order, setOrder, setLoading, imag }) => {
  const { userInfo } = useContext(AuthContext);
  const { name, email } = userInfo;
  const date = new Date().toLocaleString();
  const { designName, details, amount } = order;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const chargeAmount = parseInt(amount / 1000);
    let charge = chargeAmount * 20;
    if (chargeAmount === 0) {
      charge = 20;
    }
    const totalAmount = parseInt(charge) + parseInt(amount);
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
            const orderInfo = {
              orderImg: order.img,
              img: img,
              phoneNumber: data.phone,
              description: data.description,
              designName: designName,
              email: email,
              name: name,
              orderType: "whatsApp",
              status: "Pending",
              payment: "Due",
              date: date,
              amount: amount,
              charge,
              imag,
              totalAmount,
              due: totalAmount,
            };
            const balanceInfo = {
              balance: amount * -1,
            };
            fetch("https://ashrafs-servier.vercel.app/balance", {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(balanceInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                fetch(`https://ashrafs-servier.vercel.app/design`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                      "accessToken"
                    )}`,
                  },
                  body: JSON.stringify(orderInfo),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      setLoading(false);
                      Swal.fire("Add Order Successful", "", "success");
                      setOrder(false);
                    } else {
                      Swal.fire("Failed to Add Order", "", "error");
                      setOrder(false);
                    }
                  });
              });
          } else {
            Swal.fire("Failed to Add Product", "", "error");
          }
        });
    } else {
      const order = {
        phoneNumber: data.phone,
        description: data.description,
        designName: designName,
        email: email,
        name: name,
        orderType: "whatsApp",
        status: "Pending",
        payment: "Due",
        date: date,
        amount: amount,
        charge,
        imag,
        totalAmount,
        due: totalAmount,
      };
      fetch(`https://ashrafs-servier.vercel.app/design`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setLoading(false);
            Swal.fire("Add Order Successful", "", "success");
            setOrder(false);
          } else {
            setLoading(false);
            Swal.fire("Failed to Add Order", "", "error");
            setOrder(false);
          }
        });
    }
  };
  return (
    <div>
      <input type="checkbox" id="graphic-order" className="modal-toggle" />
      <div className="modal glass z-10">
        <div className="modal-box relative">
          <label
            htmlFor="graphic-order"
            className="btn btn-sm btn-circle text-red-500 hover:text-white hover:border-0 hover:bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Your {designName} information</h3>
          <p className="py-4">{details}</p>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Phone Number</span>
              </label>
              <input
                type="number"
                onWheel={(e) => e.target.blur()}
                placeholder="Phone Number"
                className="input input-bordered"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                  minLength: {
                    value: 10,
                    message: "Please Add valid Number",
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.phone.message}
                  </span>
                )}
                {errors.phone?.type === "minLength" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.phone.message}
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">
                  Your Sample (Optional)
                </span>
              </label>
              <input
                type="file"
                className="input input-bordered"
                accept="image/gif, image/jpeg, image/png"
                {...register("image")}
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
              <button className="btn btn-primary text-white">Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppOrderModal;
