import React from "react";
import { useQuery } from "react-query";
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
        Explore trending categories on Freepik
      </h2>
      <p className="text-lg text-center mt-3 text-gray-600">
        Check what's popular on Freepik and make your project look trendy and
        professional.
      </p>
      <div className="m-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 2xl:mx-40">
        {[...update]
          .reverse()
          .slice(0, 6)
          .map((u) => (
            <BlogCart u={u} />
          ))}
      </div>
      <div className="text-center mb-10">
        <PrimaryButton>See More Update</PrimaryButton>
      </div>
    </div>
  );
};

export default Blog;
