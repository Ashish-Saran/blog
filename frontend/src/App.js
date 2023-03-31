// import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App;
