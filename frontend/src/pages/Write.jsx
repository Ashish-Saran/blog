import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../css/write.css";

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [featured, setFeatured] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      await axios.post("//localhost:3005/upload", image);
    }
    // else {
    //   return;
    // }
    const newPost = {
      title,
      excerpt,
      content,
      category,
      featured,
      image,
    };
    await axios.post("//localhost:3005/posts", newPost);
  };

  const config = {
    uploader: { insertImageAsBase64URI: true },
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
        <label htmlFor="categories">Select Category</label>
        <select
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value=""></option>
          <option value="natural-sugar">Natural Sugar</option>
          <option value="artificial-sweetener">Artificial Sweetener</option>
          <option value="sugar-alcohol">Sugar Alcohol</option>
          <option value="novel-sweetener">Novel Sweetener</option>
        </select>
        <label htmlFor="featured">Featured</label>
        <select
          name="featured"
          onChange={(e) => setFeatured(e.target.value)}
          value={featured}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
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
          //config={config}
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
