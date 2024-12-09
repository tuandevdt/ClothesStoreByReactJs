import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import TotalCart from "./TotalCart";
import {
  useUpdateCartMutation,
  useGetCartsQuery,
} from "../../../redux/createAPI";
import { useDispatch, useSelector } from "react-redux";
import { setCarts, updateCart } from "../../../redux/slice/cartSlice";

export default function FormCart() {
  const dispatch = useDispatch();
  const [updateCartMutation] = useUpdateCartMutation();

  const [userId, setUserId] = useState(null);

  const { data: carts, isLoading, refetch } = useGetCartsQuery(userId, {
    refetchOnMountOrArgChange: true,
  });
  
  useEffect(() => {
    const persistedAuth = localStorage.getItem("persist:auth");
    if (persistedAuth) {
      const parsedAuth = JSON.parse(persistedAuth);
      const userId = parsedAuth.id ? parsedAuth.id.replace(/\"/g, "") : null;
      setUserId(userId);
    }
  }, []);
  console.log('dataCarts',carts);

  const dataCarts = carts?.data || []
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  

  const updateCartQuantity = async (cartId, newQuantity) => {

    const cartToUpdate = dataCarts?.find((cart) => cart.id === cartId);

    if (cartToUpdate) {
      try {
        await updateCartMutation({
          id: cartToUpdate.id,
          body: { quantity: newQuantity },
        }).unwrap();
        refetch()        
      } catch (error) {
        console.error("Failed to update cart", error);
      }
    }
  };



  return (
    <form>
      <div className="grid sm:mt-8 lg:grid-cols-3 gap-10 w-full">
        <div className="lg:col-span-2 bg-white divide-y">
          {dataCarts?.map((cart, index) => (
            <CartItem
              key={cart.id ?? index}
              cart={cart}
              updateCartQuantity={updateCartQuantity}
            />
          ))}
        </div>
        <TotalCart carts={dataCarts} />
      </div>
    </form>
  );
}
