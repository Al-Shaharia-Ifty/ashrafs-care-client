import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Header = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1660 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 1660, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  const { isLoading, data: courses } = useQuery({
    queryKey: "courses",
    queryFn: () =>
      fetch("https://ashrafs-servier.vercel.app/course").then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 pt-20 pb-10">
        <h2 className="text-white text-3xl text-center font-bold mt-10">
          All the assets you need, in one place
        </h2>
        <h4 className="text-white text-center text-xl mt-5">
          Find and download the best high-quality photos, designs, and mockups
        </h4>
        <form className="mt-5 mx-5 flex justify-center">
          <input
            type="text"
            name=""
            className="w-full lg:w-3/5 rounded-l-full input input-bordered"
          />
          <button className="bg-white rounded-r-full text-2xl px-3 text-black">
            <AiOutlineSearch />
          </button>
        </form>
        <div>
          <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            responsive={responsive}
            className="mx-10 mt-16 text-white text-center z-10"
          >
            {courses.map((c) => (
              <div>
                <div className="flex justify-center">
                  <img
                    className="rounded-full w-3/5 border-white p-1 border-[3px]"
                    src={c.img}
                    alt=""
                  />
                </div>
                <p className="text-center mt-3 text-sm">{c.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Header;
