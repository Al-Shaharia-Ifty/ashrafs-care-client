import React from "react";
import PrimaryButton from "./PrimaryButton";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold py-5 text-[#166534]">
          We will be proud be help you.
        </h2>
        <Link to={"/dashboard/get-support"}>
          <PrimaryButton>get support</PrimaryButton>
        </Link>
      </div>
      <MessengerCustomerChat pageId="<PAGE_ID>" appId="<APP_ID>" />,
    </div>
  );
};

export default Support;
