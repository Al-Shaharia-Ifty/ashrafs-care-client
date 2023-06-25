import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import AdminBalance from "../Components/AdminBalance";
import AdminPaymentModal from "../Modal/AdminPaymentModal";
import Loading from "../Shared/Loading";
import AdminPaymentsTable from "./AdminPaymentsTable";

const AdminPayment = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  // admin balance
  const {
    data: balance,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["balance"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/admin-balance`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-3xl font-bold text-center py-4">Payment History</h2>

        <div className="lg:flex">
          <AdminBalance />
        </div>
        <div className="text-end mx-8">
          <label
            onClick={() => setModal(balance)}
            className="btn btn-primary text-white"
            htmlFor="admin-payment-modal"
          >
            Cash Out
          </label>
        </div>
        <AdminPaymentsTable />
      </div>
      {modal && (
        <AdminPaymentModal
          balanceRefetch={refetch}
          setLoading={setLoading}
          setModal={setModal}
          modal={modal}
        />
      )}
    </div>
  );
};

export default AdminPayment;
