import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNewCartMutation } from "../../../redux/createAPI";
import { formatCurrency } from "../../../datatransfer/formatCurrency";
export default function DetailItem({ product, refetch }) {
  const [addCart] = useNewCartMutation();


  const [color, setColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [userId, setUserId] = useState(null); // Trạng thái cho userId

  useEffect(() => {
    const persistedAuth = localStorage.getItem('persist:auth');
    if (persistedAuth) {
      const parsedAuth = JSON.parse(persistedAuth); // Phân tích cú pháp JSON
      const userId = parsedAuth.id ? parsedAuth.id.replace(/\"/g, '') : null; // Lấy id và loại bỏ dấu ngoặc kép
      setUserId(userId);  
    }
  }, []);

  useEffect(() => {
    setColor(product.colors[0])
  }, [product, refetch])

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setQuantity(0);
  };

  const incrementQuantity = () => {
    if (selectedSize && quantity < selectedSize.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  async function handleAddCart(e) {
    e.preventDefault();
  
    if (!selectedSize) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please select a size!',
      });
      return;
    }
  
    if (quantity <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Quantity must be greater than zero!',
      });
      return;
    }
  
    try {
      const newData = { productId: product.id, userId, colorId: color.id, sizeId: selectedSize.id, quantity };

      // Display loading
      Swal.fire({
        title: 'Adding to cart...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
  
      const cartResponse = await addCart(newData).unwrap();

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Added to Cart!",
        showConfirmButton: false,
        timer: 1500,
      });
      // Handle the response here, such as updating cart UI, etc.
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Please Login!!!`,
      });
    }
  }
  
  return (
    <form action="" onSubmit={handleAddCart}>
      <div className="py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16">
          <div className="w-full lg:sticky top-0 text-center">
            <div className="lg:h-[560px]">
              <img
                src={color.image}
                alt="Product"
                className="lg:w-11/12 w-full h-full rounded-md object-cover object-top"
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
              {product.colors.map((colorItem) => (
                <button
                  type="button"
                  onClick={() => setColor(colorItem)}
                  key={colorItem.id}
                  className={`rounded-md `}
                >
                  <img
                    src={colorItem.image}
                    alt="Product1"
                    className={`w-16 cursor-pointer rounded-md ${
                      color.name === colorItem.name ? "outline" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {product.category.name}
                </p>
              </div>
              <div className="ml-auto flex flex-wrap gap-4">
                <button
                  type="button"
                  className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    fill="currentColor"
                    className="mr-1"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    />
                  </svg>
                  100
                </button>
                <button
                  type="button"
                  className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M453.332 85.332c0 38.293-31.039 69.336-69.332 69.336s-69.332-31.043-69.332-69.336C314.668 47.043 345.707 16 384 16s69.332 31.043 69.332 69.332zm0 0"
                      data-original="#000000"
                    />
                    <path
                      d="M384 170.668c-47.063 0-85.332-38.273-85.332-85.336C298.668 38.273 336.938 0 384 0s85.332 38.273 85.332 85.332c0 47.063-38.27 85.336-85.332 85.336zM384 32c-29.418 0-53.332 23.938-53.332 53.332 0 29.398 23.914 53.336 53.332 53.336s53.332-23.938 53.332-53.336C437.332 55.938 413.418 32 384 32zm69.332 394.668C453.332 464.957 422.293 496 384 496s-69.332-31.043-69.332-69.332c0-38.293 31.039-69.336 69.332-69.336s69.332 31.043 69.332 69.336zm0 0"
                      data-original="#000000"
                    />
                    <path
                      d="M384 512c-47.063 0-85.332-38.273-85.332-85.332 0-47.063 38.27-85.336 85.332-85.336s85.332 38.273 85.332 85.336c0 47.059-38.27 85.332-85.332 85.332zm0-138.668c-29.418 0-53.332 23.938-53.332 53.336C330.668 456.063 354.582 480 384 480s53.332-23.938 53.332-53.332c0-29.398-23.914-53.336-53.332-53.336zM154.668 256c0 38.293-31.043 69.332-69.336 69.332C47.043 325.332 16 294.293 16 256s31.043-69.332 69.332-69.332c38.293 0 69.336 31.039 69.336 69.332zm0 0"
                      data-original="#000000"
                    />
                    <path
                      d="M85.332 341.332C38.273 341.332 0 303.062 0 256s38.273-85.332 85.332-85.332c47.063 0 85.336 38.27 85.336 85.332s-38.273 85.332-85.336 85.332zm0-138.664C55.914 202.668 32 226.602 32 256s23.914 53.332 53.332 53.332c29.422 0 53.336-23.934 53.336-53.332s-23.914-53.332-53.336-53.332zm0 0"
                      data-original="#000000"
                    />
                    <path
                      d="M135.703 245.762c-7.426 0-14.637-3.864-18.562-10.774-5.825-10.218-2.239-23.254 7.98-29.101l197.95-112.852c10.218-5.867 23.253-2.281 29.1 7.977 5.825 10.218 2.24 23.254-7.98 29.101L146.238 242.965a21.195 21.195 0 0 1-10.535 2.797zm197.93 176c-3.586 0-7.211-.899-10.54-2.797L125.142 306.113c-10.22-5.824-13.801-18.86-7.977-29.101 5.8-10.239 18.856-13.844 29.098-7.977l197.953 112.852c10.219 5.824 13.8 18.86 7.976 29.101-3.945 6.91-11.156 10.774-18.558 10.774zm0 0"
                      data-original="#000000"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <hr className="my-8" />
            <div className="flex flex-wrap gap-4 items-start">
              <div>
                <p className="text-gray-800 text-4xl font-bold">
                  {formatCurrency(product.price)}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  <strike>$42</strike>{" "}
                  <span className="text-sm ml-1">Tax included</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-4 ml-auto">
                <button
                  type="button"
                  className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center"
                >
                  <svg
                    className="w-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  4.8
                </button>
                <button
                  type="button"
                  className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z"
                      data-original="#000000"
                    />
                    <path
                      d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z"
                      data-original="#000000"
                    />
                  </svg>
                  87 Reviews
                </button>
              </div>
            </div>
            <hr className="my-8" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Chọn size</h3>
              <div className="flex flex-wrap gap-4 mt-4">
  {color.sizes.map((size) => (
    <div key={size.id} className="flex flex-col items-center">
      <button
        type="button"
        className={`w-10 h-10 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0 ${
          selectedSize?.id === size.id ? "border-black" : ""
        }`}
        onClick={() => handleSizeSelect(size)}
      >
        {size.name}
      </button>

      {/* Chọn số lượng */}
      {selectedSize?.id === size.id && (
        <div className="flex flex-col items-center mt-2">
          <div className="flex items-center">
            <button
              type="button"
              onClick={decrementQuantity}
              className="px-2 py-1 border rounded-md"
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              type="button"
              onClick={incrementQuantity}
              className="px-2 py-1 border rounded-md"
            >
              +
            </button>
          </div>
          <span className="mt-1">Quantity: {size.stock}</span>
        </div>
      )}
    </div>
  ))}
</div>
            </div>
            <hr className="my-8" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Chọn màu
              </h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {product.colors?.map((colorItem) => (
                  <button
                    key={colorItem.id}
                    style={{ backgroundColor: colorItem.name }}
                    type="button"
                    onClick={() => setColor(colorItem)}
                    className={`w-10 h-10 bg-black border border-gray hover:border-gray-800 rounded-md shrink-0 cursor-pointer rounded-md 
                    ${color.name === colorItem.name ? "border-red-500" : ""}`}
                  />
                ))}
              </div>
            </div>
            <hr className="my-8" />
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-md"
              >
                Buy now
              </button>
              <button
                type="submit"
                className="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 max-w-4xl">
          <ul className="flex border-b">
            <li className="text-gray-800 font-semibold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
              Description
            </li>
            <li className="text-gray-500 font-semibold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">
              Reviews
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800">
              Product Description
            </h3>
            <p className="text-sm text-gray-500 mt-4">{product.description}</p>
          </div>
          <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-500">
            <li>
              A gray t-shirt is a wardrobe essential because it is so versatile.
            </li>
            <li>
              Available in a wide range of sizes, from extra small to extra
              large, and even in tall and petite sizes.
            </li>
            <li>
              This is easy to care for. They can usually be machine-washed and
              dried on low heat.
            </li>
            <li>
              You can add your own designs, paintings, or embroidery to make it
              your own.
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}
