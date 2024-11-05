import React from "react";

export default function OnTopHome() {
  return (
    <div className="container mx-auto my-8">
        <div className="bg-black text-white px-4 py-6 my-8 flex justify-center items-center">
            <h1 className="text-4xl font-bold text-center mb-0">
                #Yody tự hào thương hiệu Việt
            </h1>
        </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/yody-top-10-thuong-hieu-thoi-trang.jpg"
                alt="Yody Thuoc Top 10"
                className="w-full h-100 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                Yody Thuộc Top 10 thương hiệu thời trang lớn nhất tại Đông Nam Á
                </h3>
                <p className="text-gray-600 mb-4">
                Theo Nghiên cứu được quyển của Campaign Asia x Milieu Insight*
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                Xem thêm
                </a>
            </div>
            </div>
        </div>
        <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/280.jpeg"
                alt="Can Moc 280 Cua Hang"
                className="w-full h-100 object-cover"
                />
                <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                    Yody Cần Mốc 280 Của Hàng
                </h3>
                <p className="text-gray-600 mb-4">
                    Thương hiệu thời trang Việt Nam YODY với ghi dấu ấn mới trong
                    hành trình phát triển của mình khi chạm mốc 280 cửa hàng trên
                    toàn quốc.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                    Xem thêm
                </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
