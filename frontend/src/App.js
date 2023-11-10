import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Write from "./pages/Write";
import Home from "./pages/Home";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/write" element={<Write />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
