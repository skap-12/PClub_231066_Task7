import React from "react";
import { ListGroup } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from "react-router-dom"; 
import "./StoreItem.css"; 

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
  url: string; 
};

export function StoreItem({
  id,
  name,
  price,
  imgUrl,
  description,
  url, 
}: StoreItemProps) {
  return (
    <ListGroup.Item className="d-flex align-items-start p-0 list-item-spacing">
      <Link
        to={url}
        className="d-flex align-items-start p-3 text-decoration-none text-dark link-hover"
        style={{ width: "100%" }}
      >
        <img
          src={imgUrl}
          alt={name}
          height="200px"
          style={{ objectFit: "cover", width: "200px", marginRight: "20px" }}
        />
        <div className="flex-grow-1 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-baseline mb-2">
            <h5
              className="name-hover"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "3rem" }}
            >
              {name}
            </h5>
            <span
              className="price-hover"
              style={{
                fontFamily: "Courier New, monospace",
                fontSize: "1.2rem",
                color: "gray",
              }}
            >
              {formatCurrency(price)}
            </span>
          </div>
          <div className="mt-auto">
            <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem" }}>
              {description}
            </p>
          </div>
        </div>
      </Link>
    </ListGroup.Item>
  );
}
