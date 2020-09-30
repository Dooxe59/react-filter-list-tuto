import React from "react";

import "./searchBar.css";

const SearchBar = ({
  showProductInStock,
  filterSearchValue,
  handleInputTextChange,
  handleInputCheckboxChange,
}) => {
  return (
    <div className="search-bar">
      <form>
        <label>
          <input
            name="filterSearchValue"
            type="text"
            placeholder="Search..."
            value={filterSearchValue}
            onChange={handleInputTextChange}
          />
        </label>
        <br />
        <label>
          <input
            name="showProductInStock"
            type="checkbox"
            checked={showProductInStock}
            onChange={handleInputCheckboxChange}
          />
          Only show products in stock :
        </label>
      </form>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
