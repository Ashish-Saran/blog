import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import "../css/write.css";

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const editor = useRef(null);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
  };

  console.log(image, "base64 of pic");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      await axios.post("//localhost:3001/upload", image);
    } else {
      return;
    }
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
            id="uploadImage"
            accept=".jpg, .jpeg, .png"
            onChange={handleFileUpload}
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
