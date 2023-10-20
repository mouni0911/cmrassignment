import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import "./Paginationdata.css";

const Paginationdata = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Make sure to pass an empty dependency array here

  // Calculate the current items to display based on the currentPage and itemsPerPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="service">
      {currentItems.length >= 1 ? (
        <div className="grid-container">
          {" "}
          {/* Apply grid layout */}
          {currentItems.map((post) => (
            <div className="grid-item" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Data not loaded</p>
      )}

      <Pagination
        data={data}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Paginationdata;
