import React from "react";
import "../css/category.css";
import { categories } from "../categories";

const Category = ({ cat, handleCatSelect }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            name={category.name}
            onClick={handleCatSelect}
            value={category.value}
            className={`categoryBtn ${category.value === cat && "activeBtn"}`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
