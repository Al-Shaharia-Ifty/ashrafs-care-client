import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const OrderDetails = () => {
  const params = useParams();
  const { data: details, isLoading } = useQuery({
    queryKey: ["details"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/order-details/${params.id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  console.log(details);
  if (isLoading) {
    return <Loading />;
  }
  const {
    _id,
    pageName,
    dollarAmount,
    boostDay,
    gender,
    minAge,
    maxAge,
    location,
    audience,
    postLink,
    pageLink,
    idLink,
    name,
    email,
    phoneNumber,
    orderType,
    date,
    status,
    promote,
    like,
    amount,
    idName,
    businessAddress,
    businessCategory,
    BusinessEmail,
    whatsapp,
    webLink,
  } = details;

  return (
    <div>
      <div className="min-h-screen p-0 lg:p-10">
        <div className="p-10 rounded-lg bg-white">
          <h2 className="text-2xl text-center">
            ID: <span className="font-bold">{_id}</span>
          </h2>
          <div className="divider"></div>
          <h2 className="text-xl">Date: {date}</h2>
          {orderType === "boost" && (
            <div className="lg:flex block">
              <div className="mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl">Name</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {name}
                  </h2>
                  <h2 className="text-xl">Page Name</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {pageName}
                  </h2>
                  <h2 className="text-xl">Gender</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {gender}
                  </h2>
                  <h2 className="text-xl">Audience</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {audience}
                  </h2>
                  <h2 className="text-xl">Email</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {email}
                  </h2>
                  <h2 className="text-xl">Phone</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {phoneNumber}
                  </h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl">Amount</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {dollarAmount} Dollar
                  </h2>
                  <h2 className="text-xl">Boost Day</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {boostDay}
                  </h2>
                  <h2 className="text-xl">Age</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {minAge}-{maxAge}
                  </h2>
                  <h2 className="text-xl">Location</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {location}
                  </h2>
                  <h2 className="text-xl">Post Link</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3 overflow-hidden">
                    :
                    <a
                      className="text-blue-500"
                      target="_blank"
                      rel="noreferrer"
                      href={postLink}
                    >
                      {postLink}
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          )}
          {promote === "targeting" && (
            <div className="lg:flex block">
              <div className="mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl">Name</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {name}
                  </h2>
                  <h2 className="text-xl">Page Name</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {pageName}
                  </h2>
                  <h2 className="text-xl">Gender</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {gender}
                  </h2>
                  <h2 className="text-xl">Audience</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {audience}
                  </h2>
                  <h2 className="text-xl">Email</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {email}
                  </h2>
                  <h2 className="text-xl">Phone</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {phoneNumber}
                  </h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl">Like</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {like}
                  </h2>
                  <h2 className="text-xl">Age</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {minAge}-{maxAge}
                  </h2>
                  <h2 className="text-xl">Location</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {location}
                  </h2>
                  <h2 className="text-xl">Post Link</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3 overflow-hidden">
                    :
                    <a
                      className="text-blue-500"
                      target="_blank"
                      rel="noreferrer"
                      href={postLink}
                    >
                      {postLink}
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          )}
          {promote === "basic" && (
            <div className="lg:flex block">
              <div className="mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl">Name</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {name}
                  </h2>
                  <h2 className="text-xl">Page Name</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {pageName}
                  </h2>

                  <h2 className="text-xl">Phone</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {phoneNumber}
                  </h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl">Like</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {like}
                  </h2>
                  <h2 className="text-xl">Post Link</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3 overflow-hidden">
                    :
                    <a
                      className="text-blue-500"
                      target="_blank"
                      rel="noreferrer"
                      href={postLink}
                    >
                      {postLink}
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          )}
          {orderType === "page recovery" && (
            <div className="lg:flex block">
              <div className="mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl">Page Name</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {pageName}
                  </h2>
                  <h2 className="text-xl">Email</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {email}
                  </h2>
                  <h2 className="text-xl">Phone</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {phoneNumber}
                  </h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl">Amount</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {amount}
                  </h2>
                  <h2 className="text-xl">Page Link</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3 overflow-hidden">
                    :
                    <a
                      className="text-blue-500"
                      target="_blank"
                      rel="noreferrer"
                      href={pageLink}
                    >
                      {pageLink}
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          )}
          {orderType === "ID recovery" && (
            <div className="lg:flex block">
              <div className="mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl">ID Name</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {idName}
                  </h2>
                  <h2 className="text-xl">Email</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {email}
                  </h2>
                  <h2 className="text-xl">Phone</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {phoneNumber}
                  </h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl">Amount</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {amount}
                  </h2>
                  <h2 className="text-xl">Page Link</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3 overflow-hidden">
                    :
                    <a
                      className="text-blue-500"
                      target="_blank"
                      rel="noreferrer"
                      href={idLink}
                    >
                      {idLink}
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          )}
          {orderType === "page setup" && (
            <div className="lg:flex block">
              <div className="mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-3">
                  <h2 className="text-xl">Name</h2>
                  <h2 className="text-xl font-bold col-span-2">: {name}</h2>
                  <h2 className="text-xl">Page Name</h2>
                  <h2 className="text-xl font-bold col-span-2">: {pageName}</h2>
                  <h2 className="text-xl">Business Address</h2>
                  <h2 className="text-xl font-bold col-span-2">
                    : {businessAddress}
                  </h2>
                  <h2 className="text-lg">Business Category</h2>
                  <h2 className="text-xl font-bold col-span-2">
                    : {businessCategory}
                  </h2>
                  <h2 className="text-xl">Business Email</h2>
                  <h2 className="text-xl font-bold col-span-2">
                    : {BusinessEmail}
                  </h2>
                  <h2 className="text-xl">Phone</h2>
                  <h2 className="text-xl font-bold col-span-2">
                    : {phoneNumber}
                  </h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl">WhatsApp</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {whatsapp}
                  </h2>
                  <h2 className="text-xl">Web Link</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3 overflow-hidden">
                    :
                    <a
                      className="text-blue-500"
                      target="_blank"
                      rel="noreferrer"
                      href={webLink}
                      title={webLink}
                    >
                      {webLink}
                    </a>
                  </h2>
                  <h2 className="text-xl">Post Link</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3 overflow-hidden">
                    :
                    <a
                      className="text-blue-500"
                      target="_blank"
                      rel="noreferrer"
                      href={pageLink}
                      title={pageLink}
                    >
                      {pageLink}
                    </a>
                  </h2>
                  <h2 className="text-xl">Amount</h2>
                  <h2 className="text-xl font-bold col-span-2 md:col-span-3">
                    : {amount}
                  </h2>
                </div>
              </div>
            </div>
          )}
          <h2 className="text-xl text-end">
            Status{" "}
            {status === "pending" && (
              <span className="text-yellow-400">pending</span>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
