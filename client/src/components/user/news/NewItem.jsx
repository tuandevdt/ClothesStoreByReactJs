import React from "react";

export default function NewItem({image, title, date}) {
  return (
    <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
      <div className="w-full min-h-56 max-h-56 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
        <img
          src={image}
          alt="Product 2"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
          {title}
        </h3>
        <span className="text-lg text-gray-500 mt-4">{date}</span>
      </div>
    </div>
  );
}
