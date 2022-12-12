import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";
import SetupModal from "../Modal/SetupModal";

const PageSetup = () => {
  const [setupModal, setSetupModal] = useState(false);
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        id="monthly-package-img"
      >
        <h2 className="text-center text-white text-4xl md:text-6xl font-medium py-5">
          Facebook Page Setup
        </h2>
        <div className="hidden lg:flex lg:justify-center lg:items-center gap-5 mt-5 md:mt-10 mx-5 md:mx-10 pb-10">
          <div>
            <div className="bg-white w-full lg:w-60 rounded-lg overflow-hidden">
              <h2 className="text-center p-5 text-2xl font-semibold text-white bg-[#166534]">
                Basic
              </h2>
              <div className="">
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Branded Logo</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Cover Design</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">About Description</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Additional Information</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Tabs & Template </span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Message Setup</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <MdOutlineCancel className="text-error" />
                  <span className="mx-3">Tagline and Slogan</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <MdOutlineCancel className="text-error" />
                  <span className="mx-3">Location Mapping</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <MdOutlineCancel className="text-error" />
                  <span className="mx-3">Content Creation</span>
                </p>

                <p className="flex items-center p-3 text-md ">
                  <MdOutlineCancel className="text-error" />
                  <span className="mx-3">Technical support</span>
                </p>
              </div>
              <p className="text-center text-3xl my-5 font-bold">1720Tk</p>
              <div className="text-center m-3 mt-0">
                <label
                  htmlFor="setup-modal"
                  onClick={() =>
                    setSetupModal({ type: "Basic", amount: "1720Tk" })
                  }
                  className="btn btn-primary text-white w-full"
                >
                  Chooses
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white lg:w-72 w-full lg:h-[650px] rounded-lg overflow-hidden">
            <h2 className="text-center p-10 text-4xl font-semibold text-white bg-[#DC6E00]">
              Premium
            </h2>
            <div className="">
              <p className="flex items-center p-3 mt-2 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Branded Logo</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Cover Design</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">About Description</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Additional Information</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Tabs & Template </span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Message Setup</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Tagline and Slogan</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Location Mapping</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Content Creation</span>
              </p>

              <p className="flex items-center p-3 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Technical support</span>
              </p>
            </div>
            <p className="text-center text-3xl my-5 font-bold">4000Tk</p>
            <div className="text-center m-3 mt-0">
              <label
                htmlFor="setup-modal"
                onClick={() =>
                  setSetupModal({ type: "Premium", amount: "4000Tk" })
                }
                className="btn btn-primary text-white w-full"
              >
                Chooses
              </label>
            </div>
          </div>
          <div>
            <div className="bg-white w-full lg:w-60 rounded-lg overflow-hidden">
              <h2 className="text-center p-5 text-2xl font-semibold text-white bg-[#518E31]">
                Silver
              </h2>
              <div className="">
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Branded Logo</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Cover Design</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">About Description</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Additional Information</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Tabs & Template </span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Message Setup</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Tagline and Slogan</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <AiOutlineCheckCircle className="text-success" />
                  <span className="mx-3">Location Mapping</span>
                </p>
                <p className="flex items-center p-3 pb-0 text-md ">
                  <MdOutlineCancel className="text-error" />
                  <span className="mx-3">Content Creation</span>
                </p>

                <p className="flex items-center p-3 text-md ">
                  <MdOutlineCancel className="text-error" />
                  <span className="mx-3">Technical support</span>
                </p>
              </div>
              <p className="text-center text-3xl my-5 font-bold">2500Tk</p>
              <div className="text-center m-3 mt-0">
                <label
                  htmlFor="setup-modal"
                  onClick={() =>
                    setSetupModal({ type: "Silver", amount: "2500Tk" })
                  }
                  className="btn btn-primary text-white w-full"
                >
                  Chooses
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-5 mt-5 md:mt-10 mx-5 md:mx-10 pb-10">
          <div className="bg-white w-full lg:w-60 rounded-lg overflow-hidden">
            <h2 className="text-center p-5 text-2xl font-semibold text-white bg-[#166534]">
              Basic
            </h2>
            <div className="">
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Branded Logo</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Cover Design</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">About Description</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Additional Information</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Tabs & Template </span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Message Setup</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <MdOutlineCancel className="text-error" />
                <span className="mx-3">Tagline and Slogan</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <MdOutlineCancel className="text-error" />
                <span className="mx-3">Location Mapping</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <MdOutlineCancel className="text-error" />
                <span className="mx-3">Content Creation</span>
              </p>

              <p className="flex items-center p-3 text-md ">
                <MdOutlineCancel className="text-error" />
                <span className="mx-3">Technical support</span>
              </p>
            </div>
            <p className="text-center text-3xl my-5 font-bold">1720Tk</p>
            <div className="text-center m-3 mt-0">
              <label
                htmlFor="setup-modal"
                onClick={() => setSetupModal("Basic")}
                className="btn btn-primary text-white w-full"
              >
                Chooses
              </label>
            </div>
          </div>
          <div className="bg-white w-full lg:w-60 rounded-lg overflow-hidden">
            <h2 className="text-center p-5 text-2xl font-semibold text-white bg-[#518E31]">
              Silver
            </h2>
            <div className="">
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Branded Logo</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Cover Design</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">About Description</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Additional Information</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Tabs & Template </span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Message Setup</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Tagline and Slogan</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Location Mapping</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <MdOutlineCancel className="text-error" />
                <span className="mx-3">Content Creation</span>
              </p>

              <p className="flex items-center p-3 text-md ">
                <MdOutlineCancel className="text-error" />
                <span className="mx-3">Technical support</span>
              </p>
            </div>
            <p className="text-center text-3xl my-5 font-bold">2500Tk</p>
            <div className="text-center m-3 mt-0">
              <label
                htmlFor="setup-modal"
                onClick={() => setSetupModal("Silver")}
                className="btn btn-primary text-white w-full"
              >
                Chooses
              </label>
            </div>
          </div>
          <div className="bg-white lg:w-72 w-full lg:h-[650px] rounded-lg overflow-hidden">
            <h2 className="text-center p-10 text-4xl font-semibold text-white bg-[#DC6E00]">
              Premium
            </h2>
            <div className="">
              <p className="flex items-center p-3 mt-2 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Branded Logo</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Cover Design</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">About Description</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Additional Information</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Tabs & Template </span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Message Setup</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Tagline and Slogan</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Location Mapping</span>
              </p>
              <p className="flex items-center p-3 pb-0 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Content Creation</span>
              </p>

              <p className="flex items-center p-3 text-md ">
                <AiOutlineCheckCircle className="text-success" />
                <span className="mx-3">Technical support</span>
              </p>
            </div>
            <p className="text-center text-3xl my-5 font-bold">4000Tk</p>
            <div className="text-center m-3 mt-0">
              <label
                htmlFor="setup-modal"
                onClick={() => setSetupModal("Premium")}
                className="btn btn-primary text-white w-full"
              >
                Chooses
              </label>
            </div>
          </div>
        </div>
      </div>
      {setupModal && (
        <SetupModal setupModal={setupModal} setSetupModal={setSetupModal} />
      )}
    </div>
  );
};

export default PageSetup;
