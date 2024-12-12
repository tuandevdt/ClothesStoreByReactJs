import React from 'react'
import { formatCurrency } from '../../../datatransfer/formatCurrency'
import { formatDate } from '../../../datatransfer/formDate'

export default function OrderTdItem({order, refetch, onShowDetails, onEditStatus}) {
    const handleShowDetails = async (id) => {
        onShowDetails(id)
    }
    const handleEditStatus = async (id) => {
        onEditStatus(id)
    }
  return (
    <tr className="hover:bg-gray-100">
          <td className="py-2 px-4 border-b">{order.id}</td>
          <td className="py-2 px-4 border-b">{order.fullname}</td>
          <td className="py-2 px-4 border-b">{formatCurrency(order.totalPrice)}</td>
          <td className="py-2 px-4 border-b">{formatDate(order.createdAt)}</td>
          <td className="py-2 px-4 border-b">{order.status}</td>
          <td className="py-2 px-4 border-b">
            <button
              onClick={() => handleShowDetails(order.id)}
              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
            >
              Xem chi tiết
            </button>
            <button
              onClick={() => handleEditStatus(order.id)}
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Chỉnh sửa
            </button>
          </td>
        </tr>
  )
}
