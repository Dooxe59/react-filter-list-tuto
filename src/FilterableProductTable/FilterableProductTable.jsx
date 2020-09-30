import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

import "./filterableProductTable.css";

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const FilterableProductTable = () => {
  const [showProductInStock, setShowProductInStock] = useState(false);
  const [filterSearchValue, setFilterSearchValue] = useState("");

  const handleInputTextChange = (event) => {
    setFilterSearchValue(event?.target?.value);
  };

  const handleInputCheckboxChange = (event) => {
    setShowProductInStock(event?.target?.checked);
  };

  return (
    <div className="filterable-product-table">
      <SearchBar
        showProductInStock={showProductInStock}
        filterSearchValue={filterSearchValue}
        handleInputTextChange={(event) => handleInputTextChange(event)}
        handleInputCheckboxChange={(event) => handleInputCheckboxChange(event)}
      ></SearchBar>
      <ProductTable
        products={PRODUCTS}
        filterSearchValue={filterSearchValue}
        showProductInStock={showProductInStock}
      ></ProductTable>
    </div>
  );
};

FilterableProductTable.propTypes = {};

export default FilterableProductTable;
