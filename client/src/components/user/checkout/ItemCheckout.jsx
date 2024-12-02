import React, { useEffect, useState } from 'react'
import { useGetCartQuery } from '../../../redux/createAPI';

export default function ItemCheckout({cart}) {
    const [apiCalled, setApiCalled] = useState(false);


  const productId = cart.productId;
  const colorId = cart.colorId;
  const sizeId = cart.sizeId;
  const userId = cart.userId;
  

  useEffect(() => {
    if (
      productId !== undefined &&
      colorId !== undefined &&
      sizeId !== undefined &&
      userId !== undefined
    ) {
      setApiCalled(true);
    }
  }, [productId, colorId, sizeId, userId]); 

  const { data, isLoading, error, refetch } = useGetCartQuery(
    apiCalled ? {productId, colorId, sizeId, userId} : null
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No cart data found.</div>;
  }
  
  return (
    <div className="grid grid-cols-5 items-center gap-4 py-3">
    <div className="flex items-center">
      <img
        src={data.color.image}
        alt={data.color.name}
        className="w-20 mr-4"
      />
    </div>
    <div>{data.size.name}</div>
    <div className="text-base font-medium text-gray-900 dark:text-white">
       {data.product.price} đ
    </div>
    <div className="text-center font-medium text-gray-900 dark:text-white">
      {cart.quantity}
    </div>
    <div className="text-base font-medium text-gray-900 dark:text-white text-right">
     {data.product.price * cart.quantity} đ
    </div>
  </div>
  )
}
