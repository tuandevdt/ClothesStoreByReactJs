import React from "react";
import { Rate } from "antd";
import {formatDate } from "../../../datatransfer/formDate";

export default function ReviewItemTr({ review, refetch, index, onShowReview }) {
  const listRatings = review.reviews;
  const averageRating =
    listRatings.reduce((acc, review) => acc + review.rating, 0) /
    listRatings.length;

  const roundToHalf = (num) => {
    return Math.round(num * 2) / 2;
  };

  const roundedAverageRating = roundToHalf(averageRating);

  const dates = review.reviews.map((item) => item.createdAt);
  const latestDate = new Date(Math.max(...dates.map((date) => new Date(date))));
  const oldestDate = new Date(Math.min(...dates.map((date) => new Date(date))));

  const formattedLatestDate = formatDate(latestDate)
  const formattedOldestDate = formatDate(oldestDate)
  

  const handleShowReview = async (id) => {
    onShowReview(id);
  };
  return (
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 border-b">{review.id}</td>
      <td className="py-2 px-4 border-b">
        <img
          className="w-[80px]"
          src={review.product.colors[0].image}
          alt={review.product.name}
        />
      </td>
      <td className="py-2 px-4 border-b">{review.reviews.length}</td>
      <td className="py-2 px-4 border-b">
        <Rate disabled allowHalf defaultValue={roundedAverageRating} />
      </td>
      <td className="py-2 px-4 border-b">{formattedLatestDate}</td>
      <td className="py-2 px-4 border-b">{formattedOldestDate}</td>
      <td className="py-2 px-4 border-b">
        <button
          onClick={() => handleShowReview(review.id)}
          className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
        >
          Xem chi tiết
        </button>
      </td>
    </tr>
  );
}
