import React from "react";
// import { AiOutlineSearch } from "react-icons/ai";
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
      <div className="bg-gradient-to-r from-[#317D3C] via-[#046738] to-[#337D3F] pt-20 pb-10">
        <h2 className="text-white md:text-3xl text-2xl text-center font-bold mt-10">
          All marketing solutions in one place
        </h2>
        <h4 className="text-white text-center text-md lg:text-xl mt-5">
          We provide advanced Facebook promotion and digital marketing services.
          find and take service.
        </h4>
        <div>
          <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            responsive={responsive}
            className="pt-16 pb-5 text-white text-center z-10"
          >
            {courses.map((c) => (
              <div key={c._id} className="lg:hover:scale-110 duration-300">
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

/*
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
*/
