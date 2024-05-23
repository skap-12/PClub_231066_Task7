import React from "react";
import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
import SellerInfo from "./SellerInfo";
import ProductReviews from "./ProductReviews";
import { useParams } from "react-router-dom";

type ProductDetailPageProps = {
  images: string[];
  description: string;
  sellerName: string;
  sellerContact: string;
  reviews: { username: string; comment: string }[];
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  images,
  description,
  sellerName,
  sellerContact,
  reviews,
}) => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div>
      <h2>Product Detail Page</h2>
      <p>Product ID: {productId}</p>

      <div className="product-detail-page">
        <ProductImages images={images} />
        <ProductDescription description={description} />
        <SellerInfo name={sellerName} contact={sellerContact} />
        <ProductReviews reviews={reviews} />
      </div>
    </div>
  );
};

export default ProductDetailPage;

// interface ProductDetailProps {

// }

// const ProductDetailPage: React.FC<ProductDetailProps> = () => {
//   const { productId } = useParams<{ productId: string }>();

//   return (

//   );
// };
