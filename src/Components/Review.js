import React from "react";
import Carousel from "react-multi-carousel";
import user1 from "../Assets/user images/profile-1.jpg";
import user2 from "../Assets/user images/profile-2.jpg";
import user3 from "../Assets/user images/profile-3.jpg";
import user4 from "../Assets/user images/profile-4.jpg";

const Review = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1660 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1660, min: 1024 },
      items: 2,
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
          <div className="text-center mx-5">
            <div className="flex justify-center">
              <img className="h-28 rounded-full" src={user1} alt="" />
            </div>
            <h2 className="text-xl font-medium my-3">Josh Vasquez </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              sequi, consequuntur eius molestias architecto nisi expedita
              quaerat officia, exercitationem dicta sint dolorem doloribus
              animi, est nemo cumque? Sequi, provident neque!
            </p>
          </div>
          <div className="text-center mx-5">
            <div className="flex justify-center">
              <img className="h-28 rounded-full" src={user2} alt="" />
            </div>
            <h2 className="text-xl font-medium my-3">Ron Klein </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              sequi, consequuntur eius molestias architecto nisi expedita
              quaerat officia, exercitationem dicta sint dolorem doloribus
              animi, est nemo cumque? Sequi, provident neque!
            </p>
          </div>
          <div className="text-center mx-5">
            <div className="flex justify-center">
              <img className="h-28 rounded-full" src={user3} alt="" />
            </div>
            <h2 className="text-xl font-medium my-3">Brittany Knight </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              sequi, consequuntur eius molestias architecto nisi expedita
              quaerat officia, exercitationem dicta sint dolorem doloribus
              animi, est nemo cumque? Sequi, provident neque!
            </p>
          </div>
          <div className="text-center mx-5">
            <div className="flex justify-center">
              <img className="h-28 rounded-full" src={user4} alt="" />
            </div>
            <h2 className="text-xl font-medium my-3">Gerard Lopez </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              sequi, consequuntur eius molestias architecto nisi expedita
              quaerat officia, exercitationem dicta sint dolorem doloribus
              animi, est nemo cumque? Sequi, provident neque!
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
