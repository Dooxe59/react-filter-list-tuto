import React from "react";

import "./productCategoryRow.css";

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
