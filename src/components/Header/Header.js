import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  const { totalCartCount, totalPrice, emptyCart } = props;
  return (
    <header className="header">
      <NavLink to="/">POE-Store</NavLink>
      <div className="cart-container">
        {/* <button
          type="button"
          className="btn btn-outline-danger"
          onClick={emptyCart}
        >
          Empty cart
        </button> */}
        <NavLink to="cart">
          <i className="cart-icon fa fa-shopping-cart"> </i>
          <i className="cart-item-info cart-total-price">
            {totalCartCount?
              <p className="badge badge-light cart-count">{
            totalCartCount}</p>:null}
            {/* /{totalPrice} ex */}
          </i>
        </NavLink>
      </div>
    </header>
  );
}

export default React.memo(Header);
