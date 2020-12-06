import React from "react";
import { NavLink } from "react-router-dom";

const SingeItem = React.memo(function SingeItem(props) {
  const { item, addToCart } = props;
  return (
    <React.Fragment>
      <NavLink to="#">{item.name}</NavLink>
      <div className="img-container">
        <img src={item.icon} alt={item.name}></img>
      </div>
      <p>Price:{item.exalted}</p>
      <button
        className={`btn btn-primary add-cart`}
        onClick={() => addToCart(item)}
      >
        Add in cart
      </button>
    </React.Fragment>
  );
})

export default SingeItem;
