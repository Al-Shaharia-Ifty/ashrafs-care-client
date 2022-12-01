import React from "react";
import { useQuery } from "react-query";
import BlogCart from "../Components/BlogCart";
import Loading from "../Shared/Loading";

const AllUpdate = () => {
  const { isLoading, data: update } = useQuery({
    queryKey: "update",
    queryFn: () =>
      fetch("https://ashrafs-servier.vercel.app/update").then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="pt-20 bg-green-800"></div>
      <h2 className="text-3xl text-center my-5">All Update</h2>
      <div className="grid lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mx-10 2xl:mx-36 mb-10">
        {[...update].reverse().map((u) => (
          <BlogCart u={u} />
        ))}
      </div>
    </div>
  );
};

export default AllUpdate;
