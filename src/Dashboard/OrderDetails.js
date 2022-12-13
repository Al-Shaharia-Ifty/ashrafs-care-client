import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const OrderDetails = () => {
  const params = useParams();
  const { data: details, isLoading } = useQuery({
    queryKey: ["details"],
    queryFn: () =>
      fetch(`http://localhost:5000/order-details/${params.id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
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
    name,
    email,
    phoneNumber,
    orderType,
    date,
    status,
  } = details;
  console.log(details);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="min-h-screen p-10">
        <div className="p-10 rounded-lg bg-white">
          <h2 className="text-2xl text-center">
            ID: <span className="font-bold">{_id}</span>
          </h2>
          <div className="divider"></div>
          <h2 className="text-xl">Date: {date}</h2>
          <div className="md:flex block">
            <div className="mt-5 w-1/2">
              <h2 className="text-xl">Name: {name}</h2>
              <h2 className="text-xl">Page Name: {pageName}</h2>
              <h2 className="text-xl">Gender: {gender}</h2>
              <h2 className="text-xl">Audience: {audience}</h2>
              <h2 className="text-xl">Phone: {phoneNumber}</h2>
            </div>
            <div className="w-1/2">
              <h2 className="text-xl text-end">
                Amount: {dollarAmount} Dollar
              </h2>
              <h2 className="text-xl text-end">Boost Day: {boostDay} days </h2>
              <h2 className="text-xl text-end">Audience: {audience} </h2>
              <h2 className="text-xl text-end">
                Age: {minAge}-{maxAge}
              </h2>
              <h2 className="text-xl text-end">Location: {location}</h2>
              <h2 className="text-xl text-end">
                Post Link:{" "}
                <a target="_blank" rel="noreferrer" href={postLink}>
                  {postLink}
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
