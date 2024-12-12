import React, { useState } from "react";
import CommentItem from "./CommentItem";
import { Rate } from "antd";
import { useGetCommentsQuery, useNewCommentMutation } from "../../../redux/createAPI";
import { useSelector } from "react-redux";

export default function Comments({ productId }) {
  const { data, refetch } = useGetCommentsQuery(productId, {
    refetchOnMountOrArgChange: true,
  });
  const [newComment] = useNewCommentMutation();
  const comments = data?.data || [];
  console.log('datacomment', comments);

  const { id } = useSelector((state) => state.auth);
  const userId = id;

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleAddComment = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      setErrorMessage("Vui lòng nhập nội dung bình luận.");
      return;
    }

    if (rating === 0) {
      setErrorMessage("Vui lòng chọn mức đánh giá.");
      return;
    }

    try {
      setErrorMessage(""); 
      const text = comment;
      const body = { productId, userId, rating, text };

      await newComment(body);
      refetch();
      setComment("");
      setRating(0);
    } catch (error) {
      console.error("Error while submitting comment:", error);
      setErrorMessage("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  const listComments = comments?.map(comment => {
    return (
      <CommentItem 
        key={comment.id}
        comment={comment}
        refetch={refetch}
      />
    )
  });

  return (
    <div className="w-full bg-white">
      <h3 className="font-bold text-2xl">Đánh giá sản phẩm</h3>

      <div className="flex flex-col">
        {listComments}
      </div>

      <form onSubmit={handleAddComment}>
        <div className="mt-2">
          <span className="font-medium">Đánh giá của bạn: </span>
          <Rate 
            value={rating} 
            onChange={(value) => setRating(value)} 
          />
        </div>
        
        <div className="w-full mt-2">
          <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Writing your comment..."
            value={comment} 
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 mt-2">{errorMessage}</p>
        )}

        <div className="w-full flex justify-end px-3 mt-4">
          <button
            type="submit"
            className="px-10 py-3 rounded-md text-white text-sm bg-indigo-500"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}
