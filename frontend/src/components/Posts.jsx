import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <section className="posts">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </section>
  );
};

export default Posts;
