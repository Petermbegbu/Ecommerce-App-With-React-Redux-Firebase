import React from "react";
import CollectionItem from "../collection-Item/CollectionItem";

const CollectionPreview = ({ title, items }) => (
  <div>
    <h2>{title.toUpperCase()}</h2>
    <div className="row">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
