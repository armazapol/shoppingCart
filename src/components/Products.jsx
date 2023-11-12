import React from "react";
import HeaderProducts from "./HeaderProducts";
import ProductList from "./ProductList";

const Products = ({ products }) => {
  return (
    <div className=" flex flex-col gap-10">
      <HeaderProducts />
      <ProductList products={products} />
    </div>
  );
};

export default Products;
