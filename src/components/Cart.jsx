import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Button, Divider } from "@nextui-org/react";
import { ClearCartIcon, CartIcon } from "./Icons";
import { useCart } from "../hooks/useCart.js";
import "./Cart.css";
import toast, { Toaster } from "react-hot-toast";

const CartItem = ({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  decreaseToCart,
  saveCart
}) => {


  return (
    <li className="list-none shadow-md">

      <img
        className="object-cover aspect-video"
        src={thumbnail}
        alt="titurlo"
      />
      <div className="text-center p-2">
        <strong>{title}</strong> - ${price}
      </div>

      <footer className=" flex justify-center items-center gap-5 p-2">
        <Button
          isIconOnly
          color="primary"
          aria-label="Like"
          size="sm"
          onClick={decreaseToCart}
        >
          -
        </Button>
        <small>Cantidad: {quantity} </small>
        <Button
          isIconOnly
          color="primary"
          aria-label="Like"
          size="sm"
          onClick={addToCart}
        >
          +
        </Button>
      </footer>
    </li>
  );
};
const Cart = ({ isOpen, setIsOpen }) => {
  const { cart, clearCart, addToCart, decreaseToCart, getTotalMoneyCart, saveCart } =
    useCart();

    const successAdd = () => {
      saveCart()
      return toast.success("Pedido agregado con éxito!");
    }

  return (
    <Menu
      right
      isOpen={isOpen}
      burgerButtonClassName="hidden"
      onClose={() => setIsOpen(false)}
    >
      <Toaster />
      <div className="pb-5">
        {cart.length === 0 && (
          <p className="text-sm text-gray-300 text-center">
            No se han agregado productos
          </p>
        )}
        <ul className="flex flex-col gap-5">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              decreaseToCart={() => decreaseToCart(product)}
              saveCart={()=> saveCart(product)}
              {...product}
            />
          ))}
        </ul>
        {cart.length !== 0 && (
          <>
            <br />
            <div className="text-center">
              Total a pagar: ${getTotalMoneyCart()}{" "}
            </div>
            <br />
            <div>
              <div className="flex justify-center ">
                <Button color="danger" size="lg" onClick={successAdd}>
                  <p className="text-white"> Hacer pedido</p>
                </Button>
              </div>
            </div>
            <br />
            <Divider />
            <br />
            <div>
              <div className="flex justify-center ">
                <Button
                  isIconOnly
                  color="default"
                  size="lg"
                  onClick={clearCart}
                >
                  <div className="flex justify-center">
                    <ClearCartIcon />
                  </div>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </Menu>
  );
};

export default Cart;
