import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailItem from "../../components/user/detail/DetailItem";
import Comments from "../../components/user/comments/Comments";
import ProductItem from "../../components/user/products/ProductItem";
import { useGetDetailQuery, useLazyGetProductsByCategoryIdQuery } from "../../redux/createAPI";

export default function DetailPage() {
  const { id } = useParams(); 
  const { data, isLoading, isError } = useGetDetailQuery(id); 
  const [triggerGetProducts, { data: productList }] = useLazyGetProductsByCategoryIdQuery(); 

  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    if (data?.product?.categoryId) {
      triggerGetProducts(data.product.categoryId); 
    }
  }, [data, triggerGetProducts]);

  useEffect(() => {
    if (productList?.products) {
      setSimilarProducts(productList.products); 
    }
  }, [productList]);

  if (isLoading) return <p>Loading product details...</p>;
  if (isError) return <p>Error loading product details.</p>;

  const product = data?.product || {};

  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <DetailItem product={product} />

      <div className="container w-full mx-auto py-8">
        <h1 className="font-bold text-2xl mb-4">Sản phẩm tương tự</h1>
        <div className="w-full flex space-x-2 overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollable">
          {similarProducts.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      </div>

      <Comments />
    </div>
  );
}
