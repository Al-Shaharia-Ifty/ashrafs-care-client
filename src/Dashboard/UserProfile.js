import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import pro from "../Assets/icons/Artboard 21.png";
import UpdateProfileModal from "../Modal/UpdateProfileModal";
import Swal from "sweetalert2";

const UserProfile = () => {
  const { userInfo, refetch } = useContext(AuthContext);
  const { name, email, address, img, phoneNumber, companyName } = userInfo;
  const [updateInfo, setUpdateInfo] = useState(false);

  const imageStorageKey = { key: process.env.REACT_APP_imageStorageKey };

  const handleUpdateProfile = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey.key}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const data = {
            img: img,
          };
          fetch(`https://ashrafs-servier.vercel.app/userInfo`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then(() => {
              refetch();
              Swal.fire("Your profile Picture updated", "", "success");
            });
        }
      });
  };

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
              <div className="flex justify-center w-full lg:w-32 lg:h-32">
                <input
                  type="file"
                  className="hidden"
                  id="updatePhoto"
                  onChange={handleUpdateProfile}
                />
                <label htmlFor="updatePhoto">
                  <img
                    src={img ? img : pro}
                    className="max-w-sm rounded-full w-40 h-40"
                    alt=""
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-3 mt-10 lg:mt-20">
                <div className="text-end col-span-2 md:col-span-3">
                  <label
                    onClick={() => setUpdateInfo(userInfo)}
                    htmlFor="updateProfileModal"
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
      {updateInfo && (
        <UpdateProfileModal
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default UserProfile;
