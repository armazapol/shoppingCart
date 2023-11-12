import React from "react";
import Product from "./Product";
import { useCart } from "../hooks/useCart.js";

const ProductList = ({ products }) => {
  const { cart } = useCart();
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <div>
      {products.length === 0 && (
        <p className="text-center">No se encontraron productos</p>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <Product
              product={product}
              key={product.id}
              isProductInCart={isProductInCart}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
