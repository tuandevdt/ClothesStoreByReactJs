import React from "react";

export default function OfferHome() {
  return (
    <div className="container mx-auto">
      <img
        className="py-8 mx-auto lg:max-w-7xl sm:max-w-full"
        src="https://m.yodycdn.com/fit-in/filters:format(webp)//products/Collection%20List%20Banner_Website_1800x600.jpg"
        alt=""
      />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src="https://m.yodycdn.com/fit-in/filters:format(webp)//products/YODY%20x%20Wintel_893x598.jpg"
            alt="Image 1"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://m.yodycdn.com/fit-in/filters:format(webp)//products/YODY_XANH%20SM_893x598.jpg"
            alt="Image 2"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://m.yodycdn.com/fit-in/filters:format(webp)//products/Frame%2032%201.jpg"
            alt="Image 3"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://m.yodycdn.com/fit-in/filters:format(webp)//products/Frame%2031%201.jpg"
            alt="Image 4"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
