import React from "react";

const DeleteSMSModal = ({ designDelete, setLoading, refetch }) => {
  const {
    _id,
    // orderType
  } = designDelete;

  const handleDelete = () => {
    setLoading(true);
    fetch("https://ashrafs-servier.vercel.app/admin/delete-sms-design", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        refetch();
      });
  };
  return (
    <div>
      <input type="checkbox" id="design-delete" className="modal-toggle" />
      <div className="modal glass">
        <div className="modal-box relative">
          <h3 className="text-lg font-bold">
            Are you sure, you want to delete this Design
            {/* <span className="text-red-500">{orderType}</span>. */}
          </h3>
          <div className="flex justify-end mt-5">
            <div>
              <button onClick={handleDelete} className="btn btn-error">
                delete
              </button>
              <label htmlFor="design-delete" className="btn bg-[#000000] ml-3">
                cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteSMSModal;
