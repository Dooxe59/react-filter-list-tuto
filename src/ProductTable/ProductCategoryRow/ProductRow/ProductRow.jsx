import React from "react";

import "./productRow.css";

const ProductRow = ({ product }) => {
  const productName = product.stocked ? (
    <td>{product.name}</td>
  ) : (
    <td style={{ color: "red" }}>{product.name}</td>
  );

  return (
    <tr className="product-row">
      {productName}
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
