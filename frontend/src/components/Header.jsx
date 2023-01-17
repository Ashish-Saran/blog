import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>SugarIt</h1>
      </header>
    </>
  );
};

export default Header;
