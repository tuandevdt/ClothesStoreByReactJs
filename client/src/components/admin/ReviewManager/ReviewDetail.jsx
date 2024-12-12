import React from "react";
import { Rate } from "antd";
import { useDeleteReviewMutation } from "../../../redux/createAPI";
import { formatDate } from "../../../datatransfer/formDate";
export default function ReviewDetailModal({ product, reviews, onClose, refetch }) {
    const [deleteReview] = useDeleteReviewMutation()
    const handleDelete = async (id) => {
        const confirmed = window.confirm("Bạn có chắc chắn muốn xóa đánh giá này không?");
        if (confirmed) {
            console.log('Xóa review với id:', id);
            await deleteReview(id);
            refetch();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-white p-4 rounded shadow-lg z-10">
                <h2 className="text-xl font-bold mb-4">Chi tiết sản phẩm</h2>
                <p>
                    <strong>Tên sản phẩm:</strong> {product.name}
                </p>
                <img
                    className="w-[80px] mb-2"
                    src={product.colors[0].image}
                    alt={product.name}
                />
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="py-2 px-4 border-b">Đánh giá</th>
                                <th className="py-2 px-4 border-b">Rating</th>
                                <th className="py-2 px-4 border-b">Ngày</th>
                                <th className="py-2 px-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews?.map((review) => (
                                <tr key={review.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b">{review.text}</td>
                                    <td className="py-2 px-4 border-b">
                                        <Rate disabled allowHalf defaultValue={review.rating} />
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {formatDate(review.createdAt)}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => handleDelete(review.id)}
                                            className="text-red-500"
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button
                    onClick={onClose}
                    className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                >
                    Đóng
                </button>
            </div>
        </div>
    );
}