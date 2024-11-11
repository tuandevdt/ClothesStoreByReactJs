import React from 'react'

export default function SliderNewItem({image, title, id}) {
  return (
    <a href={id}>
          <div className="flex-shrink-0 w-64 h-48 snap-center relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl w-full text-center w-full text-center">
              {title}
            </span>
          </div>
    </a>
  )
}
