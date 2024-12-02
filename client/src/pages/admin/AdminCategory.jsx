import React, { useReducer } from "react";
import TitleCategory from "../../components/admin/CategoryManager/TitleCategory";
import FormAddCategory from "../../components/admin/CategoryManager/FormAddCategory";
import ListCategory from "../../components/admin/CategoryManager/ListCategory";
import { useGetCategoriesAdminQuery } from "../../redux/createAPI";

export default function AdminCategory() {
  const { refetch } = useGetCategoriesAdminQuery();


  return (
    <>
        <div className="bg-gray-100 lg:ml-64">
          <TitleCategory />
          <div className="flex flex-col mx-3 mt-6 lg:flex-row">
            <FormAddCategory onAddSuccess={refetch} />
            <ListCategory />
          </div>
        </div>
    </>
  );
}
