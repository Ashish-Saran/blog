import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../linksData";
import "../css/navbar.css";
// import logo from "./logo.svg";

const Navbar = ({ cat, handleCatSelect }) => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect().height;
  //   if (showLinks) {
  //     linksContainerRef.current.style.height = `${linksHeight}px`;
  //   } else {
  //     linksContainerRef.current.style.height = "0px";
  //   }
  // }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h1>SugarIt</h1>
          {/* <img src={logo} className="logo" alt="logo" /> */}
          {/* <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button> */}
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
          {/* Select Category:{" "}
          <select
            name="categories"
            id="categories"
            onChange={handleCatSelect}
            value={cat}
          >
            <option value="">All Articles</option>
            <option value="natural-sugar">Natural Sugar</option>
            <option value="artificial-sweetener">Artificial Sweetener</option>
            <option value="novel-sweetener">Novel Sweetener</option>
            <option value="sugar-alcohol">Sugar Alcohol</option>
          </select> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
