import React from "react";
import { CartIcon } from "./Icons";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Header = ({ setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="px-5 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-5 flex justify-between items-center shadow-md">
      <p className="text-xl lg:text-3xl cursor-pointer hover:text-gray-500 " onClick={()=>navigate("/")}>Shopping Cart</p>
      <div className="flex gap-2 lg:gap-5 items-center">
        <p className="text-xs sm:text-sm lg:text-base cursor-pointer hover:text-gray-500 " onClick={()=>navigate("/history")}>Historial de compras</p>
        <Button
          isIconOnly
          color="primary"
          aria-label="Like"
          onClick={() => setIsOpen(true)}
        >
          <CartIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
