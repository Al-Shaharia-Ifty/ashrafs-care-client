import React from "react";
import { Link } from "react-router-dom";

const BlogCart = ({ u }) => {
  const { _id, heading, img, details } = u;
  return (
    <div key={_id}>
      <Link
        to={`../blog/${_id}`}
        className="card card-compact bg-base-100 hover:-translate-y-1 hover:shadow-lg duration-300"
      >
        <figure>
          <img className="w-full  object-cover" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{heading}</h2>
          <p className="text-lg">
            {details.length >= 100 ? details.slice(0, 100) : details}...{" "}
            <i>see more</i>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCart;
// lg:h-[295px] md:h-[225px] h-[230px]
