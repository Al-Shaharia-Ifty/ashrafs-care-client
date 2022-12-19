import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import pro from "../Assets/icons/Artboard 21.png";
import UpdateProfileModal from "../Modal/UpdateProfileModal";

const UserProfile = () => {
  const { userInfo } = useContext(AuthContext);
  const { name, email, address, img, phoneNumber, companyName } = userInfo;
  const [updateInfo, setUpdateInfo] = useState(false);

  return (
    <div>
      <div className="p-0 md:p-5 min-h-screen">
        <div className="bg-white p-5 rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-xl">Profile Information</h2>
            <label
              onClick={() => setUpdateInfo(userInfo)}
              htmlFor="updateProfileModal"
              className="btn btn-primary text-white btn-xs"
            >
              edit
            </label>
          </div>
          <div className="bg-gray-400 p-[1px]"></div>
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between items-start w-full px-0">
              <div className="flex justify-center w-full lg:w-32 lg:h-32">
                <img
                  src={img ? img : pro}
                  className="max-w-sm rounded-full w-32 h-32 shadow-2xl"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full">
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
      <UpdateProfileModal
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
      />
    </div>
  );
};

export default UserProfile;
