import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import "../css/pagination.css";

const Pagination = ({
  data,
  pageNumber,
  gotoNext,
  gotoPrevious,
  pages,
  setPageNumber,
  isFetching,
}) => {
  return (
    <>
      <div className="btn-container">
        {pages.map((pageIndex, index) => (
          <button
            className={`page-btn ${index === pageNumber ? "active-btn" : null}`}
            key={index}
            onClick={() => setPageNumber(pageIndex)}
          >
            <span>{pageIndex + 1}</span>
          </button>
        ))}
      </div>
      {isFetching ? (
        <div className="pageLoading">
          <Loader />
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
