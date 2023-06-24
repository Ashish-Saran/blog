import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Pagination from "../components/Pagination";
import { useGlobalContext } from "../Context";
import "../css/posts.css";

const Home = () => {
  const [cat, setCat] = useState("");
  const { search } = useLocation();
  const {
    isLoading,
    data,
    isFetching,
    isPreviousData,
    pageNumber,
    setPageNumber,
  } = useGlobalContext();

  const handleCatSelect = (e) => {
    setCat(e.target.value);
  };

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
