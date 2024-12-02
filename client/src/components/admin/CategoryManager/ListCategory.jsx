import React, { useState } from 'react';
import { 
  useDeleteCategoryMutation, 
  useGetCategoriesAdminQuery, 
  useUpdateCategoryMutation 
} from "../../../redux/createAPI";
import ItemCategory from "./ItemCategory";
import EditCategory from "./EditCategory";
import { IoMdClose } from "react-icons/io";

export default function ListCategory() {
  const { data, refetch } = useGetCategoriesAdminQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const categories = data?.data || []; 

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (confirmDelete) {
      await deleteCategory(id);
      refetch(); 
    }
  };

  const list = categories.map((item) => (
    <ItemCategory 
      key={item.id} 
      {...item} 
      onEdit={() => {
        setCurrentCategory(item); 
        setIsEditing(true); 
      }}
      onDelete={() => handleDelete(item.id)} 
    />
  ));

  const handleSubmit = async (values) => {
    await updateCategory({ id: values.id, body: values }); 
    refetch(); 
    setIsEditing(false); 
  };

  const closeForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full lg:w-2/3 m-1 bg-white shadow-lg text-lg rounded-sm border border-gray-200">
      <div className="overflow-x-auto rounded-lg p-3">
        <table className="table-auto w-full">
          <thead className="text-sm font-semibold uppercase text-gray-800 bg-gray-50 mx-auto">
            <tr>
              <th>STT</th>
              <th>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-5 h-5 mx-auto"
                >
                  <path d="M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm7-18 5 5h-5V4zm-4.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 11zm.5 5 1.597 1.363L13 13l4 6H7l2-3z" />
                </svg>
              </th>
              <th className="p-2">
                <div className="font-semibold">Category</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-left">Description</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm font-semibold uppercase text-gray-800 mx-auto">
            {list}
          </tbody>
        </table>
        {isEditing && (
          <div className="center-position relative">
            <EditCategory 
              initialData={currentCategory} 
              onSubmit={handleSubmit}
            />
            <div className="absolute top-0 right-0">
              <IoMdClose onClick={closeForm} className="box-icon-large" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}