import React, { useEffect, useState } from "react";
import FormCart from "../../components/user/cart/FormCart";
import UlCartMenu from "../../components/user/ulCartMenu";

export default function CartPage() {
  return (
    <div className="font-sans py-4 mx-auto lg:max-w-7xl sm:max-w-full md:py-16">
      <UlCartMenu />
      <FormCart /> 
    </div>
  );
}
