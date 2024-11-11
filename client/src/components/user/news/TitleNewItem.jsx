import React from 'react'

export default function TitleNewItem({id, title}) {
  return (
    <h1
        id={id}
        className="text-4xl font-bold text-gray-800 mt-10 mb-4 text-center"
      >
        {title}
      </h1>
  )
}
