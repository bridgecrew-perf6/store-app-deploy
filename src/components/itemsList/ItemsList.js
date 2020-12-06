import React from "react";

import SingleItemContainer from "../singleItem/SingleItemContainer";

import Spiner from "../spiner/Spiner";

function ItemsList(props) {
  const { items, loading, error } = props;
  if (loading) {
    return <Spiner />;
  }
  if (error) {
    return (
      <div className="error-container">
        <i className="fas fa-exclamation-triangle"></i>
      </div>
    );
  }
  return (
    <ul className="item-list">
      {items.map((item) => {
        return (
          <li key={item.id} className="item">
            <SingleItemContainer item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default React.memo(ItemsList);
