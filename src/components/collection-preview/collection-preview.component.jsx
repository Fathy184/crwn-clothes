import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
const CollectionPreview = ({ items, title, routeName }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherCollectionProps }) => {
            return (
              <CollectionItem
                key={id}
                {...otherCollectionProps}
                routeName={routeName}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
