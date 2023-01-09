import React from "react";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="homePage">
      <Posts />
      <Sidebar />
    </div>
  );
};

export default Home;
