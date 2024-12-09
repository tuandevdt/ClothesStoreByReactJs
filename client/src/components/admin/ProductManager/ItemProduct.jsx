import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useDeleteProductMutation } from "../../../redux/createAPI"; // Adjust the import based on your actual API

export default function ItemProduct({ product }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false); // State for delete confirmation
  // const [deleteProduct] = useDeleteProductMutation(); // Hook for deleting product

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsEditing(false);
  };

  const handleHideDetails = () => {
    setSelectedColor(null);
  };

  const handleEditDetails = () => {
    setEditData(selectedColor);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    console.log("Updated Details:", editData);
    setSelectedColor(editData);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    setIsConfirmingDelete(true); // Show confirmation dialog
  };

  const handleConfirmDelete = async () => {
    try {
      // await deleteProduct(product.id); // Call delete mutation
      console.log(`Product ${product.id} deleted successfully.`);
      
    } catch (error) {
      console.error("Error deleting product: ", error);
    } finally {
      setIsConfirmingDelete(false); // Hide confirmation dialog
    }
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false); // Hide confirmation dialog
  };

  return (
    <>
      <tr className="odd:bg-gray-50 even:bg-white border-b hover:bg-gray-100 transition duration-200">
        <td className="p-4">
          <input type="hidden" value={product.id} name="id" />
          <div className="flex items-center space-x-4">
            <img
              className="w-16 h-16 rounded-md object-cover border border-gray-200"
              src={product.colors[0]?.image || "https://via.placeholder.com/150"}
              alt={product.name}
            />
            <h6 className="font-semibold text-gray-800">{product.name}</h6>
          </div>
        </td>
  
        <td className="p-4">
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color.id}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
                onClick={() => handleColorClick(color)}
              >
                {color.name}
              </button>
            ))}
          </div>
        </td>
  
        <td colSpan={2} className="p-4">
          {selectedColor && (
            <div className="p-4 border rounded-md bg-gray-50 shadow-md flex flex-col gap-4">
              {!isEditing ? (
                <>
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-gray-700">
                      Thông tin chi tiết: <span>{selectedColor.name}</span>
                    </h4>
                    <div className="flex space-x-2">
                      <button
                        className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                        onClick={handleHideDetails}
                      >
                        Hide Details
                      </button>
                      <button
                        className="px-3 py-1 text-sm font-medium text-green-600 bg-green-200 rounded-md hover:bg-green-300"
                        onClick={handleEditDetails}
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div>
                      <img
                        className="w-40 h-40 rounded-md object-cover border border-gray-200"
                        src={selectedColor.image || "https://via.placeholder.com/150"}
                        alt={selectedColor.name}
                      />
                    </div>
                    <ul className="flex flex-col gap-2">
                      {selectedColor.colors?.map((size) => (
                        <li key={size.id} className="text-sm text-gray-600 font-medium">
                          <span className="font-semibold">Size {size.name}</span>:{" "}
                          <span>{size.stock} sản phẩm</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">Tên màu:</label>
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleInputChange}
                      className="px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">URL ảnh:</label>
                    <input
                      type="text"
                      name="image"
                      value={editData.image}
                      onChange={handleInputChange}
                      className="px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </td>
  
        <td className="p-4 text-center font-medium text-gray-800">
          {product.price}₫
        </td>
  
        <td className="p-4">
          <div className="flex justify-center space-x-2">
            <Link
              to={`edit/${product.id}`}
              className="px-4 py-2 text-sm font-medium text-green-600 bg-green-100 rounded-md hover:bg-green-200 focus:ring focus:ring-green-300"
            >
              Edit
            </Link>
            <button
              className="px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-md hover:bg-red-200 focus:ring focus:ring-red-300"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
  
      {/* Confirmation Modal */}
      {isConfirmingDelete && (
        <tr>
          <td colSpan={5}> {/* Đảm bảo colspan để chiếm toàn bộ dòng */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
                <p>Bạn có chắc chắn muốn xóa sản phẩm này?</p>
                <div className="flex justify-end mt-4">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
                    onClick={handleConfirmDelete}
                  >
                    Yes, Delete
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 ml-2"
                    onClick={handleCancelDelete}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}