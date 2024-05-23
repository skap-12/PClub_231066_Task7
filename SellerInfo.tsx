import React from "react";

type SellerInfoProps = {
  name: string;
  contact: string;
};

const SellerInfo: React.FC<SellerInfoProps> = ({ name, contact }) => {
  return (
    <div className="seller-info">
      <h3>Seller Information</h3>
      <p>Name: {name}</p>
      <p>Contact: {contact}</p>
    </div>
  );
};

export default SellerInfo;
