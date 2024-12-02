import React from 'react'
import TodoContext from './contexts/Context'
import { useContext } from 'react'
export default function Item({...item}) {
    const contextValue = useContext(TodoContext)
  return (
    <>
    <tr>
    <td className="px-4 py-4 text-sm text-gray-800">{item.id}</td>
    <td className="px-4 py-4 text-sm text-gray-800">{item.name}</td>
    <td className="px-4 py-4 text-sm text-gray-800">
      <button className="text-blue-600 mr-4">Edit</button>
      <button
        onClick={() => contextValue.dispatch({ type: "Remove", id: item.id })}
        className="text-red-600"
      >
        Delete
      </button>
    </td>
  </tr>
  </>
  )
}
