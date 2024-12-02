import React from "react";

export default function ItemCategory({ onEdit, onDelete, ...item }) {
  return (
    <tr>
      <td className="text-center">{item.id}</td>
      <td>
        <img src={item.image} className="h-8 w-8 mx-auto" alt={item.name} />
      </td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td className="p-2">
        <div className="flex justify-center">
          <button
            onClick={onEdit} // Gọi hàm onEdit khi bấm vào nút Edit
            className="btn-edit-category rounded-md hover:bg-green-100 text-green-600 p-2 flex justify-between items-center"
          >
            Edit
          </button>
          <button onClick={onDelete} className="rounded-md hover:bg-red-100 text-red-600 p-2 flex justify-between items-center">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}