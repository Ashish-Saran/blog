import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useLocation } from "react-router";
import "../css/homepage.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("//localhost:3001/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <main>
      <Navbar />
      <Posts posts={posts} />
    </main>
  );
};

export default Home;
