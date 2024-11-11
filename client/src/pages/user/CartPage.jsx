import React from "react";

export default function CartPage() {
  return (
    <div className="font-sans py-4 mx-auto lg:max-w-7xl sm:max-w-full md:py-16">
      <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
        <li className="after:border-1 flex items-center text-blue-500 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-blue-400 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <svg
              className="me-2 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
            Cart
          </span>
        </li>
        <li className="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-blue-400 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <svg
              className="me-2 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
            Checkout
          </span>
        </li>
        <li className="flex shrink-0 items-center">
          <svg
            className="me-2 h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
          Order summary
        </li>
      </ol>
      <div className="grid sm:mt-8 lg:grid-cols-3 gap-10 w-full">
        <div className="lg:col-span-2 bg-white divide-y">
          <div className="flex items-start max-sm:flex-col gap-4 py-4">
            <div className="h-36 shrink-0">
              <img
                src="https://readymadeui.com/images/product6.webp"
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <div className="flex items-start gap-4 w-full">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Black T-Shirt
                </h3>
                <div className="space-y-1">
                  <h6 className="text-sm text-gray-800">
                    Size: <strong className="ml-2">7.5</strong>
                  </h6>
                  <h6 className="text-sm text-gray-800">
                    Color: <strong className="ml-2">Black</strong>
                  </h6>
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="font-semibold text-red-500 text-sm flex items-center gap-2 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      />
                      <path
                        d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                        data-original="#000000"
                      />
                    </svg>
                    Remove
                  </button>
                  <button
                    type="button"
                    className="font-semibold text-pink-500 text-sm flex items-center gap-2 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                    Move to wish list
                  </button>
                </div>
              </div>
              <div className="ml-auto text-right">
                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                  <span className="font-bold text-sm leading-[18px]">1</span>
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-gray-500 mb-1">
                    <strike className="font-medium">$22.5</strike>
                  </h4>
                  <h4 className="text-lg font-bold text-gray-800">$18.5</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start max-sm:flex-col gap-4 py-4">
            <div className="h-36 shrink-0">
              <img
                src="https://readymadeui.com/images/product3.webp"
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <div className="flex items-start gap-4 w-full">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Gray T-Shirt
                </h3>
                <div className="space-y-1">
                  <h6 className="text-sm text-gray-800">
                    Size: <strong className="ml-2">7.5</strong>
                  </h6>
                  <h6 className="text-sm text-gray-800">
                    Color: <strong className="ml-2">Gray</strong>
                  </h6>
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="font-semibold text-red-500 text-sm flex items-center gap-2 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      />
                      <path
                        d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                        data-original="#000000"
                      />
                    </svg>
                    Remove
                  </button>
                  <button
                    type="button"
                    className="font-semibold text-pink-500 text-sm flex items-center gap-2 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                    Move to wish list
                  </button>
                </div>
              </div>
              <div className="ml-auto text-right">
                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                  <span className="font-bold text-sm leading-[18px]">1</span>
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-gray-500 mb-1">
                    <strike className="font-medium">$22.5</strike>
                  </h4>
                  <h4 className="text-lg font-bold text-gray-800">$18.5</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start max-sm:flex-col gap-4 py-4">
            <div className="h-36 shrink-0">
              <img
                src="https://readymadeui.com/images/product7.webp"
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <div className="flex items-start gap-4 w-full">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Black T-Shirt
                </h3>
                <div className="space-y-1">
                  <h6 className="text-sm text-gray-800">
                    Size: <strong className="ml-2">7.5</strong>
                  </h6>
                  <h6 className="text-sm text-gray-800">
                    Color: <strong className="ml-2">Black</strong>
                  </h6>
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="font-semibold text-red-500 text-sm flex items-center gap-2 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      />
                      <path
                        d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                        data-original="#000000"
                      />
                    </svg>
                    Remove
                  </button>
                  <button
                    type="button"
                    className="font-semibold text-pink-500 text-sm flex items-center gap-2 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                    Move to wish list
                  </button>
                </div>
              </div>
              <div className="ml-auto text-right">
                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                  <span className="font-bold text-sm leading-[18px]">1</span>
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-gray-500 mb-1">
                    <strike className="font-medium">$22.5</strike>
                  </h4>
                  <h4 className="text-lg font-bold text-gray-800">$18.5</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start max-sm:flex-col gap-4 py-4">
            <div className="h-36 shrink-0">
              <img
                src="https://readymadeui.com/images/product8.webp"
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <div className="flex items-start gap-4 w-full">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Black T-Shirt
                </h3>
                <div className="space-y-1">
                  <h6 className="text-sm text-gray-800">
                    Size: <strong className="ml-2">7.5</strong>
                  </h6>
                  <h6 className="text-sm text-gray-800">
                    Color: <strong className="ml-2">Black</strong>
                  </h6>
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="font-semibold text-red-500 text-sm flex items-center gap-2 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      />
                      <path
                        d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                        data-original="#000000"
                      />
                    </svg>
                    Remove
                  </button>
                  <button
                    type="button"
                    className="font-semibold text-pink-500 text-sm flex items-center gap-2 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                    Move to wish list
                  </button>
                </div>
              </div>
              <div className="ml-auto text-right">
                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                  <span className="font-bold text-sm leading-[18px]">1</span>
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-gray-500 mb-1">
                    <strike className="font-medium">$22.5</strike>
                  </h4>
                  <h4 className="text-lg font-bold text-gray-800">$18.5</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md p-6 lg:sticky lg:top-0 h-max">
          <h3 className="text-lg font-bold text-gray-800 border-b pb-4">
            Order Summary
          </h3>
          <ul className="text-gray-800 divide-y mt-4">
            <li className="flex flex-wrap gap-4 text-sm py-3">
              Subtotal <span className="ml-auto font-bold">$73.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm py-3">
              Shipping <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm py-3">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm py-3 font-bold">
              Total <span className="ml-auto">$81.00</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-4 text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            <a href="/checkout">Make Payment</a>
          </button>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Apply promo code
            </h3>
            <div className="flex border border-blue-600 overflow-hidden max-w-md rounded-md">
              <input
                type="email"
                placeholder="Promo code"
                className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
              />
              <button
                type="button"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-5 text-sm text-white"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
