import { useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "./Cart";
import Header from "./Header";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
        <Header setIsOpen={setIsOpen} />
        <div className="p-5 lg:p-10 m-auto max-w-[1200px] ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
