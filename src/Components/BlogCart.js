import React from "react";

const BlogCart = ({ u }) => {
  const { _id, heading, img, details } = u;
  return (
    <div key={_id}>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full lg:h-[295px] md:h-[225px] h-[230px] object-cover"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{heading}</h2>
          <p className="text-lg">
            {details.length >= 100 ? details.slice(0, 100) : details}...
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
