import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import Comments from "../../components/user/comments/Comments";
import { useGetDetailQuery, useLazyGetProductsByCategoryIdQuery, useGetProductsQuery } from "../../redux/createAPI";
import DetailItem from "../../components/user/detail/DetailItem";
import ItemProduct from "../../components/admin/ProductManager/ItemProduct";
import ProductItem from "../../components/user/products/ProductItem";

export default function DetailPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetDetailQuery(id);

  const [categoryId, setCategoryId] = useState(1); // Giá trị mặc định
  const [triggerGetProducts, { data: productList, isLoading: isProductsLoading }] = 
  useLazyGetProductsByCategoryIdQuery();

  useEffect(() => {
    if (data?.product?.categoryId) {
      const newCategoryId = data.product.categoryId;
      setCategoryId(newCategoryId);
      triggerGetProducts(newCategoryId); // Gọi API sau khi có `categoryId`
    }
  }, [data, triggerGetProducts]);

  if (isLoading) return <p>Loading product details...</p>;
  if (isError) return <p>Error loading product details.</p>;

  const product = data?.product || {};
  const products = productList?.products || [];
  console.log('productList',products);
  

  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <DetailItem product={product} />
      <div className="container w-full mx-auto py-8">
        <h1 className="font-bold text-2xl mb-4">Sản phẩm tương tự</h1>
        <div className="w-full flex space-x-2 overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollable">
          {/* <div className="flex-none w-64"></div> */}
          {products.map(item => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      </div>
      <Comments />
    </div>
  );
}
