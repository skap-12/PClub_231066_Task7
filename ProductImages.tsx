import React from "react";

type ProductImagesProps = {
  images: string[];
};

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  return (
    <div className="product-images">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Product Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ProductImages;
