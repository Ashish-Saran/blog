import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>SugarIt</Link>
    </header>
  );
};

export default Header;
