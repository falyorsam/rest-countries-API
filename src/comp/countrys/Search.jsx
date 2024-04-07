import React from "react";

const Search = () => {
  return (
    <div className="search-bar">
      <div className="abs">
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" placeholder="Search for a country..." />
      </div>
    </div>
  );
};

export default Search;
