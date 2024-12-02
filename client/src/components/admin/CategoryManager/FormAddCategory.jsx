import React, { useState } from "react";
import { useNewCategoryMutation } from "../../../redux/createAPI"; 

export default function FormAddCategory({ onAddSuccess }) {
  const [newCategory, setNewCategory] = useState({});
  const [newCategoryMutation, { isLoading }] = useNewCategoryMutation(); 

  const handleAdd = async (e) => {
    e.preventDefault();
    const categoryData = { 
      name: newCategory.name, 
      description: newCategory.description, 
      image: newCategory.image 
    };
    console.log(categoryData);
    
    try {
      const data = await newCategoryMutation(categoryData); 
      onAddSuccess();
      setNewCategory({}); 
    } catch (error) {
      console.error('Failed to add category: ', error); 
    }
  };

  return (
    <div className="w-full lg:w-1/3 m-1">
      <form onSubmit={handleAdd} className="w-full bg-white shadow-md p-6">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="category_name"
            >
              Category Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
              type="text"
              name="name"
              value={newCategory.name || ''}
              onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              placeholder="Category Name"
              required
            />
          </div>
          <div className="w-full px-3 mb-6">
            <textarea
              rows={4}
              className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
              name="description"
              value={newCategory.description || ''}
              onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
              required
            />
          </div>
          <div className="w-full px-3 mb-6">
            <input
              className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
              type="text"
              name="image"
              value={newCategory.image || ''}
              onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
              placeholder="Image Url"
              required
            />
          </div>
          <div className="w-full md:w-full px-3 mb-6">
            <button 
              type="submit" 
              className="appearance-none block w-full bg-green-700 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-green-600 focus:outline-none focus:bg-white focus:border-gray-500"
              disabled={isLoading} // Vô hiệu hóa nút khi đang tải
            >
              {isLoading ? 'Adding...' : 'Add Category'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}