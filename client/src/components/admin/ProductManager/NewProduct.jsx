import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetCategoriesAdminQuery, useNewProductMutation } from "../../../redux/createAPI";

export default function NewProduct() {
  const navigate = useNavigate();

  const { data } = useGetCategoriesAdminQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [newProduct] = useNewProductMutation();
  const categories = data?.data || [];

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    categoryId: "",
  });

  const [variants, setVariants] = useState([{ color: "", sizes: [], image: "" }]);

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });

    // Reset sizes when category changes
    if (name === "categoryId") {
      const updatedVariants = variants.map((variant) => ({ ...variant, sizes: [] }));
      setVariants(updatedVariants);
    }
  };

  const handleVariantChange = (index, e) => {
    const { name, value } = e.target;
    const newVariants = [...variants];
    newVariants[index][name] = value;
    setVariants(newVariants);
  };

  const handleSizeChange = (variantIndex, sizeName, stockValue) => {
    const updatedVariants = [...variants];
    const sizes = updatedVariants[variantIndex].sizes;

    const existingSizeIndex = sizes.findIndex((s) => s.name === sizeName);

    if (existingSizeIndex !== -1) {
      if (stockValue === "") {
        // Remove size if stock is empty
        sizes.splice(existingSizeIndex, 1);
      } else {
        // Update stock if size exists
        sizes[existingSizeIndex].stock = stockValue;
      }
    } else {
      // Add new size with stock
      sizes.push({ name: sizeName, stock: stockValue });
    }

    updatedVariants[variantIndex].sizes = sizes;
    setVariants(updatedVariants);
  };

  const addVariant = () => {
    setVariants([...variants, { color: "", sizes: [], image: "" }]);
  };

  const removeVariant = (index) => {
    const newVariants = variants.filter((_, i) => i !== index);
    setVariants(newVariants);
  };

  const getSizesByCategory = (categoryId) => {
    switch (categoryId) {
      case "1": // men_clothes
        return ["M", "L", "XL", "2XL", "3XL", "4XL"];
      case "2": // women_clothes
        return ["S", "M", "L", "XL", "2XL"];
      case "3": // kid_clothes
        return ["2-3", "4-5", "6-7", "8-9", "10-11", "11-12"];
      default:
        return [];
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Chuẩn bị dữ liệu colors và sizes
    const formattedVariants = variants.map((variant) => ({
      name: variant.color,
      image: variant.image,
      sizes: variant.sizes,
    }));

    // Chuẩn bị dữ liệu cuối cùng để gửi
    const finalProductData = {
      ...product,
      categoryId: Number(product.categoryId), // Ép kiểu categoryId thành number
      colors: formattedVariants,
    };

    console.log("Final Product Data: ", finalProductData);

    const dataNew = await newProduct(finalProductData);
    console.log(dataNew);
    navigate("/admin/products", { state: { refetch: true } });
  };

  return (
    <div className="w-full lg:ml-64">
      <form
        onSubmit={onSubmit}
        className="w-full bg-white text-gray-900 shadow-md p-6 z-[999999] rounded"
      >
        <h2 className="text-2xl text-gray-800 font-bold mb-4">Create Product</h2>

        {/* Product Inputs */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleProductChange}
          required
          className="block w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleProductChange}
          required
          className="block w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleProductChange}
          className="block w-full p-2 mb-4 text-gray-900 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <select
          name="categoryId"
          value={product.categoryId}
          onChange={handleProductChange}
          className="block w-full p-2 mb-4 text-gray-700 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option className="text-gray-200" value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option
              className="text-gray-700"
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        {/* Variants */}
        <h3 className="text-xl font-semibold mb-2">Variants</h3>
        {variants.map((variant, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <input
              type="text"
              name="color"
              placeholder="Color"
              value={variant.color}
              onChange={(e) => handleVariantChange(index, e)}
              required
              className="block w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="image"
              placeholder="Color Image URL"
              value={variant.image}
              onChange={(e) => handleVariantChange(index, e)}
              required
              className="block w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Sizes */}
            <div className="mb-2">
              <p className="font-semibold">Sizes and Stock:</p>
              {getSizesByCategory(product.categoryId).map((size) => {
                const existingSize = variant.sizes.find((s) => s.name === size);
                return (
                  <div key={size} className="flex items-center mb-2">
                    <span className="mr-2">{size}</span>
                    <input
                      type="number"
                      placeholder="Stock"
                      value={existingSize?.stock || ""}
                      onChange={(e) =>
                        handleSizeChange(index, size, e.target.value)
                      }
                      className="block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={addVariant}
              className="mb-4 mr-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Add Variant
            </button>
            <button
              type="button"
              onClick={() => removeVariant(index)}
              className="mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Remove Variant
            </button>
          </div>
        ))}

        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
