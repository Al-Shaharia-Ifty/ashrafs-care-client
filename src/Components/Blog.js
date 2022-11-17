import React from "react";
import BlogCart from "./BlogCart";

const Blog = () => {
  return (
    <div>
      <h2 className="text-3xl mt-10 text-center">
        Explore trending categories on Freepik
      </h2>
      <p className="text-lg text-center mt-3 text-gray-600">
        Check what's popular on Freepik and make your project look trendy and
        professional.
      </p>
      <BlogCart />
    </div>
  );
};

export default Blog;
