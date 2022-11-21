import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div className="btn bg-gradient-to-r from-[#6CA83F] via-[#4C8F3E] to-[#166534] border-0 text-white">
      {children}
    </div>
  );
};

export default PrimaryButton;
