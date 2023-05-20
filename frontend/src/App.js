// import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import SinglePost from "./components/SinglePost";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/write" element={<Write />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
