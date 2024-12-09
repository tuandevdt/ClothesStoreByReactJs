import React from 'react'
import { Link } from "react-router-dom";

export default function OrderItem({order, status}) {
  return (
    <div className="flex flex-wrap items-center gap-y-4 py-6">
    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
        Order ID:
      </dt>
      <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
        <Link to={`/my-orders/${order.id}`} className="hover:underline">
          #FWB1273643{order.id}
        </Link>
      </dd>
    </dl>
    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
        Date:
      </dt>
      <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
        {order.orderDate}
      </dd>
    </dl>
    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
        Price:
      </dt>
      <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
       {order.totalPrice}
      </dd>
    </dl>
    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
        Status:
      </dt>
        {status}
    </dl>
    <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
      <button
        type="button"
        className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto"
      >
        Cancel order
      </button>
      <Link
        to={`/my-orders/${order.id}`}
        className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
      >
        View details
      </Link>
    </div>
  </div>
  )
}
