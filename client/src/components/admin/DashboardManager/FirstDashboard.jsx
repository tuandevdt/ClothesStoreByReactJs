import React from "react";

export default function FirstDashboard({ orderLength, productLength, userLength }) {    
  return (
    <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="bg-blue-100 shadow-lg rounded-lg p-6 sm:p-8 xl:p-10">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold text-blue-600">{userLength}</span>
            <h3 className="text-lg font-medium text-gray-500">Total Users</h3>
          </div>
          <div className="ml-5 flex items-center justify-end flex-1 text-green-500 text-lg font-bold">
            14.6%
            <svg
              className="w-5 h-5 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Tổng số sản phẩm */}
      <div className="bg-green-100 shadow-lg rounded-lg p-6 sm:p-8 xl:p-10">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold text-green-600">{productLength}</span>
            <h3 className="text-lg font-medium text-gray-500">Total Products</h3>
          </div>
          <div className="ml-5 flex items-center justify-end flex-1 text-green-500 text-lg font-bold">
            32.9%
            <svg
              className="w-5 h-5 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Tổng số đơn hàng */}
      <div className="bg-red-100 shadow-lg rounded-lg p-6 sm:p-8 xl:p-10">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold text-red-600">{orderLength}</span>
            <h3 className="text-lg font-medium text-gray-500">Total Orders</h3>
          </div>
          <div className="ml-5 flex items-center justify-end flex-1 text-red-500 text-lg font-bold">
            -2.7%
            <svg
              className="w-5 h-5 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}