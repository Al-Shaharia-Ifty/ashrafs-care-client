import React from "react";
import Blog from "../Components/Blog";
import Community from "../Components/Community";
import Header from "../Components/Header";
import Profile from "../Components/Profile";
import QNA from "../Components/QNA";
import Review from "../Components/Review";
import Support from "../Components/Support";

const Home = () => {
  return (
    <div className="text-black">
      <Header />
      <Blog />
      <Profile />
      <Community />
      <Review />
      <QNA />
      <Support />
    </div>
  );
};

export default Home;
