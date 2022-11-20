import React, { useState } from "react";

const QNA = () => {
  const [close, setClose] = useState("");
  return (
    <div className="bg-[#ae9cf0] py-5 mt-10">
      <h2 className="text-3xl text-center text-white ">
        Frequently Asked Question
      </h2>
      <div
        onClick={() => setClose(<input type="checkbox" />)}
        onBlur={() => setClose("")}
        className="px-10 grid grid-cols-2 gap-5 2xl:px-36 py-5"
      >
        <div
          tabIndex={0}
          className="collapse collapse-plus rounded-2xl bg-white"
        >
          {close}
          <div className="collapse-title text-xl font-medium">
            আমার Boosting হচ্ছে না।
          </div>
          <div className="collapse-content">
            <p>প্রথম করনিয় হলো অপেক্ষা করা।</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QNA;
