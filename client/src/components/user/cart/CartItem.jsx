import React from "react";
import { useGetCartQuery } from "../../../redux/createAPI";
import PassCartItem from "./PassCartItem";

export default function CartItem({ cart, updateCartQuantity }) {
  const { productId, colorId, sizeId, userId } = cart;
  
  const shouldFetchData = productId && colorId && sizeId && userId;
  const { data, isLoading, error, refetch } = useGetCartQuery(
    shouldFetchData ? { productId, colorId, sizeId, userId } : { productId: '', colorId: '', sizeId: '', userId: '' }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div></div>;
  }

  return (
    <PassCartItem 
      item={data} 
      cart={cart}  
      refetch={refetch} 
      updateCartQuantity={updateCartQuantity}
    />
  );
}
