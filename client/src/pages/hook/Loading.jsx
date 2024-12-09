import { useState } from "react";
import { RingLoader } from "react-spinners"; // Import đúng RingLoader từ react-spinners

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#61dafb"); // Màu xanh của React

  return (
    <div
      className="sweet-loading"
      style={{
        display: "flex", // Dùng flexbox để căn giữa
        justifyContent: "center", // Căn giữa theo chiều ngang
        alignItems: "center", // Căn giữa theo chiều dọc
        backgroundColor: "rgba(0, 0, 0,0.8)", // Nền đen mờ với độ trong suốt
        height: "100vh", // Đảm bảo chiếm toàn bộ chiều cao màn hình
        position: "absolute", // Cố định vị trí
        width: "100%", // Cố định chiều rộng
        top: 0, // Đảm bảo ở trên cùng
      }}
    >
      <RingLoader color={color} loading={loading} size={150} />
    </div>
  );
}

export default Loading;
