import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Đăng ký các thành phần Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const OrderStatusChart = ({ orderData }) => {
    console.log('orderData',orderData   );
    
    const statuses = [
        "Chờ xác nhận",
        "Đã xác nhận",
        "Đang vận chuyển",
        "Đang giao hàng",
        "Đã giao",
        "Đã hoàn thành",
        "Đã hủy đơn"
    ];

    const data = {
        labels: statuses,
        datasets: [
            {
                label: 'Trạng thái đơn hàng',
                data: statuses.map(status => orderData[status] || 0),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(150, 75, 50, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(150, 75, 50, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Để kiểm soát kích thước
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Trạng Thái Đơn Hàng',
            },
        },
    };

    return (
        <div className="flex p-4 items-center">
            <div style={{ width: '650px', height: '650px' }}>
                <Pie data={data} options={options} />
            </div>
            <div className="ml-4">
                <h1 className="font-bold text-xl">Chi tiết đơn hàng</h1>
                {statuses.map(status => (
                    <div key={status}>
                        <strong>{status}:</strong> {orderData[status] || 0}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderStatusChart;