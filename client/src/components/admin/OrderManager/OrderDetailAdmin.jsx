import React, { useEffect, useState } from "react";
import { useGetAllOrderItemsQuery } from "../../../redux/createAPI";
import { MdClose } from "react-icons/md";

export default function OrderDetailAdmin({ orderId, onClose }) {
  const { data, error, isLoading } = useGetAllOrderItemsQuery(orderId, {
    skip: !orderId,
  });
  let sumPrice = 0;
  useEffect(() => {
    if (data) {
      console.log("Dữ liệu chi tiết đơn hàng:", data);
    }
  }, [data]);
  const details = data?.data || [];
  console.log(details);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const listDetail = details?.map((item) => {
    sumPrice += item.product.price * item.quantity;
    return (
      <tr key={item.id}>
        <td className="py-2 px-4 border-b">
          <img
            src={item.color.image}
            alt={item.product.name}
            className="w-16 h-16 object-cover"
          />
        </td>
        <td className="py-2 px-4 border-b">{item.product.name}</td>
        <td className="py-2 px-4 border-b">{item.size.name}</td>
        <td className="py-2 px-4 border-b">{item.product.price} VND</td>
        <td className="py-2 text-center px-4 border-b">{item.quantity}</td>
        <td className="py-2 px-4 border-b">
          {item.quantity * item.product.price}
        </td>
      </tr>
    );
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative p-4 bg-white border border-gray-300 rounded shadow-lg z-10">
        <h1 className="text-xl font-bold mb-4">
          Chi tiết Đơn hàng {details && details[0].orderId}
        </h1>
        <div>
          <div>
            <strong>Người nhận:</strong> {details && details[0].order.fullname}
          </div>
          <div>
            <strong>Sđt:</strong> 0{details && details[0].order.phone}
          </div>
          <div>
            <strong>Địa chỉ:</strong> {details && details[0].order.address}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 bg-gray-300 text-white rounded-[15%] hover:bg-gray-400"
          aria-label="Đóng"
        >
          <MdClose size={24} />
        </button>
        <table className="min-w-full bg-white mt-4 border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Hình ảnh</th>
              <th className="py-2 px-4 border-b">Tên sản phẩm</th>
              <th className="py-2 px-4 border-b">Kích thước</th>
              <th className="py-2 px-4 border-b">Giá</th>
              <th className="py-2 px-4 border-b">Số lượng</th>
              <th className="py-2 px-4 border-b">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {listDetail}
            <tr>
              <td className="py-2 px-4 border-b" colSpan={5}>
                <strong>Tổng tiền:</strong>
              </td>
              <td className="py-2 px-4 border-b">{details && sumPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
