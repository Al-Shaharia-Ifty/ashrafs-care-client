import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import AdminUpdateProfileModal from "../Modal/AdminUpdateProfileModal";

const ViewUserProfile = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [updateInfo, setUpdateInfo] = useState(false);
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
  const userInfo = allUser?.find((u) => {
    return u.email === params.email;
  });
  const { name, email, address, phoneNumber, companyName } = userInfo;

  return (
    <div>
      <div className="p-0 md:p-5 min-h-screen">
        <div className="bg-white p-5 rounded-lg">
          <div className="flex justify-between mt-5">
            <h2 className="text-xl">Profile Information</h2>
          </div>
          <div className="bg-gray-400 p-[1px]"></div>
          <div className="hero lg:mt-10">
            <div className="hero-content flex-col w-full px-0">
              {/* <div className="flex justify-center w-full lg:w-32 lg:h-32">
                <input
                  type="file"
                  className="hidden"
                  id="updatePhoto"
                  onChange={handleUpdateProfile}
                  accept="image/png, image/gif, image/jpeg"
                />
                <label htmlFor="updatePhoto">
                  <img
                    src={img ? img : pro}
                    className="max-w-sm rounded-full w-40 h-40"
                    alt=""
                  />
                </label>
              </div> */}
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-3 mt-10 lg:mt-20">
                <div className="text-end col-span-2 md:col-span-3">
                  <label
                    onClick={() => setUpdateInfo(email)}
                    htmlFor="admin-update-profile"
                    className="btn btn-primary text-white btn-xs"
                  >
                    edit
                  </label>
                </div>
                <h2 className="text-xl break-words text-primary font-semibold">
                  Name
                </h2>
                <h2 className="text-xl break-words md:col-span-2">
                  {name ? (
                    name
                  ) : (
                    <span className="text-red-600">Please fill up</span>
                  )}
                </h2>

                <h2 className="text-xl break-words text-primary font-semibold">
                  Company Name
                </h2>
                <h2 className="text-xl break-words md:col-span-2">
                  {companyName ? (
                    companyName
                  ) : (
                    <span className="text-red-600">Please fill up </span>
                  )}
                </h2>
                <h2 className="text-xl break-words text-primary font-semibold">
                  Phone Number
                </h2>
                <h2 className="text-xl break-words md:col-span-2">
                  {phoneNumber ? (
                    phoneNumber
                  ) : (
                    <span className="text-red-600">Please fill up </span>
                  )}
                </h2>
                <h2 className="text-xl break-words text-primary font-semibold">
                  Email Address
                </h2>
                <h2 className="text-xl break-words md:col-span-2">
                  {email ? (
                    email
                  ) : (
                    <span className="text-red-600">Please fill up</span>
                  )}
                </h2>
                <h2 className="text-xl break-words text-primary font-semibold">
                  Office Address
                </h2>
                <h2 className="text-xl break-words md:col-span-2">
                  {address ? (
                    address
                  ) : (
                    <span className="text-red-600">Please fill up</span>
                  )}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminUpdateProfileModal
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        setLoading={setLoading}
        refetch={refetch}
      />
    </div>
  );
};

export default ViewUserProfile;
