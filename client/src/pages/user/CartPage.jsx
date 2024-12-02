import React, { useEffect, useState } from "react";

import { useGetCartsQuery } from "../../redux/createAPI";
import FormCart from "../../components/user/cart/FormCart";
import UlCartMenu from "../../components/user/ulCartMenu";
export default function CartPage() {
  const [userId, setUserId] = useState(null); // Trạng thái cho userId

  useEffect(() => {
    const persistedAuth = localStorage.getItem('persist:auth');
    if (persistedAuth) {
      const parsedAuth = JSON.parse(persistedAuth); // Phân tích cú pháp JSON
      const userId = parsedAuth.id ? parsedAuth.id.replace(/\"/g, '') : null; // Lấy id và loại bỏ dấu ngoặc kép
      setUserId(userId);
      
    }
  }, [userId]);
  
  const {data} = useGetCartsQuery(userId);
  
  const carts = data?.data || [];
    
  return (
    <div className="font-sans py-4 mx-auto lg:max-w-7xl sm:max-w-full md:py-16">
      <UlCartMenu />
      <FormCart carts={carts} />
    </div>
  );
}
