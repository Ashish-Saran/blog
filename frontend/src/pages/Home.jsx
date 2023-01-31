import React from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import "../css/homepage.css";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Posts />
    </main>
  );
};

export default Home;
