import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import "../css/homepage.css";
import Pagination from "../components/Pagination";

const Home = () => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [cat, setCat] = useState("");
  const { search } = useLocation();

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  const fetchPosts = async () => {
    setLoading(true);
    const response = await fetch(`//localhost:3005/posts?page=${pageNumber}`);
    const fetchedItems = await response.json().then(({ totalPages, posts }) => {
      setPosts(posts);
      setNumberOfPages(totalPages);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, [pageNumber]);

  console.log(posts);

  const handleCatSelect = (e) => {
    setCat(e.target.value);
  };

  return (
    <main>
      <Navbar handleCatSelect={handleCatSelect} cat={cat} />
      {loading ? (
        <div className="pageLoading">
          <Loader />
        </div>
      ) : null}
      <Posts posts={posts} />
      <Pagination
        pageNumber={pageNumber}
        gotoPrevious={gotoPrevious}
        gotoNext={gotoNext}
        pages={pages}
        setPageNumber={setPageNumber}
      />
    </main>
  );
};

export default Home;
