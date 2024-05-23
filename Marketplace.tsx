import React from "react";
import storeItems from "../data/items.json";
import { ListGroup } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { Link } from "react-router-dom";

export function Marketplace() {
  return (
    <>
      <h1>Marketplace</h1>
      <ListGroup>
        {storeItems.map((item) => (
          <Link to={`/product/${item.id}`}>
            <StoreItem
              url={"https://music.youtube.com"}
              key={item.id}
              {...item}
            />
          </Link>
        ))}
      </ListGroup>
    </>
  );
}
