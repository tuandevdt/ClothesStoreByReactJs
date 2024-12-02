import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const defaultImage = product.colors?.[0]?.image || "default-image-url.jpg";

  return (
    <div className="bg-gray-50 shadow-md min-w-[280px] rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
      <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          className="fill-gray-800 inline-block"
          viewBox="0 0 64 64"
        >
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"
          />
        </svg>
      </div>
      <Link to={`/products/${product.id}`}>
        <div className="max-h-[320px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src={defaultImage}
            alt={product.name}
            className="w-full object-cover"
          />
        </div>
      </Link>
      <div className="pl-6 bg-white">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg pt-4 font-bold text-gray-800">{product.name}</h3>
        </Link>
        <h4 className="text-lg text-gray-800 font-bold mt-2">{product.price} đ</h4>
      </div>
      <div className="pl-6 bg-white pt-2 pb-4 flex">
        {product.colors.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.name }}
            className="w-5 h-5 border border-gray-300 rounded-full mr-3"
          ></div>
        ))}
      </div>
    </div>
  );
}
