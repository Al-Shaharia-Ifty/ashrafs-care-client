import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import BlogCart from "./BlogCart";
import PrimaryButton from "./PrimaryButton";

const Blog = () => {
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
      <h2 className="text-3xl mt-10 text-center text-[#166534]">
        Updates on some of our recent work
      </h2>
      <p className="text-lg text-center mt-3 text-gray-600">
        These designs will take your marketing a step further
      </p>
      <div className="m-10 hidden lg:grid grid-cols-3 gap-4 2xl:mx-40">
        {[...update]
          .reverse()
          .slice(0, 6)
          .map((u) => (
            <BlogCart u={u} />
          ))}
      </div>
      <div className="m-10 hidden md:grid lg:hidden grid-cols-2 gap-4 2xl:mx-40">
        {[...update]
          .reverse()
          .slice(0, 4)
          .map((u) => (
            <BlogCart u={u} />
          ))}
      </div>
      <div className="m-10 grid md:hidden grid-cols-1 gap-4 2xl:mx-40">
        {[...update]
          .reverse()
          .slice(0, 3)
          .map((u) => (
            <BlogCart u={u} />
          ))}
      </div>
      <div className="text-center mb-10">
        <Link to={"../all-update"}>
          <PrimaryButton>See More Update</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
