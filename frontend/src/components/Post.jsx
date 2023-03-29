import React from "react";
import { Link } from "react-router-dom";
import "../css/posts.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postInfo">
        <span className="postTitle">{post.title}</span>
        <hr />
        <p className="postExcerpt">{post.excerpt}</p>
      </div>
      <Link to="/" className="readMoreBtn">
        Read more
      </Link>
    </div>
  );
};

export default Post;
