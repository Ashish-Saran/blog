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
  const { search } = useLocation();

  const getPosts = async () => {
    const response = await axios.get("//localhost:3001/posts");
    return response.data;
  };

  const { data, error, isLoading } = useQuery(["posts"], getPosts);
  console.log(data, "data");

  return (
    <main>
      <Navbar />
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
