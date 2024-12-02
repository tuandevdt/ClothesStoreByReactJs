import React, { useState, useEffect } from "react";

export default function EditCategory({ initialData, onSubmit }) {

  const [newCategory, setNewCategory] = useState({});

  useEffect(() => {
    if (initialData) {
      setNewCategory(initialData); 
    }
  }, [initialData]); 

  const handleEdit = (e) => {
    e.preventDefault(); 
    onSubmit(newCategory); 
  };
  return (
    <>
      <div className="w-full">
      <form onSubmit={handleEdit} className="w-full bg-gray-700 text-white shadow-md p-6">
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
            <input type="hidden" name="id" value={newCategory.id || ''} />
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
            > Cập nhật
            </button>
          </div>
        </div>
      </form>
    </div>
  </>
  )
}
