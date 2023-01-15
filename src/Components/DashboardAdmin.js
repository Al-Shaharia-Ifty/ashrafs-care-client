import React from "react";
import sell from "../Assets/admin-logo/admin-panel-10.png";
import adBanner from "../Assets/admin-logo/admin-panel-1.png";
import adUpdate from "../Assets/admin-logo/admin-panel.png";
import adRate from "../Assets/admin-logo/admin-panel-3.png";

const DashboardAdmin = () => {
  return (
    <div>
      <div className="p-8">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-white rounded-md">
            <div className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-8 rounded-md text-white text-lg">
              <h2>Total Sale</h2>
              <img className="w-11" src={sell} alt="" />
            </div>
            <div className="h-[180px] flex justify-center items-center">
              <p className="text-5xl text-[#0D6739] font-bold">12110 ৳</p>
            </div>
          </div>
          <div className="bg-white rounded-md">
            <div className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-8 rounded-md text-white text-lg">
              <h2>Current Month Sale</h2>
              <img className="w-11" src={sell} alt="" />
            </div>
            <div className="h-[180px] flex justify-center items-center">
              <p className="text-5xl text-[#0D6739] font-bold">12110 ৳</p>
            </div>
          </div>
          <div className="bg-white rounded-md">
            <div className="flex items-center bg-gradient-to-l from-[#0D6739] to-[#6CA743] justify-between p-8 rounded-md text-white text-lg">
              <h2>Today'zs Sale</h2>
              <img className="w-11" src={sell} alt="" />
            </div>
            <div className="h-[180px] flex justify-center items-center">
              <p className="text-5xl text-[#0D6739] font-bold">12110 ৳</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 py-5 text-[#0D6739]">
          <div>
            <div className="bg-white flex justify-evenly items-center rounded-md p-4 text-2xl font-bold">
              <p>Ad Banner</p>
              <img className="w-36" src={adBanner} alt="" />
            </div>
            <div className="grid grid-cols-2 gap-5 text-center pt-5 text-xl font-bold">
              <div className="bg-white rounded-md p-3">
                <div className="flex justify-center">
                  <img className="h-20 mb-2" src={adUpdate} alt="" />
                </div>
                <p>Ad Update</p>
              </div>
              <div className="bg-white rounded-md p-3">
                <div className="flex justify-center">
                  <img className="h-20 mb-2" src={adRate} alt="" />
                </div>
                <p>Ad Rate</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
