import React from "react";
import ProductItem from "../../components/user/products/ProductItem";
import { useGetProductsQuery } from "../../redux/createAPI";

export default function ProductPage() {
  const { data } = useGetProductsQuery();  
  const  products = data?.data || [];
  console.log(products);

  const listProducts = products.map((item) => {
    return <ProductItem key={item.id} product={item} />
  })
  return (
    <div className="py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {listProducts}
      </div>
    </div>
  );
}
