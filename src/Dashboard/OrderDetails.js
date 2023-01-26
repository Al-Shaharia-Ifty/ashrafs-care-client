import React, { useContext } from "react";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Shared/Loading";

const OrderDetails = () => {
  const { userInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const {
    data: details,
    isLoading,
    refetch,
  } = useQuery({
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
  if (isLoading || loading) {
    return <Loading />;
  }
  const {
    _id,
    amount,
    audience,
    boostDay,
    businessAddress,
    businessCategory,
    BusinessEmail,
    date,
    description,
    designName,
    dollar,
    email,
    gender,
    idLink,
    idName,
    img,
    like,
    location,
    maxAge,
    minAge,
    name,
    orderType,
    pageName,
    postLink,
    pageLink,
    phoneNumber,
    promote,
    status,
    whatsapp,
    webLink,
  } = details;
  console.log(details);
  const handleChange = (e) => {
    setLoading(true);
    const value = e.target.value;
    const changeState = { status: value };
    fetch(`http://localhost:5000/admin/orderStatus/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(changeState),
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        refetch();
      });
  };

  return (
    <div>
      <div className="min-h-screen p-0 lg:p-10">
        <div className="p-5 md:p-10 rounded-lg bg-white">
          <h2 className="text-2xl text-center">
            ID: <span className="font-bold">{_id}</span>
          </h2>
          <div className="divider"></div>
          <div className="block lg:flex justify-between">
            <div className="w-auto lg:w-1/2">
              <div className="grid lg:flex grid-cols-3">
                <h2 className="text-xl">Date</h2>
                <h2 className="text-xl col-span-2">: {date}</h2>
              </div>
            </div>
            <div className="w-auto lg:w-1/2">
              <div className="grid lg:flex grid-cols-3 lg:justify-end">
                <h2 className="text-xl">Status</h2>
                <h2 className="text-xl col-span-2">
                  :{" "}
                  {(status === "Pending" && (
                    <span className="text-yellow-400 font-semibold">
                      Pending
                    </span>
                  )) ||
                    (status !== "Pending" && status)}
                </h2>
                {userInfo.role === "admin" && (
                  <div className="col-span-3 flex justify-end">
                    <select
                      onChange={handleChange}
                      className="select select-bordered ml-4 w-36"
                    >
                      <option disabled selected>
                        Status
                      </option>
                      <option>In-review</option>
                      <option>Pending</option>
                      <option>Active</option>
                      <option>Paused</option>
                      <option>Complete</option>
                      <option>Rejected</option>
                      <option>Page Restricted</option>
                      <option>Not Delivering</option>
                      <option>Access Need</option>
                      <option>Full Access Need</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
          {orderType === "boost" && (
            <div className="lg:flex block">
              <div className="mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl font-bold">Name</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">: {name}</h2>
                  <h2 className="text-xl font-bold">Page Name</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {pageName}
                  </h2>
                  <h2 className="text-xl font-bold">Gender</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {gender}
                  </h2>
                  <h2 className="text-xl font-bold">Audience</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {audience}
                  </h2>
                  <h2 className="text-xl font-bold">Email</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {email}
                  </h2>
                  <h2 className="text-xl font-bold">Phone</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {phoneNumber}
                  </h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl font-bold">Dollar</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {dollar} dollar
                  </h2>
                  <h2 className="text-xl font-bold">Amount</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {amount} Tk
                  </h2>
                  <h2 className="text-xl font-bold">Boost Day</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {boostDay}
                  </h2>
                  <h2 className="text-xl font-bold">Age</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {minAge}-{maxAge}
                  </h2>
                  <h2 className="text-xl font-bold">Location</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {location}
                  </h2>
                  <h2 className="text-xl font-bold">Post Link</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3 overflow-hidden">
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
                  <h2 className="text-xl font-bold">Name</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">: {name}</h2>
                  <h2 className="text-xl font-bold">Page Name</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {pageName}
                  </h2>
                  <h2 className="text-xl font-bold">Gender</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {gender}
                  </h2>
                  <h2 className="text-xl font-bold">Audience</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {audience}
                  </h2>
                  <h2 className="text-xl font-bold">Email</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {email}
                  </h2>
                  <h2 className="text-xl font-bold">Phone</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {phoneNumber}
                  </h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl font-bold">Like</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    {like === "4080" && <p>: 5k Like</p>}
                    {like === "7752" && <p>: 10k Like 5% off</p>}
                    {like === "15015" && <p>: 20k Like 10% off</p>}
                    {like === "35200" && <p>: 50k Like 15% off</p>}
                    {like === "65100" && <p>: 100k Like 20% off</p>}
                  </h2>
                  <h2 className="text-xl font-bold">Amount</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {like} Tk
                  </h2>
                  <h2 className="text-xl font-bold">Age</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {minAge}-{maxAge}
                  </h2>
                  <h2 className="text-xl font-bold">Location</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {location}
                  </h2>
                  <h2 className="text-xl font-bold">Post Link</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3 overflow-hidden">
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
                  <h2 className="text-xl font-bold">Name</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">: {name}</h2>
                  <h2 className="text-xl font-bold">Page Name</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {pageName}
                  </h2>

                  <h2 className="text-xl font-bold">Phone</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {phoneNumber}
                  </h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl font-bold">Like</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    {like === "3060" && <p>: 5k Like</p>}
                    {like === "5814" && <p>: 10k Like 5% off</p>}
                    {like === "11016" && <p>: 20k Like 10% off</p>}
                    {like === "26928" && <p>: 50k Like 15% off</p>}
                    {like === "52020" && <p>: 100k Like 20% off</p>}
                  </h2>
                  <h2 className="text-xl font-bold">Amount</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {like} Tk
                  </h2>
                  <h2 className="text-xl font-bold">Post Link</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3 overflow-hidden">
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
                  <h2 className="text-xl font-bold">Page Name</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {pageName}
                  </h2>
                  <h2 className="text-xl font-bold">Email</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {email}
                  </h2>
                  <h2 className="text-xl font-bold">Phone</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {phoneNumber}
                  </h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl font-bold">Amount</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {amount} Tk
                  </h2>
                  <h2 className="text-xl font-bold">Page Link</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3 overflow-hidden">
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
                  <h2 className="text-xl font-bold">ID Name</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {idName}
                  </h2>
                  <h2 className="text-xl font-bold">Email</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {email}
                  </h2>
                  <h2 className="text-xl font-bold">Phone</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {phoneNumber}
                  </h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl font-bold">Amount</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {amount} Tk
                  </h2>
                  <h2 className="text-xl font-bold">Page Link</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3 overflow-hidden">
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
                  <h2 className="text-xl font-bold">Name</h2>
                  <h2 className="text-xl col-span-2">: {name}</h2>
                  <h2 className="text-xl font-bold">Page Name</h2>
                  <h2 className="text-xl col-span-2">: {pageName}</h2>
                  <h2 className="text-xl font-bold">Business Address</h2>
                  <h2 className="text-xl col-span-2">: {businessAddress}</h2>
                  <h2 className="text-lg">Business Category</h2>
                  <h2 className="text-xl col-span-2">: {businessCategory}</h2>
                  <h2 className="text-xl font-bold">Business Email</h2>
                  <h2 className="text-xl col-span-2">: {BusinessEmail}</h2>
                  <h2 className="text-xl font-bold">Phone</h2>
                  <h2 className="text-xl col-span-2">: {phoneNumber}</h2>
                </div>
              </div>
              <div className="lg:mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3 md:grid-cols-4">
                  <h2 className="text-xl font-bold">WhatsApp</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {whatsapp}
                  </h2>
                  <h2 className="text-xl font-bold">Web Link</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3 overflow-hidden">
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
                  <h2 className="text-xl font-bold">Post Link</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3 overflow-hidden">
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
                  <h2 className="text-xl font-bold">Amount</h2>
                  <h2 className="text-xl col-span-2 md:col-span-3">
                    : {amount} Tk
                  </h2>
                </div>
              </div>
            </div>
          )}
          {orderType === "graphic" && (
            <div className="lg:flex block">
              <div className="mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3">
                  <h2 className="text-xl font-bold">Name</h2>
                  <h2 className="text-xl col-span-2">: {name}</h2>
                  <h2 className="text-xl font-bold">Description</h2>
                  <h2 className="text-xl col-span-2 flex flex-wrap w-full">
                    : {description}
                  </h2>
                  <h2 className="text-xl font-bold">Email</h2>
                  <h2 className="text-xl col-span-2">: {email}</h2>
                  <h2 className="text-xl font-bold">Phone</h2>
                  <h2 className="text-xl col-span-2">: {phoneNumber}</h2>
                </div>
              </div>
              <div className="mt-5 w-full lg:w-1/2">
                <div className="grid grid-cols-3">
                  <h2 className="text-xl font-bold">Design name</h2>
                  <h2 className="text-xl col-span-2">: {designName}</h2>
                  <h2 className="text-xl font-bold">Amount</h2>
                  <h2 className="text-xl col-span-2">: {amount} Tk</h2>
                  <h2 className="text-xl font-bold">Sample</h2>
                  {img ? (
                    <PhotoProvider>
                      <PhotoView src={img}>
                        <img
                          className="col-span-2 rounded-md"
                          src={img}
                          alt=""
                        />
                      </PhotoView>
                    </PhotoProvider>
                  ) : (
                    <h2 className="text-xl col-span-2">: No Image Fount</h2>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
