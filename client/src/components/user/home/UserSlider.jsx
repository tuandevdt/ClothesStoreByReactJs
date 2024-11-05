import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const UserSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
                    "https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/m2icqji8qcsbiegy6ildp-hlw-1800x833.png",
                    "https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/m2u76sn3m4wiuzyd2scHero%20Banner%20Website_1800x833%20(1).jpg",
                    "https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/m2u45llhkw1mqttm6wHero%20Banner%20Website_1800x833.jpg"
                ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-full mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        {/* Slider controls */}
        <button
          className="absolute top-1/2 left-0 z-30 p-2 text-white bg-black bg-opacity-50 rounded-full transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <GrFormPrevious />
        </button>
        <button
          className="absolute top-1/2 right-0 z-30 p-2 text-white bg-black bg-opacity-50 rounded-full transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <MdNavigateNext />
        </button>
        {/* Slider indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? "bg-white dark:bg-gray-800"
                  : "bg-white/50 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSlider;
