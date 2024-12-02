import React from "react";
import ProductItem from "../products/ProductItem";
import { useGetProductsQuery } from "../../../redux/createAPI";

export default function FavoriteProducts() {
  const { data } = useGetProductsQuery();  
  const  products = data?.data || [];
  console.log(products);

  const listProducts = products.map((item) => {
    return <ProductItem key={item.id} product={item} />
  })
  
  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-10">
        Sản phẩm ưa chuộng
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {listProducts}
      </div>
    </div>
  );
}
