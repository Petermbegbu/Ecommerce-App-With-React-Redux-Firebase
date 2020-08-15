import React from "react";
import "./CollectionItem.css";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="col-md-3">
    {console.log(imageUrl)}
    <div className="card">
      <img className="card-img-top" src={`${imageUrl}`} alt="product" />
      <div className="card-img-overlay"></div>
    </div>
    <div>
      <div className="foot">
        <span>{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  </div>
);

export default CollectionItem;
