import React from "react";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import "../css/homepage.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="sidebar">
        <Sidebar />
      </div>
      <main className="mainSection">
        <Posts />
      </main>
    </div>
  );
};

export default Home;
