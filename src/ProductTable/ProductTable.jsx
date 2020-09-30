import React from "react";

import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductCategoryRow/ProductRow/ProductRow";

import "./productTable.css";

const ProductTable = ({ products, filterSearchValue, showProductInStock }) => {
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (showProductInStock && !product.stocked) return;
    if (product?.name?.indexOf(filterSearchValue) === -1) return;

    if (lastCategory !== product.category) {
      lastCategory = product.category;
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(<ProductRow product={product} key={product.name} />);
  });

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
