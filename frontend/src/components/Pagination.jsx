import React from "react";
import { NavLink } from "react-router-dom";
import "../css/pagination.css";

const Pagination = ({
  pageNumber,
  gotoNext,
  gotoPrevious,
  pages,
  setPageNumber,
}) => {
  return (
    <div className="btn-container">
      {/* <button
          className="prev-btn"
          onClick={gotoPrevious}
          disabled={pageNumber === 0}
        >
          <span>Previous</span>
        </button> */}
      {pages.map((pageIndex, index) => (
        <button
          className={`page-btn ${index === pageNumber ? "active-btn" : null}`}
          key={index}
          onClick={() => setPageNumber(pageIndex)}
        >
          <span>{pageIndex + 1}</span>
        </button>
      ))}
      {/* <button className="next-btn" onClick={gotoNext}>
          <span>Next</span>
        </button> */}
    </div>
  );
};

export default Pagination;
