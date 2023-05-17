import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/singlepost.css";
import Loader from "./Loader";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const [updating, setUpdating] = useState(false);
  const { id } = useParams();

  const editor = useRef(null);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      const res = await axios.get(`//localhost:3005/posts/${id}`);
      setPost(res.data);
      setLoading(false);
    };
    getPost();
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put(`//localhost:3005/posts/${id}`, {
        content,
      });
      setUpdating(false);
    } catch (err) {
      console.log(err);
    }
  };

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
        <div className="editPost">
          <button onClick={() => setUpdating(!updating)}>Edit Post</button>
        </div>
        {updating ? (
          <JoditEditor
            ref={editor}
            //config={config}
            value={post.content}
            onChange={(newContent) => setContent(newContent)}
          />
        ) : (
          <div
            className="contentDiv"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        )}
        {updating && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </>
  );
};

export default SinglePost;
