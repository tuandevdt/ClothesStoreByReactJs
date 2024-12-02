import React from "react";
import TitleProduct from "../../components/admin/ProductManager/TitleProduct";
import ListProduct from "../../components/admin/ProductManager/ListProduct";

export default function AdminProduct() {  
  return (
    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns lg:ml-64">
      <TitleProduct />
      <ListProduct refetchTrigger={location.state?.refetch} />
    </div>
  );
}
