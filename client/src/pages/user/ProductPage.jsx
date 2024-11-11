import React from "react";
import ProductItem from "../../components/user/products/ProductItem";

export default function ProductPage() {
  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        Sản phẩm ưa chuộng
      </h2>
      <div className="flex justify-between mb-4">
          <select id="category-select" className="border rounded-md p-2">
            <option>Quần áo nam</option>
            <option>Quần áo nữ</option>
            <option>Quần áo trẻ em</option>
          </select>
          <select id="price-select" className="border rounded-md p-2">
            <option value="low-to-high">Giá: Thấp đến Cao</option>
            <option value="high-to-low">Giá: Cao đến Thấp</option>
          </select>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}
