import React from "react";
import { useState } from "react";
import BoostModal from "../Modal/BoostModal";
import PromoteModal from "../Modal/PromoteModal";

const FacebookMarketing = () => {
  const [boost, setBoost] = useState(false);
  const [promote, setPromote] = useState(false);
  return (
    <div>
      <div className="min-h-screen mx-5 md:mx-10">
        <div className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center pt-10 gap-5 md:gap-10">
          <label
            onClick={() => setBoost(true)}
            htmlFor="boost-modal"
            className="label bg-white p-4 text-center rounded-lg flex items-center justify-evenly"
          >
            <h2 className="text-2xl text-primary">Boost</h2>
          </label>
          <label
            onClick={() => setPromote(true)}
            htmlFor="promote-modal"
            className="label bg-white p-4 text-center rounded-lg flex items-center justify-evenly"
          >
            <h2 className="text-2xl text-primary">Promote</h2>
          </label>
          <label
            onClick={() => setPromote(true)}
            htmlFor="promote-modal"
            className="label bg-white p-4 text-center rounded-lg flex items-center justify-evenly"
          >
            <h2 className="text-2xl text-primary">Page Setup</h2>
          </label>
        </div>
      </div>
      {boost && <BoostModal setBoost={setBoost} />}
      {promote && <PromoteModal setPromote={setPromote} />}
    </div>
  );
};

export default FacebookMarketing;
