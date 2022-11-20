import React from "react";
import photo from "../Assets/photos/ashraf.png";

const Profile = () => {
  return (
    <div>
      <div className="hero py-10 bg-[#F8F6ED]">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg " alt="" />
          <div className="lg:pl-10 shadow-2xl rounded-lg pt-5 bg-white">
            <h1 className="text-5xl font-bold text-[#166534]">
              Ahmadullah Ashraf
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
// bg-[#F8FAFB]
