import React from "react";
import Post from "./Post";
import { useGlobalContext } from "../Context";
import InfiniteScroll from "react-infinite-scroll-component";

const Posts = () => {
  const { allPosts, fetchNextPage, hasNextPage } = useGlobalContext();
  return (
    <InfiniteScroll 
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4 style={{ textAlign: 'center' }}>Loading more posts....</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>All posts loaded. </b>
        </p>
      }
      >
      <section className="posts">
        {allPosts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </section>  
    </InfiniteScroll>
  );
};

export default Posts;
