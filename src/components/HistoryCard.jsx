import React from 'react'

const HistoryCard = ({product}) => {
  return (
    <li
    className="flex justify-between bg-gray-200 p-2 rounded-md gap-2"
  >
    <div className="">
      <p className="text-base lg:text-lg font-semibold">{product.title}</p>
      <div className="flex gap-5">
        <p className="text-sm">
          cantidad: {product.quantity}{" "}
        </p>
        <p className="text-sm">costo: ${product.price} </p>
      </div>
    </div>
    <img
      className="rounded-md cover object-cover h-14 w-14"
      src={product.thumbnail}
      alt={product.title}
    />
  </li>
  )
}

export default HistoryCard