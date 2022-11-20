import React from "react";
import BlogCart from "./BlogCart";
import PrimaryButton from "./PrimaryButton";

const Blog = () => {
  return (
    <div>
      <h2 className="text-3xl mt-10 text-center text-[#166534]">
        Explore trending categories on Freepik
      </h2>
      <p className="text-lg text-center mt-3 text-gray-600">
        Check what's popular on Freepik and make your project look trendy and
        professional.
      </p>
      <div className="m-10 grid grid-cols-3 gap-4 2xl:mx-40">
        <BlogCart />
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View More..</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View More..</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-10">
        <PrimaryButton>See More Update</PrimaryButton>
      </div>
    </div>
  );
};

export default Blog;
