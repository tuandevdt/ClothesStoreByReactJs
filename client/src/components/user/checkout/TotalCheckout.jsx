import React, { useEffect } from 'react'
import { useGetProductsQuery } from '../../../redux/createAPI';
import { formatCurrency } from '../../../datatransfer/formatCurrency';

export default function TotalCheckout({ carts, onUpdateTotalPrice }) {
    const { data: products, isLoading, isError, error } = useGetProductsQuery();


    if(isLoading) {
        return (
            <h1>Loading....</h1>
        )
    }
    if (isError) {
        console.error('Error fetching products:', error);
        return <h1>Error loading products. Please try again later.</h1>;

    }
    if (!products || products.length === 0) {        
        return (
            <h1>No products available.</h1>
        )
    }
    const listProducts = products.data;


    const calculateTotalPrice = (carts, listProducts) => {
        let totalPrice = 0;
        
        carts.forEach(cartItem => {
          const product = listProducts.find(prod => prod.id === cartItem.productId);
          if (product) {
            totalPrice += product.price * cartItem.quantity;
          }
        });
        return totalPrice;
      };
      
      const total = calculateTotalPrice(carts, listProducts);

        onUpdateTotalPrice(total);

  return (
    <div className="grid grid-cols-4 items-center gap-4 py-3">
    <div className="text-base font-bold text-gray-900 dark:text-white">
      Total
    </div>
    <div />
    <div />
    <div className="text-base font-bold text-gray-900 dark:text-white text-right">
      {formatCurrency(total)}
    </div>
    <input
      type="hidden"
      id="total"
      className="form-control"
      defaultValue={233333}
    />
  </div>
  )
}
