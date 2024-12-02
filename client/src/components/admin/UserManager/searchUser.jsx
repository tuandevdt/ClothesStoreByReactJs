import React from 'react'

export default function SearchUser() {
  return (
    <div className="flex rounded-md mt-6 border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
    <input
      onChange={(e)=> console.log(e.target.value)}
      type="text"
      placeholder="Search Something..."
      className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
      value=""
    />
  </div>
  )
}
