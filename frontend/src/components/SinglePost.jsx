import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import "../css/singlepost.css";
import Header from "./Header";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [updating, setUpdating] = useState(false);
  const { id } = useParams();

  const editor = useRef(null);

  const navigate = useNavigate();

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
  }, [id]);

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

  const config = {
    uploader: { insertImageAsBase64URI: true },
  };

  return (
    <>
      <Header />
      {loading ? (
        <div className="pageLoading">
          <Loader />
        </div>
      ) : null}

      <div className="singlePost">
        <button onClick={() => setUpdating(!updating)}>Edit Post</button>
        {updating ? (
          <div>
            <input
              type="text"
              name="title"
              id=""
              autoFocus={true}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <textarea
              name="excerpt"
              id=""
              cols="60"
              rows="3"
              placeholder="Excerpt"
              onChange={(e) => setExcerpt(e.target.value)}
              value={excerpt}
            ></textarea>
            <JoditEditor
              ref={editor}
              config={config}
              value={post.content}
              onChange={(newContent) => setContent(newContent)}
            />
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        ) : (
          <div className="contentMain">
            <button className="backBtn" onClick={() => navigate(-1)}>
              Back
            </button>
            <div
              className="contentDiv"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        )}
      </div>
    </>
  );
};

export default SinglePost;
