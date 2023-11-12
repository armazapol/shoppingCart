import React from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { Button } from "@nextui-org/react";
import { useCart } from "../hooks/useCart.js";

const Product = ({ product, isProductInCart }) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <li className="p-2 lg:p-5 shadow-md rounded-md flex flex-col gap-2 lg:gap-5 bg-gray-100">
      <img
        className="rounded-md cover object-cover aspect-video"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="text-center">
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <div className="flex justify-center">
        <Button
          isIconOnly
          color={isProductInCart ? "danger" : "primary"}
          aria-label="Like"
          onClick={
         ()=>   isProductInCart ? removeFromCart(product) : addToCart(product)
          }
        >
          {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </Button>
      </div>
    </li>
  );
};

export default Product;
