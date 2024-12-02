import React, { useEffect, useState } from "react";
import { useGetCartQuery } from "../../../redux/createAPI";
import PassCartItem from "./PassCartItem";

export default function CartItem({ cart, updateCartQuantity }) {
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

  // console.log("data", data);

  return (
    <PassCartItem 
    item={data} 
    cart={cart}  
    refetch={refetch} 
    updateCartQuantity={updateCartQuantity}

    />
    // <h1>hi</h1>
  );
}