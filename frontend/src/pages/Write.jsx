import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import "../css/write.css";

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const editor = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      excerpt,
      content,
      category,
      image,
    };
    await axios.post("//localhost:3001/posts", newPost);
  };

  return (
    <div className="write">
      <form onSubmit={handleSubmit} encType="multipart/form-data" method="post">
        <input
          type="text"
          name="title"
          id=""
          autoFocus={true}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          name="category"
          id=""
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
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
        <label htmlFor="uploadImage">
          Upload Image
          <input
            type="file"
            name="image"
            id=""
            accept=".jpg, .jpeg, .png"
            onChange={(e) =>
              setImage(window.URL.createObjectURL(e.target.files[0]))
            }
          />
        </label>
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
