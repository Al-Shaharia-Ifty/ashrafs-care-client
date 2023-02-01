import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AdminPanel = () => {
  const [loading, setLoading] = useState(false);
  const {
    data: allUser,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/admin/admin-panel`, {
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
  const makeMember = (id) => {
    setLoading(true);
    fetch("https://ashrafs-servier.vercel.app/admin/make-member", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setLoading(false);
          refetch();
        }
      });
  };
  const makeAdmin = (id) => {
    setLoading(true);
    fetch("https://ashrafs-servier.vercel.app/admin/make-admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setLoading(false);
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-4xl text-center py-5">Admin Panel</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th></th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Role</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {allUser.map((u, i) => (
                <tr key={i}>
                  <th>
                    <img className="w-14" src={u.img} alt="" />
                  </th>
                  <td>{u.name}</td>
                  <td>{u.phoneNumber}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    {u.role === "admin" ? (
                      <button
                        onClick={() => makeMember(u._id)}
                        className="btn btn-sm btn-info text-white"
                      >
                        Make Member
                      </button>
                    ) : (
                      <button
                        onClick={() => makeAdmin(u._id)}
                        className="btn btn-sm btn-primary text-white"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
