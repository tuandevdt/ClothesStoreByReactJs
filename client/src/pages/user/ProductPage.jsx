import React, { useState } from "react";
import ProductItem from "../../components/user/products/ProductItem";
import {
  useGetCategoriesAdminQuery,
  useGetProductsQuery,
} from "../../redux/createAPI";

export default function ProductPage() {
  const { data } = useGetProductsQuery();
  const products = data?.data || [];
  const { data: categories } = useGetCategoriesAdminQuery();
  const listCategories = categories?.data;
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedSortPrice, setSelectedSortPrice] = useState("");
  
  const handleCategoryChange = (event) => {    
    setSelectedCategoryId(event.target.value);
  };
  
  const handleSortPrice = (event) => {
    setSelectedSortPrice(event.target.value);
  }

  const filteredAndSortedProducts = products
    .filter(product => !selectedCategoryId || product.categoryId == selectedCategoryId) 
    .sort((a, b) => {
      if (selectedSortPrice == "0") {
        return a.price - b.price; // Thấp đến Cao
      } else if (selectedSortPrice == "1") {
        return b.price - a.price; // Cao đến Thấp
      }
      return 0; // Không sắp xếp
    });  
    
  const listProducts = filteredAndSortedProducts.map((item) => {
    return <ProductItem key={item.id} product={item} />;
  });

  return (
    <div className="py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Sản phẩm ưa chuộng
      </h2>
      <div className="flex justify-between mb-4">
        <select id="category-select" 
        className="border rounded-md p-2"
        onChange={handleCategoryChange}
        >
          {listCategories?.map((item) => {
            return <option key={item.id} value={item.id}>{item.name}</option>;
          })}
        </select>

        <select id="price-select" 
        className="border rounded-md p-2"
        onChange={handleSortPrice}
        >
          <option value="0">Giá: Thấp đến Cao</option>
          <option value="1">Giá: Cao đến Thấp</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {listProducts}
      </div>
    </div>
  );
}
