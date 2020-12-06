import React from "react";

function CartPage(props) {
  const {
    totalPrice,
    cartItems,
    decreaseCountItemInCart,
    removeItemFromCart,
    addToCart,
    totalCartCount,
  } = props;
  const renderRow = React.useCallback((items, id) => {
    const { name, priceInCart, cartCount, icon, category } = items;
    return (
      <div className="card">
        <div className="cart-img-container">
          <img className="card-img-top" src={icon} alt="Card image cap"></img>
        </div>
        <div className="card-body">
          <h5 className="card-title"> {name}</h5>
          <p className="card-text">{category}</p>
          <button
            className="fas fa-angle-left"
            onClick={() => decreaseCountItemInCart(items)}
          ></button>
          <span className="cart-item-count">{cartCount}</span>
          <button
            className="fas fa-angle-right"
            onClick={() => addToCart(items)}
          ></button>
        </div>
      </div>
    );
  },[decreaseCountItemInCart,addToCart]);
  const renderTotalBoard = React.useCallback(() => {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Items in cart</th>
            <th scope="col">Total price</th>
          </tr>
        </thead>
        <tbody>
          <tr key={totalCartCount}>
            <td>
              <span>{totalCartCount}</span>
            </td>
            <td key={totalPrice}>
              <span>{totalPrice}ex</span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="button" className="btn btn-dark">
                ORDER
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  },[totalCartCount,totalPrice]);
  return (
    <div className="home-page">
      <div className="cart-container">
        <div className="cards-container">
          {cartItems ? cartItems.map(renderRow) : null}
        </div>
        <div className="total-info-container">
          {cartItems.length > 0 ? (
            renderTotalBoard()
          ) : (
            <span>Cart is empty</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(CartPage);
