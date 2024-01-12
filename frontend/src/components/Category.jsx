import React from "react";
import "../css/category.css";
import { categories } from "../categories";
import { useGlobalContext } from "../Context";
import Loader from "./Loader";

const Category = () => {
  const { cat, handleCatSelect, isFetching } = useGlobalContext();
  return (
    <div className="categories">
      {isFetching ? (
        <div className="pageLoading">
          <Loader />
        </div>
      ) : null}
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
