import React from "react";

type Review = {
  username: string;
  comment: string;
};

type ProductReviewsProps = {
  reviews: Review[];
};

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  return (
    <div className="product-reviews">
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <p>
            <strong>{review.username}:</strong> {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
