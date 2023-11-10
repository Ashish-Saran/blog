import React from "react";
import Post from "./Post";
import { useGlobalContext } from "../Context";

const Posts = () => {
  const { data } = useGlobalContext();
  return (
    <section className="posts">
      {data?.posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </section>
  );
};

export default Posts;
