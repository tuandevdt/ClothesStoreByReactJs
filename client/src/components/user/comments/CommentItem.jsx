import React from 'react'

export default function CommentItem({username, text}) {
  return (
    <div className="border rounded-md p-4 my-3">
    <div className="flex gap-3 items-center">
      <img
        src="https://avatars.githubusercontent.com/u/22263436?v=4"
        className="object-cover w-8 h-8 rounded-full 
                  border-2 border-emerald-400  shadow-emerald-400
                  "
      />
      <h3 className="font-bold">{username}</h3>
    </div>
    <p className="text-gray-600 mt-2">{text}</p>
  </div>
  )
}
