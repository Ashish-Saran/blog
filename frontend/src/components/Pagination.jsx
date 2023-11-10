import React from "react";
import Loader from "../components/Loader";
import "../css/pagination.css";
import { useGlobalContext } from "../Context";

const Pagination = () => {
  const { data, isFetching, pageNumber, setPageNumber } = useGlobalContext();

  const numberOfPages = data?.totalPages;
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
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
