import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCategoriesAdminQuery, useNewProductMutation, useUpdateProductMutation } from "../../../redux/createAPI";

export default function ItemEditProduct({ itemProduct }) {
  const navigate = useNavigate();
  const [updateProduct] = useUpdateProductMutation();
  const { data } = useGetCategoriesAdminQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const categories = data?.data || [];

  const [product, setProduct] = useState({
    name: itemProduct.name,
    price: itemProduct.price,
    description: itemProduct.description,
    categoryId: itemProduct.categoryId,
  });

  const [variants, setVariants] = useState(itemProduct.colors || [{ name: "", sizes: [], image: "" }]);

  const getSizesByCategory = (categoryId) => {
    switch (categoryId) {
      case 1: // men_clothes
        return ["M", "L", "XL", "2XL", "3XL", "4XL"];
      case 2: // women_clothes
        return ["S", "M", "L", "XL", "2XL"];
      case 3: // kid_clothes
        return ["2-3", "4-5", "6-7", "8-9", "10-11", "11-12"];
      default:
        return [];
    }
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));

    // Reset sizes when category changes
    if (name === "categoryId") {
      const updatedVariants = variants.map((variant) => ({ ...variant, sizes: [] }));
      setVariants(updatedVariants);
    }
  };

  const handleVariantChange = (index, e) => {
    const { name, value } = e.target;
    setVariants((prevVariants) => {
      const newVariants = prevVariants.map((variant, i) => {
        if (i === index) {
          return { ...variant, [name]: value }; // Update the variant's property
        }
        return variant; // Keep other variants unchanged
      });
      return newVariants; // Return updated variants
    });
  };

  const handleSizeChange = (variantIndex, sizeIndex, e) => {
    const { name, value } = e.target;
    setVariants((prevVariants) => {
      const updatedVariants = prevVariants.map((variant, i) => {
        if (i === variantIndex) {
          const sizes = variant.sizes.map((size, idx) => {
            if (idx === sizeIndex) {
              return { ...size, [name]: value }; // Update size name or stock
            }
            return size; // Keep other sizes unchanged
          });
          return { ...variant, sizes }; // Update the variant with modified sizes
        }
        return variant; // Keep other variants unchanged
      });
      return updatedVariants; // Return updated variants
    });
  };

  const addVariant = () => {
    const sizes = getSizesByCategory(product.categoryId);
    console.log('sizes add',sizes);
     // Get sizes based on current categoryId
    const newVariant = { name: "", sizes: sizes.map(size => ({ name: size, stock: "" })), image: "" }; // Initialize sizes for new variant
    setVariants([...variants, newVariant]); // Add the new variant
  };

  const removeVariant = (index) => {
    setVariants((prevVariants) => prevVariants.filter((_, i) => i !== index)); // Remove the specified variant
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const formattedVariants = variants.map((variant) => ({
      id: variant.id || null, // Include the ID if it exists
      name: variant.name,
      image: variant.image,
      sizes: variant.sizes,
    }));
  
    const finalProductData = {
      ...product,
      categoryId: Number(product.categoryId),
      colors: formattedVariants,
    };
  
    console.log("Final Product Data: ", finalProductData);
    console.log(itemProduct.id);
    
    try {
      const result = await updateProduct({ id: itemProduct.id, body: finalProductData });
      console.log(result);
      
      navigate("/admin/products", { state: { refetch: true } });
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  };
  return (
    <div className="w-full lg:ml-64">
      <form onSubmit={onSubmit} className="w-full bg-white text-gray-900 shadow-md p-6 rounded">
        <h2 className="text-2xl text-gray-800 font-bold mb-4">Update Product</h2>

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
          <option value="" disabled>Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
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
              name="name" // This will update the color name
              placeholder="Color"
              value={variant.name} // Use variant.name
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
              {variant.sizes.map((size, sizeIndex) => (
                <div key={sizeIndex} className="flex items-center mb-2">
                  <span className="mr-2 w-10">{size.name}</span>
                  <input
                    type="number"
                    name="stock" // Update stock
                    placeholder="Stock"
                    value={size.stock}
                    onChange={(e) => handleSizeChange(index, sizeIndex, e)}
                    className="block w-1/2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              ))}
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
          Update Product
        </button>
      </form>
    </div>
  );
}