import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import axios from "axios";
import { useLocation } from "react-router";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import "../css/homepage.css";

const Home = () => {
  const queryClient = useQueryClient();
  const [posts, setPosts] = useState([]);
  const [cat, setCat] = useState("");
  const { search } = useLocation();

  const getPosts = async () => {
    const response = await axios.get("//localhost:3001/posts");
    return response.data;
  };

  const { data, error, isLoading } = useQuery(["posts"], getPosts, {
    select: (posts) => posts.filter((post) => post.category.includes(cat)),
  });
  console.log(data, "data");

  const handleCatSelect = (e) => {
    setCat(e.target.value);
  };

  return (
    <main>
      <Navbar handleCatSelect={handleCatSelect} cat={cat} />
      {isLoading ? (
        <div className="pageLoading">
          <Loader />
        </div>
      ) : null}
      <Posts posts={data} />
    </main>
  );
};

export default Home;
