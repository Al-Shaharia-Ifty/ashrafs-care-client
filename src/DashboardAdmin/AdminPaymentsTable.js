import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AdminPaymentsTable = () => {
  // admin payments
  const { data: adminPayments, isLoading } = useQuery({
    queryKey: ["adminPayments"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/admin-payments`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="mt-5 mx-8">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th>Date</th>
                <th>transaction</th>
                <th>transaction Id</th>
                <th>AMount</th>
              </tr>
            </thead>
            <tbody>
              {adminPayments
                .slice()
                .reverse()
                .map((d, i) => (
                  <tr>
                    <td>{d.date}</td>
                    <td>{d.transaction}</td>
                    <td>{d?.transactionID}</td>
                    <td>{d.amount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <AdminPaymentModal tableRefetch={refetch} /> */}
    </div>
  );
};

export default AdminPaymentsTable;
