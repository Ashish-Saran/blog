import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
//import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import "../css/posts.css";

const Home = () => {
  const queryClient = useQueryClient();
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [cat, setCat] = useState("");
  const { search } = useLocation();

  const handleCatSelect = (e) => {
    setCat(e.target.value);
  };

  const fetchProjects = (pageNumber = 0) =>
    fetch(`//localhost:3005/posts?page=${pageNumber}`).then((res) =>
      res.json()
    );

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["articles", pageNumber],
      queryFn: () => fetchProjects(pageNumber),
      keepPreviousData: true,
    });

  console.log(data);

  return (
    <main>
      <Navbar handleCatSelect={handleCatSelect} cat={cat} />
      {isLoading ? (
        <div className="pageLoading">
          <Loader />
        </div>
      ) : null}
      <section className="posts">
        {data?.posts.map((post, index) => (
          <div className="post">
            <div className="postInfo">
              <span style={{ fontWeight: "bold" }} className="postTitle">
                {post.title}
              </span>
              <hr />
              <img src={post.image} alt="" />
              <p className="postExcerpt">{post.excerpt}</p>
            </div>
            <Link to={`/post/${post._id}`} className="readMoreBtn">
              Read more
            </Link>
          </div>
        ))}
      </section>
      <div className="pagination">
        {/* <span>Current Page: {pageNumber + 1}</span> */}
        <button
          onClick={() => {
            setPageNumber((old) => old + 1);
          }}
          disabled={pageNumber === data?.totalPages - 1}
        >
          Next Page
        </button>
        <button
          onClick={() => setPageNumber((old) => Math.max(old - 1, 0))}
          disabled={pageNumber === 0}
        >
          Previous Page
        </button>{" "}
      </div>
    </main>
  );
};

export default Home;
