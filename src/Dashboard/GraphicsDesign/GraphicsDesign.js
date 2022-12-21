import React from "react";
import pcImg from "../../Assets/new-icon/banner-for-desktop.png";
import mobileImg from "../../Assets/new-icon/banner-for-mobile.png";

const GraphicsDesign = () => {
  return (
    <div className="min-h-screen">
      <div className="overflow-x-hidden relative">
        <img
          className="w-full hidden md:flex mb-7"
          src={pcImg}
          alt="Facebook Marketing Banner"
        />
        <img
          className="w-full md:hidden mb-7"
          src={mobileImg}
          alt="Facebook Marketing Banner"
        />
      </div>
    </div>
  );
};

export default GraphicsDesign;
