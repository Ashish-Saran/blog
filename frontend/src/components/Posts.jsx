import React from "react";
import Post from "./Post";

const Posts = (data) => {
  return (
    <section className="posts">
      {data?.posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </section>
  );
};

export default Posts;
