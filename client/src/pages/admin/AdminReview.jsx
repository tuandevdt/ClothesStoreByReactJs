import React, { useState } from "react";
import { useGetReviewsAdminsQuery } from "../../redux/createAPI";
import ReviewItemTr from "../../components/admin/ReviewManager/ReviewItemTr";
import ReviewDetailModal from "../../components/admin/ReviewManager/ReviewDetail";

export default function AdminReview() {
    const {data, refetch} = useGetReviewsAdminsQuery({
        refetchOnMountOrArgChange: true,
    })

    const reviews = data?.reviews;

    const groupedReviews = reviews?.reduce((acc, review) => {
        const productId = review.productId;
        if (!acc[productId]) {
            acc[productId] = {
                product: review.product,
                reviews: [],
                id: review.productId,
            };
        }
        acc[productId].reviews.push(review);
        return acc;
    }, {});
    
    const listGroupedReviews = Object.values(groupedReviews || {});

    const [selectedProductId, setSelectedProductId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleShowReview = (productId) => {
        setSelectedProductId(productId);
        setShowModal(true);        
    };
    
    const selectedReviewDetails = reviews?.filter(review => review.productId === selectedProductId);
    
    const listReviews = listGroupedReviews?.map((review, index) => {
        return (
            <ReviewItemTr
                key={review.id}
                review={review}
                index={index}
                refetch={refetch}
                onShowReview={handleShowReview}
            />
        )
    })
  return (
    <div className="bg-gray-100 min-h-[90vh] lg:ml-64 p-4">
      <h1 className="pl-4 text-2xl font-bold mb-4">Quản lý bình luận</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="text-left">
            <th className="py-2 px-4 border-b">STT</th>
            <th className="py-2 px-4 text-left border-b">Product</th>
            <th className="py-2 px-4 border-b">Tổng bình luận</th>
            <th className="py-2 px-4 border-b">Rating</th>
            <th className="py-2 px-4 border-b">Mới nhất</th>
            <th className="py-2 px-4 border-b">Cũ nhất</th>
            <th className="py-2 px-4 border-b">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {listReviews}
        </tbody>
      </table>

      {showModal && selectedReviewDetails && (
                <ReviewDetailModal
                    product={selectedReviewDetails[0].product}
                    reviews={selectedReviewDetails}
                    refetch={refetch}
                    onClose={() => setShowModal(false)}
                />
            )}
    </div>
  );
}
