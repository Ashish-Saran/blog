import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation } from "react-router";
import "../css/singlepost.css";
import Loader from "./Loader";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      const res = await axios.get("//localhost:3001/posts/" + path);
      setPost(res.data);
      setLoading(false);
    };
    getPost();
  }, [path]);
  console.log(post, "frm singlepost");
  return (
    <>
      <Navbar />
      {loading ? (
        <div className="pageLoading">
          <Loader />
        </div>
      ) : null}
      <div className="singlePost">
        <img
          src={post.image}
          alt=""
          style={{
            height: "350px",
          }}
        />
        <div
          className="excerptDiv"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </>
  );
};

export default SinglePost;
