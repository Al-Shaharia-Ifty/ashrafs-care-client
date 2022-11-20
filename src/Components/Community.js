import React from "react";
import PrimaryButton from "./PrimaryButton";
import community from "../Assets/photos/community.png";

const Community = () => {
  return (
    <div>
      <div className="mt-10 mx-10 2xl:mx-36 shadow-2xl rounded-2xl bg-gray-100 flex items-center">
        <div className="p-10 w-3/5 text-center">
          <h2 className="text-2xl">
            Join{" "}
            <span className="font-bold text-[#6DA940]">ashrafs care's</span>{" "}
            community.
          </h2>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit
            reprehenderit placeat exercitationem voluptatum error esse omnis.
            Incidunt, quasi facilis.
          </p>
          <div className="text-center">
            <PrimaryButton>Join Community</PrimaryButton>
          </div>
        </div>
        <img className="w-2/4" src={community} alt="" />
      </div>
    </div>
  );
};

export default Community;
