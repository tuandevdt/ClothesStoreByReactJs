import React from 'react'

export default function CheckoutPage() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900 md:py-16">
  <form
    action=""
    id="form-checkout"
    className="mx-auto max-w-screen-xl px-4 2xl:px-0"
  >
    <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
      <li className="after:border-1 flex items-center text-blue-500 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-blue-400 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg
            className="me-2 h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Cart
        </span>
      </li>
      <li className="after:border-1 flex items-center text-blue-500 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-blue-400 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg
            className="me-2 h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Checkout
        </span>
      </li>
      <li className="flex shrink-0 items-center">
        <svg
          className="me-2 h-4 w-4 sm:h-5 sm:w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Order summary
      </li>
    </ol>
    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
      <div className="min-w-0 flex-1 space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Delivery Details
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="your_name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                Enter Fullname*{" "}
              </label>
              <input
                type="text"
                id="your_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Doãn Thanh Tuấn"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="your_email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                City*{" "}
              </label>
              <input
                type="text"
                id="your_city"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Đà Nẵng"
                required=""
              />
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label
                  htmlFor="select-country-input-3"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  District*{" "}
                </label>
              </div>
              <input
                type="text"
                id="your_district"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Liên Chiểu"
                required=""
              />
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label
                  htmlFor="select-city-input-3"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Ward*{" "}
                </label>
              </div>
              <input
                type="text"
                id="your_ward"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Hòa Khánh Nam"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="phone-input-3"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                Phone Number*{" "}
              </label>
              <div className="flex items-center">
                <button
                  id="dropdown-phone-button-3"
                  data-dropdown-toggle="dropdown-phone-3"
                  className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <svg
                    fill="none"
                    aria-hidden="true"
                    className="me-2 h-4 w-4"
                    viewBox="0 0 20 15"
                  >
                    <rect
                      width="19.6"
                      height={14}
                      y=".5"
                      fill="#DA251D"
                      rx={2}
                    />
                    <path fill="#FF0" d="M10 3.5 7.5 7.5h5z" />
                  </svg>
                  +84
                </button>
                <div
                  id="dropdown-phone-3"
                  className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                >
                  <ul
                    className="p-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-phone-button-2"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            fill="none"
                            aria-hidden="true"
                            className="me-2 h-4 w-4"
                            viewBox="0 0 20 15"
                          >
                            <rect
                              width="19.6"
                              height={14}
                              y=".5"
                              fill="#fff"
                              rx={2}
                            />
                            <mask
                              id="a"
                              style={{ maskType: "luminance" }}
                              width={20}
                              height={15}
                              x={0}
                              y={0}
                              maskUnits="userSpaceOnUse"
                            >
                              <rect
                                width="19.6"
                                height={14}
                                y=".5"
                                fill="#fff"
                                rx={2}
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path
                                fill="#D02F44"
                                fillRule="evenodd"
                                d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                clipRule="evenodd"
                              />
                              <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                              <g filter="url(#filter0_d_343_121520)">
                                <path
                                  fill="url(#paint0_linear_343_121520)"
                                  fillRule="evenodd"
                                  d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                  clipRule="evenodd"
                                />
                              </g>
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_343_121520"
                                x1=".933"
                                x2=".933"
                                y1="1.433"
                                y2="6.1"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#fff" />
                                <stop offset={1} stopColor="#F0F0F0" />
                              </linearGradient>
                              <filter
                                id="filter0_d_343_121520"
                                width="6.533"
                                height="5.667"
                                x=".933"
                                y="1.433"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                              >
                                <feFlood
                                  floodOpacity={0}
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  result="hardAlpha"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy={1} />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_343_121520"
                                />
                                <feBlend
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_343_121520"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="phone-input"
                    className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                    pattern="[0-9]{9}"
                    placeholder={362931719}
                    required=""
                  />{" "}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                Street*{" "}
              </label>
              <input
                type="text"
                id="your_street"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="65 Phạm Như Xương"
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
                Add new address
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Payment
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="credit-card"
                    aria-describedby="credit-card-text"
                    type="radio"
                    name="payment-method"
                    defaultValue=""
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    defaultChecked=""
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    htmlFor="credit-card"
                    className="font-medium leading-none text-gray-900 dark:text-white"
                  >
                    {" "}
                    Credit Card{" "}
                  </label>
                  <p
                    id="credit-card-text"
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                  >
                    Pay with your credit card
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Delete
                </button>
                <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                <button
                  type="button"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="pay-on-delivery"
                    aria-describedby="pay-on-delivery-text"
                    type="radio"
                    name="payment-method"
                    defaultValue=""
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    htmlFor="pay-on-delivery"
                    className="font-medium leading-none text-gray-900 dark:text-white"
                  >
                    {" "}
                    Payment on delivery{" "}
                  </label>
                  <p
                    id="pay-on-delivery-text"
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                  >
                    +$15 payment processing fee
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Delete
                </button>
                <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                <button
                  type="button"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="paypal-2"
                    aria-describedby="paypal-text"
                    type="radio"
                    name="payment-method"
                    defaultValue=""
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    htmlFor="paypal-2"
                    className="font-medium leading-none text-gray-900 dark:text-white"
                  >
                    {" "}
                    Paypal account{" "}
                  </label>
                  <p
                    id="paypal-text"
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                  >
                    Connect to your account
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Delete
                </button>
                <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                <button
                  type="button"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Delivery Methods
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="dhl"
                    aria-describedby="dhl-text"
                    type="radio"
                    name="delivery-method"
                    defaultValue=""
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    defaultChecked=""
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    htmlFor="dhl"
                    className="font-medium leading-none text-gray-900 dark:text-white"
                  >
                    {" "}
                    $15 - DHL Fast Delivery{" "}
                  </label>
                  <p
                    id="dhl-text"
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                  >
                    Get it by Tommorow
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="fedex"
                    aria-describedby="fedex-text"
                    type="radio"
                    name="delivery-method"
                    defaultValue=""
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    htmlFor="fedex"
                    className="font-medium leading-none text-gray-900 dark:text-white"
                  >
                    {" "}
                    Free Delivery - FedEx{" "}
                  </label>
                  <p
                    id="fedex-text"
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                  >
                    Get it by Friday, 13 Dec 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="express"
                    aria-describedby="express-text"
                    type="radio"
                    name="delivery-method"
                    defaultValue=""
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    htmlFor="express"
                    className="font-medium leading-none text-gray-900 dark:text-white"
                  >
                    {" "}
                    $49 - Express Delivery{" "}
                  </label>
                  <p
                    id="express-text"
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                  >
                    Get it today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
        <div className="flow-root">
          <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <div className="grid grid-cols-4 items-center gap-4 py-3 text-base font-medium text-gray-900 dark:text-white">
              <div>Name</div>
              <div>Quantity</div>
              <div>Price</div>
              <div className="text-right">Total</div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 py-3">
              <div className="flex items-center">
                <img
                  src="http://localhost:4000/"
                  alt=""
                  className="w-20 mr-4"
                />
              </div>
              <div className="text-base font-medium text-gray-900 dark:text-white">
                1
              </div>
              <div className="text-base font-medium text-gray-900 dark:text-white">
                $22222
              </div>
              <div className="text-base font-medium text-gray-900 dark:text-white text-right">
                555555d
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 py-3">
              <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                Savings
              </div>
              <div />
              <div />
              <div className="text-base font-medium text-green-500 text-right">
                0
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 py-3">
              <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                Store Pickup
              </div>
              <div />
              <div />
              <div className="text-base font-medium text-gray-900 dark:text-white text-right">
                $99
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 py-3">
              <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                Tax
              </div>
              <div />
              <div />
              <div className="text-base font-medium text-gray-900 dark:text-white text-right">
                $199
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 py-3">
              <div className="text-base font-bold text-gray-900 dark:text-white">
                Total
              </div>
              <div />
              <div />
              <div className="text-base font-bold text-gray-900 dark:text-white text-right">
                $233333
              </div>
              <input
                type="hidden"
                id="total"
                className="form-control"
                defaultValue={233333}
              />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Proceed to Payment
          </button>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            One or more items in your cart require an account.
            <a
              href="#"
              title=""
              className="font-medium text-blue-500 underline hover:no-underline dark:text-blue-500"
            >
              Sign in or create an account now.
            </a>
          </p>
        </div>
      </div>
    </div>
  </form>
</section>

  )
}
