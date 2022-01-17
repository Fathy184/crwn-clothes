import React from "react";
import "./collection-item.styles.scss";
import { useNavigate } from "react-router-dom";

const CollectionItem = ({ price, name, imageUrl, routeName }) => {
  const navigate = useNavigate();
  return (
    <div
      className="collection-item"
      onClick={() => navigate(`/shop/${routeName}`)}
    >
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
