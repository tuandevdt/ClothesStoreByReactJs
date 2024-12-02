import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';
import TotalCart from './TotalCart';

export default function FormCart({ carts: initialCarts }) {

  const [carts, setCarts] = useState(initialCarts || []);

  useEffect(() => {
    if (initialCarts) {
      setCarts(initialCarts);
    }
  }, [initialCarts]);

  
    if(carts.length == 0) {
        return (
            <h1>Loading...</h1>
        )
    }
    const updateCartQuantity = (cartId, newQuantity) => {
      setCarts((prevCarts) =>
        prevCarts.map((cart) =>
          cart.id === cartId ? { ...cart, quantity: newQuantity } : cart
        )
      );
    };

    // if (carts.length === 0) {
    //   return <h1>Loading...</h1>;
    // }
    
    const list = carts?.map(cart => {
        return (
          <CartItem key={cart.id} cart={cart} updateCartQuantity={updateCartQuantity} />        )
    })

  return (
    <form action="">
      <div className="grid sm:mt-8 lg:grid-cols-3 gap-10 w-full">
        <div className="lg:col-span-2 bg-white divide-y">
          {list}
        </div>
        <TotalCart carts={carts} />
      </div>
    </form>
  )
}
