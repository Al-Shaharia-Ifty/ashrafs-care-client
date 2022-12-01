import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div className="text-black flex justify-center">
      <div className="max-w-[2000px] w-full">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
