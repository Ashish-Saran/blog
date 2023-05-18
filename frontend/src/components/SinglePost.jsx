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
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [updating, setUpdating] = useState(false);
  const { id } = useParams();

  const editor = useRef(null);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      const res = await axios.get(`//localhost:3005/posts/${id}`);
      setPost(res.data);
      setTitle(res.data.title);
      setExcerpt(res.data.excerpt);
      setLoading(false);
    };
    getPost();
  }, []);

  console.log(title);

  const handleUpdate = async () => {
    try {
      await axios.put(`//localhost:3005/posts/${id}`, {
        title,
        excerpt,
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
        {updating && (
          <input
            type="text"
            name="title"
            id=""
            autoFocus={true}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        )}
        {updating && (
          <textarea
            name="excerpt"
            id=""
            cols="60"
            rows="3"
            placeholder="Excerpt"
            onChange={(e) => setExcerpt(e.target.value)}
            value={excerpt}
          ></textarea>
        )}
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
