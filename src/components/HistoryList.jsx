import React from "react";
import HistoryCard from "./HistoryCard";

const HistoryList = ({ historyCarts }) => {
  return (
    <div>
      {historyCarts.length === 0 && (
        <p className="text-center">No se encontraron productos</p>
      )}
      <ul className="gap-5 flex flex-col">
        {historyCarts.map((cart, index) => {
          const pagoTotal = cart.products.reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.price * currentValue.quantity,
            0
          );
          return (
            <li
              className="shadow-md p-5 rounded-md flex flex-col gap-2 "
              key={index}
            >
              <div className="flex justify-between">
                <p className="text-sm sm:text-base lg:text-xl">Pedido Realizado</p>
                <p className="text-sm sm:text-base lg:text-xl font-semibold">Total pagado: ${pagoTotal} </p>
              </div>

              <ul className=" gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {cart.products.map((product, key) => (
                  <HistoryCard product={product} key={key} />
                ))}
              </ul>
              <p className="text-xs">Fecha de compra: {cart.date} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HistoryList;
