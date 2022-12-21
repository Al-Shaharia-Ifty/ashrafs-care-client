import React from "react";
import Blog from "../Components/Blog";
import Community from "../Components/Community";
import Header from "../Components/Header";
import OurStory from "../Components/OurStory";
import Profile from "../Components/Profile";
import QNA from "../Components/QNA";
import Review from "../Components/Review";
import Support from "../Components/Support";

const Home = () => {
  return (
    <div>
      <Header />
      <Blog />
      <Profile />
      <Community />
      <Review />
      <OurStory />
      <QNA />
      <Support />
    </div>
  );
};

export default Home;
