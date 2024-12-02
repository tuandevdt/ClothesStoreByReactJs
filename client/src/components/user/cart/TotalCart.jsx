import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/createAPI";

export default function TotalCart({carts}) {
    const { data: products, isLoading, isError, error } = useGetProductsQuery();
    if(isLoading) {
        return (
            <h1>Loading....</h1>
        )
    }
    if (isError) {
        console.error('Error fetching products:', error);
        return <h1>Error loading products. Please try again later.</h1>;

    }
    if (!products || products.length === 0) {        
        return (
            <h1>No products available.</h1>
        )
    }
    const listProducts = products.data;


    const calculateTotalPrice = (carts, listProducts) => {
        let totalPrice = 0;
      
        carts.forEach(cartItem => {
          // Tìm sản phẩm tương ứng theo productId
          const product = listProducts.find(prod => prod.id === cartItem.productId);
          if (product) {
            totalPrice += product.price * cartItem.quantity;
          }
        });
      
        return totalPrice;
      };
      
      // Tính tổng tiền
      const total = calculateTotalPrice(carts, listProducts);
    
  return (
    <div className="shadow-md p-6 lg:sticky lg:top-0 h-max">
      <h3 className="text-lg font-bold text-gray-800 border-b pb-4">
        Order Summary
      </h3>
      <ul className="text-gray-800 divide-y mt-4">
        <li className="flex flex-wrap gap-4 text-sm py-3">
          Subtotal <span className="ml-auto font-bold">{total} đ</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm py-3">
          Shipping <span className="ml-auto font-bold">0 đ</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm py-3">
          Tax <span className="ml-auto font-bold">0 đ</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm py-3 font-bold">
          Total <span className="ml-auto">{total} đ</span>
        </li>
      </ul>
      <button
        type="button"
        className="mt-4 text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md"
      >
        <Link to="/checkout">Make Payment</Link>
      </button>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Apply promo code
        </h3>
        <div className="flex border border-blue-600 overflow-hidden max-w-md rounded-md">
          <input
            type="email"
            placeholder="Promo code"
            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
          />
          <button
            type="button"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-5 text-sm text-white"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
