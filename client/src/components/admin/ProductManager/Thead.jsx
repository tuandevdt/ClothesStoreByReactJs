import React from 'react'

export default function Thead() {
  return (
    <thead className="thead-light">
    <tr>
      <th className="p-4 text-center">
        <a href="#" className="dataTable-sorter">
          Product
        </a>
      </th>

      <th className="text-left">
        <a href="#" className="dataTable-sorter">
          Category
        </a>
      </th>

      <th className="text-left">
        <a href="#" className="dataTable-sorter">
          Price
        </a>
      </th>

      <th className="text-left">
        <a href="#" className="dataTable-sorter">
          SKU
        </a>
      </th>

      <th className="text-left">
        <a href="#" className="dataTable-sorter">
          Quantity
        </a>
      </th>

      <th className="text-center">
        <a href="#" className="dataTable-sorter">
          Status
        </a>
      </th>

      <th className="p-4 text-left">
        <a href="#" className="dataTable-sorter">
          Action
        </a>
      </th>
    </tr>
  </thead>  
  )
}
