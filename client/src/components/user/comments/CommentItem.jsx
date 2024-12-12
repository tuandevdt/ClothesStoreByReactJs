import React, { useState } from 'react';
import { Rate } from 'antd';
import { useSelector } from 'react-redux';
import { useUpdateCommentMutation } from '../../../redux/createAPI';
import { formatDate } from '../../../datatransfer/formDate';

export default function CommentItem({ comment, refetch }) {
  const [updateComment] = useUpdateCommentMutation();
  const { id, username } = useSelector((state) => state.auth);
  const userData = { id, username };

  const canEdit = comment.userId === userData.id;

  const [showModal, setShowModal] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.text);
  const [editedRating, setEditedRating] = useState(0); 
  const [errorMessage, setErrorMessage] = useState('');

  const showFormEdit = (comment) => {
    setEditedComment(comment.text);
    setEditedRating(comment.rating || 0);
    setErrorMessage(''); 
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  const handleSaveChanges = async () => {
    if (!editedComment.trim()) {
      setErrorMessage('Please enter comment text');
      return;
    }

    if (editedRating === 0) {
      setErrorMessage('Please select a rating');
      return;
    }

    try {
      setErrorMessage(''); 
      const id = comment.id;
      const text = editedComment;
      const rating = editedRating;

      await updateComment({ id, text, rating });
      refetch();
      setShowModal(false);
    } catch (error) {
      console.error('Error updating comment:', error);
      setErrorMessage('Something went wrong, please try again');
    }
  };

  return (
    <div className="border rounded-md p-4 my-3">
      <div className="flex gap-3 items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3jhpAFYpzxx39DRuXIYxNPXc0zI5F6IiMQ&s"
          className="object-cover w-8 h-8 rounded-full border-2 border-gray-400 shadow-gray-400"
        />
        <h3 className="font-bold">{comment.user.username}</h3>
      </div>
      <div className="flex items-start justify-between mt-4 bg-white">
        <div className="flex">
          <p className="text-gray-900 text-sm leading-snug">{comment.text}</p>
          <p className="text-gray-600 text-sm leading-snug ml-4">{formatDate(comment.createdAt)}</p>
        </div>
        {canEdit && (
          <button
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => showFormEdit(comment)}
          >
            Edit
          </button>
        )}
      </div>

      <div className="mt-2">
        <span className="font-medium">Đánh giá: </span>
        <Rate disabled value={comment.rating} />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="font-bold mb-3 text-lg">Edit Comment</h2>

            <div className="mb-3">
              <label className="block font-medium mb-2">Edit Text:</label>
              <textarea
                className="border p-2 w-full"
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block font-medium mb-2">Rating:</label>
              <Rate
                value={editedRating}
                onChange={(value) => setEditedRating(value)}
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 mb-3">{errorMessage}</p>
            )}

            <div className="flex justify-end gap-3 mt-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 ${editedComment.trim() && editedRating > 0 ? 'bg-blue-500' : 'bg-gray-400'} text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out`}
                onClick={handleSaveChanges}
                disabled={!editedComment.trim() || editedRating === 0}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
