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
      category,
      content,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      try {
        await axios.post("localhost:3001/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("localhost:3001/posts", newPost);
    } catch (err) {}
  };

  return (
    <div className="write">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id=""
          autoFocus={true}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="category"
          id=""
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          name="excerpt"
          id=""
          cols="60"
          rows="3"
          placeholder="Excerpt"
          onChange={(e) => setExcerpt(e.target.value)}
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
