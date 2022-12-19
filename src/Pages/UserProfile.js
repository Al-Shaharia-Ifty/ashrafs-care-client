import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import pro from "../Assets/icons/Artboard 21.png";

const UserProfile = () => {
  const { userInfo } = useContext(AuthContext);
  const { name, email, address, img, phoneNumber, companyName } = userInfo;
  return (
    <div>
      <div className="p-5 min-h-screen">
        <div className="bg-white p-5 rounded-lg">
          <h2 className="text-xl">Profile Information</h2>
          <div className="bg-gray-400 p-[1px]"></div>
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between items-start w-full">
              <div className="flex justify-center w-full lg:w-32 lg:h-32">
                <img
                  src={img ? img : pro}
                  className="max-w-sm rounded-full w-32 h-32 shadow-2xl"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl">
                  Name:{" "}
                  {name ? (
                    name
                  ) : (
                    <span className="text-red-600">No Name Found</span>
                  )}
                </h2>
                <h2 className="text-xl">
                  Company Name:{" "}
                  {companyName ? (
                    companyName
                  ) : (
                    <span className="text-red-600">No Company Name Found</span>
                  )}
                </h2>
                <h2 className="text-xl">
                  Phone Number:{" "}
                  {phoneNumber ? (
                    phoneNumber
                  ) : (
                    <span className="text-red-600">No Phone Number Found</span>
                  )}
                </h2>
                <h2 className="text-xl">
                  Email Address:{" "}
                  {email ? (
                    email
                  ) : (
                    <span className="text-red-600">No Email Found</span>
                  )}
                </h2>
                <h2 className="text-xl">
                  Office Address:{" "}
                  {address ? (
                    address
                  ) : (
                    <span className="text-red-600">No Address Found</span>
                  )}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
