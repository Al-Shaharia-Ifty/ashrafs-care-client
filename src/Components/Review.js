import React from "react";
import Carousel from "react-multi-carousel";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Review = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1660 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1660, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { isLoading, data: ratting } = useQuery({
    queryKey: "ratting",
    queryFn: () =>
      fetch("https://ashrafs-servier.vercel.app/ratting").then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-4xl text-center text-[#166534]">
          Our Coustomer Reviews
        </h2>
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          responsive={responsive}
          className="mx-10 2xl:mx-36 mt-16 text-center z-10"
        >
          {ratting?.map((r, i) => (
            <div key={i} className="text-center mx-5">
              <div className="flex justify-center">
                <img className="h-28 rounded-full" src={r?.img} alt="" />
              </div>
              <h2 className="text-xl font-medium my-3">{r?.userName} </h2>
              <p>{r?.message}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
