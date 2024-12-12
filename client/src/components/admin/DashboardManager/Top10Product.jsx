import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import {  useGetTop10Query } from "../../../redux/createAPI";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TopProductsChart = () => {
    const { data: products} = useGetTop10Query({
        refetchOnMountOrArgChange: true,
    });
    const listProducts = products?.products;    
    
    const data = {
        labels: listProducts?.map(product => product.name),
        datasets: [
            {
                label: 'Giá (VND)',
                data: listProducts?.map(product => product.price),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Top 10 Sản Phẩm Giá Cao Nhất',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Giá (VND)',
                },
            },
        },
    };

    return (
        <div className="p-4">
            <Bar data={data} options={options} />
        </div>
    );
};

export default TopProductsChart;