import React from 'react'
import { Link } from "react-router-dom";
export default function TitleProduct() {
  return (
    <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
    <div className="lg:flex">
      <div>
        <h5 className="mb-0 dark:text-white">All Products</h5>
        <p className="mb-0 leading-normal text-sm">
          {" "}
          A lightweight, extendable, dependency-free javascript HTML table
          plugin.{" "}
        </p>
      </div>
      <div className="my-auto mt-6 ml-auto lg:mt-0">
        <div className="my-auto ml-auto">
          <Link to="new"
            className="inline-block px-8 py-2 m-0 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
          >
            +&nbsp; New Product
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
