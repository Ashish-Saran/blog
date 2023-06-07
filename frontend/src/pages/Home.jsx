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
import Pagination from "../components/Pagination";

const Home = () => {
  const queryClient = useQueryClient();
  const [pageNumber, setPageNumber] = useState(0);
  // const [numberOfPages, setNumberOfPages] = useState(0);
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
      refetchOnWindowFocus: false,
    });

  console.log(data);

  const numberOfPages = data?.totalPages;
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

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
          <div key={index} className="post">
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
      <Pagination
        data={data}
        pageNumber={pageNumber}
        pages={pages}
        setPageNumber={setPageNumber}
        isFetching={isFetching}
        isPreviousData={isPreviousData}
      />
    </main>
  );
};

export default Home;
