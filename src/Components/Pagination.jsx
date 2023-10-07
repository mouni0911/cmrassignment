import React from "react";
import "./Pagination.css";

const Pagination = ({ data, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(data.length / 10);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="page-list">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <button onClick={() => onPageChange(page)}>{page}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
