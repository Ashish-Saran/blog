import React from "react";
import "../css/posts.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postInfo">
        <span className="postTitle">Jingama jigil hudil boo</span>
        <hr />
        <p className="postExcerpt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at
          repellat explicabo quisquam, illo fugit itaque odit similique est
          maxime aliquid tempore quasi sequi modi veniam deserunt amet dolore
          corrupti?
        </p>
      </div>
      <button className="readMoreBtn">Read more</button>
    </div>
  );
};

export default Post;
