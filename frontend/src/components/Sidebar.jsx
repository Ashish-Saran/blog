import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { categories } from "../categories";
import "../css/sidebar.css";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <nav className="navigation">
      <div className="navigationTitle">
        <h1>SugarIt</h1>
      </div>
      <button
        className="menuController"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <FaBars />
      </button>
      {activeMenu && (
        <div className="links">
          {categories.map((cat, index) => {
            return <NavLink key={index}>{cat.name}</NavLink>;
          })}
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
