import React from "react";
import pcImg from "../../Assets/website-banner/banner-for-desktop.png";
import mobileImg from "../../Assets/website-banner/banner-for-mobile.png";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const GraphicsDesign = () => {
  const { data: designs, isLoading } = useQuery({
    queryKey: ["designs"],
    queryFn: () =>
      fetch(`http://localhost:5000/design`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading />;
  }
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
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mx-[52px] mx-[14px] gap-[22px] pb-3">
        {[...designs].reverse().map((d, i) => (
          <div key={i}>
            <img className="rounded-t-xl" src={d.img} alt="" />
            <p className="bg-primary text-white p-[2px] px-2">{d.name}</p>
            <div className="flex items-center justify-between p-2 px-2 text-white bg-[#166534]">
              <p className="text-xs md:text-sm">Price: ৳{d.price}</p>
              <button className="small-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphicsDesign;
