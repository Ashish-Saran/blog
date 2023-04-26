import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/singlepost.css";
import Loader from "./Loader";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      const res = await axios.get(`//localhost:3005/posts/${id}`);
      setPost(res.data);
      setLoading(false);
    };
    getPost();
  }, []);
  return (
    <>
      <Navbar />
      {loading ? (
        <div className="pageLoading">
          <Loader />
        </div>
      ) : null}
      <div className="singlePost">
        {post.image && (
          <img
            src={post.image}
            alt=""
            style={{
              height: "350px",
            }}
          />
        )}
        <div
          className="excerptDiv"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </>
  );
};

export default SinglePost;
