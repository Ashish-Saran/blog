import React from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../categories";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          explicabo earum voluptas voluptatibus natus obcaecati hic quidem dicta
          magnam enim laudantium iusto quisquam autem recusandae fugit repellat,
          aut quis saepe.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <div className="sidebarLinks">
          <NavLink>All</NavLink>
          {categories.map((cat, index) => {
            return <NavLink key={index}>{cat.name}</NavLink>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
