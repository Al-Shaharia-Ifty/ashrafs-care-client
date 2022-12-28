import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BoostModal from "../../Modal/BoostModal";
import IDRecoverModal from "../../Modal/IDRecoverModal";
import PageRecoverModal from "../../Modal/PageRecoverModal";
import PromoteModal from "../../Modal/PromoteModal";
import facebookBanner from "../../Assets/website-banner/Banner-for-facebook-marketing.png";
import Loading from "../../Shared/Loading";

const FacebookMarketing = () => {
  const [boost, setBoost] = useState(false);
  const [promote, setPromote] = useState(false);
  const [pageRecover, setPageRecover] = useState(false);
  const [idRecover, setIdRecover] = useState(false);
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-hidden relative">
        <img
          className="w-full scale-[1.5] md:scale-100 mb-7"
          src={facebookBanner}
          alt="Facebook Marketing Banner"
        />
      </div>
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
          <Link
            to={"/dashboard/facebook-setup"}
            className="label bg-white p-4 text-center rounded-lg flex items-center justify-evenly"
          >
            <h2 className="text-2xl text-primary">Page Setup</h2>
          </Link>
          <label
            onClick={() => setPageRecover("Page Recover")}
            htmlFor="pageRecover-modal"
            className="label bg-white p-4 text-center rounded-lg flex items-center justify-evenly"
          >
            <h2 className="text-2xl text-primary">Page Restriction Recover</h2>
          </label>
          <label
            onClick={() => setIdRecover("Id Recover")}
            htmlFor="idRecover-modal"
            className="label bg-white p-4 text-center rounded-lg flex items-center justify-evenly"
          >
            <h2 className="text-2xl text-primary">ID Restriction Recover</h2>
          </label>
          <label
            onClick={() => setPromote(true)}
            htmlFor="promote-modal"
            className="label bg-white p-4 text-center rounded-lg flex items-center justify-evenly"
          >
            <h2 className="text-2xl text-primary">Content Design</h2>
          </label>
        </div>
      </div>
      {boost && <BoostModal setBoost={setBoost} setLoading={setLoading} />}
      {promote && <PromoteModal setPromote={setPromote} />}
      {pageRecover && (
        <PageRecoverModal
          pageRecover={pageRecover}
          setPageRecover={setPageRecover}
          setLoading={setLoading}
        />
      )}
      {idRecover && (
        <IDRecoverModal
          idRecover={idRecover}
          setIdRecover={setIdRecover}
          setLoading={setLoading}
        />
      )}
    </div>
  );
};

export default FacebookMarketing;
