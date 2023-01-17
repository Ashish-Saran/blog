// import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </>
  );
}

export default App;
