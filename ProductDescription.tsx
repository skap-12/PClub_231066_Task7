import React from "react";

type ProductDescriptionProps = {
  description: string;
};

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <div className="product-description">
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
