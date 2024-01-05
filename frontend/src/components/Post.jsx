import React from "react";
import { Link } from "react-router-dom";
import "../css/posts.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postInfo">
        <span style={{ fontWeight: "bold" }} className="postTitle">
          {post.title}
        </span>
        <hr />
        <p className="postExcerpt">{post.excerpt}</p>
      </div>
      <Link to={`/post/${post._id}`} className="readMoreBtn">
        Learn more
      </Link>
    </div>
  );
};

export default Post;
