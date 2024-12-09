import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useDeleteCartMutation, useUpdateCartMutation } from "../../../redux/createAPI";

export default function PassCartItem({ item, cart, refetch, updateCartQuantity }) {
    const [updateCart] = useUpdateCartMutation()
    const [deleteCart] = useDeleteCartMutation()
  const [quantity, setQuantity] = useState(cart.quantity);

  const [userId, setUserId] = useState(null); 

  useEffect(() => {
    const persistedAuth = localStorage.getItem('persist:auth');
    if (persistedAuth) {
      const parsedAuth = JSON.parse(persistedAuth); 
      const userId = parsedAuth.id ? parsedAuth.id.replace(/\"/g, '') : null; 
      setUserId(userId);
    }
  }, [userId]);

  const handleDecrease = async (id) => {
    
    if (quantity > 1) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        updateCartQuantity(id, newQuantity);
        const body = { userId: cart.userId, quantity: newQuantity };
        
        try {
           await updateCart({id, body}); 
            refetch(); 
          } catch (error) {
            console.error("Error updating cart:", error);
          }
    }
    
  };

  const handleIncrease = async (id) => {

    if(quantity == item.size.stock) {
        alert("Đã đạt giới hạn số lượng");
        return;
    }

    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartQuantity(id, newQuantity);
    const body = { userId: cart.userId, quantity: newQuantity };    
    try {
      await updateCart({id, body}); 
      
      refetch(); 
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleDelete = async (id) => {
    await deleteCart(id);
    refetch();
  }

  return (
    <div className="flex items-start max-sm:flex-col gap-4 py-4">
      <div className="h-36 shrink-0">
        <img
          src={item.color.image}
          className="w-full h-full object-contain rounded-md"
          alt="Product"
        />
      </div>
      <div className="flex items-start gap-4 w-full">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {item?.product.name || "Black T-Shirt"}{" "}
          </h3>
          <div className="space-y-1">
            <h6 className="text-sm text-gray-800">
              Size: <strong className="ml-2">{item.size.name || "7.5"}</strong>
            </h6>
            <h6 className="text-sm text-gray-800">
              Color:{" "}
              <strong className="ml-2">{item.color.name || "Black"}</strong>
            </h6>
            <h6 className="text-sm text-gray-800">
              Price:{" "}
              <strong className="ml-2">{item.product.price || 20000} đ</strong>
            </h6>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => {handleDelete(item.id)}}
              className="font-semibold text-red-500 text-sm flex items-center gap-2 shrink-0"
            >
              Remove
            </button>
            <button
              type="button"
              className="font-semibold text-pink-500 text-sm flex items-center gap-2 shrink-0"
            >
              Move to wish list
            </button>
          </div>
        </div>
        <div className="ml-auto text-right">
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={()=>handleDecrease(cart.id)}
              className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
            >
              <FaMinus style={{ color: "white" }} />
            </button>
            <span className="font-bold text-sm leading-[18px]">
              {quantity}
            </span>
            <button
              type="button"
              onClick={()=>handleIncrease(cart.id)}
              className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
            >
              <FaPlus style={{ color: "white" }} />
            </button>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-bold text-gray-500 mb-1">
              <strike className="font-medium">
                ${item.product.price * cart.quantity || "22.5"}
              </strike>
            </h4>
            <h4 className="text-lg font-bold text-gray-800"> 18.5</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
