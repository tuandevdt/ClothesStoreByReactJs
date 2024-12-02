import React, { useEffect } from "react";
import Pagination from "./Pagination";
import Thead from "./Thead";
import { useGetProductsAdminQuery } from "../../../redux/createAPI";
import ItemProduct from "./ItemProduct";

export default function ListProduct({refetchTrigger }) {
    const { data, refetch } = useGetProductsAdminQuery(undefined, {
        refetchOnMountOrArgChange: true,
      })
      const products = data?.data || []; 
      console.log('products lisst',products);

      useEffect(() => {
        if (refetchTrigger) {
          refetch(); 
        }
      }, [refetchTrigger, refetch]);
    
  return (
    <>
      <div className="dataTable-container">
        <table className="min-w-full bg-white" datatable="" id="products-list">
            <Thead />
            <tbody>
              {products.map((item) => (
                <ItemProduct key={item.id} product={item} />
              ))}
            </tbody>

        </table>
      </div>
      <Pagination />
    </>
  );
}
