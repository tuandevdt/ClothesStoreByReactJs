import React, { useState, useEffect } from 'react';
import { useGetStatusAdminQuery, useUpdateOrderMutation } from '../../../redux/createAPI';

const statusOptions = [
    "Chờ xác nhận",
    "Đã xác nhận",
    "Đang vận chuyển",
    "Đang giao hàng",
    "Đã giao",
    "Đã hoàn thành",
    "Đã hủy đơn"
];

export default function EditStatusOrderAdmin({ orderId, onClose, refetch }) {
    const { data } = useGetStatusAdminQuery(orderId);
    const [updateStatus] = useUpdateOrderMutation()
    const initialStatus = data?.order.status || statusOptions[0];

    const [selectedStatus, setSelectedStatus] = useState(initialStatus);
    
    useEffect(() => {
        setSelectedStatus(initialStatus);
    }, [initialStatus]);

    const handleChange = (e) => {
        setSelectedStatus(e.target.value);
    };

    const isDisabled = (status) => {
        const currentIndex = statusOptions.indexOf(selectedStatus);
        const statusIndex = statusOptions.indexOf(status);
        
        return (
            (statusIndex < currentIndex && status !== "Đã hủy đơn") ||
            (selectedStatus !== "Chờ xác nhận" && status === "Đã hủy đơn")
        );
    };

    const handleSubmit = async () => {
        console.log(`Cập nhật trạng thái đơn hàng ${orderId} thành: ${selectedStatus}`);
        const update = await updateStatus({ id: orderId, status:selectedStatus })
        console.log('update', update);
        
        refetch()
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative p-4 bg-white border border-gray-300 rounded shadow-lg z-10">
                <h2 className="text-xl font-bold mb-4">Chỉnh sửa trạng thái đơn hàng {orderId}</h2>
                <select
                    value={selectedStatus}
                    onChange={handleChange}
                    className="border p-2 mb-4"
                >
                    {statusOptions.map((status) => (
                        <option key={status} value={status} disabled={isDisabled(status)}>
                            {status}
                        </option>
                    ))}
                </select>
                <div className="flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Cập nhật
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
}