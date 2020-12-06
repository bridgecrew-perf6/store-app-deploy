import React from "react";

const ShopingList = React.memo(function ShopingList(props) {
  const {
    totalPrice,
    decreaseCountItemInCart,
    removeItemFromCart,
    cartItems,
    addToCart,
  } = props;
  const renderRow = React.useCallback((items, id) => {
    const { name, priceInCart, cartCount } = items;
    if (cartCount) {
      return (
        <tr key={id}>
          <th scope="row">{id + 1}</th>
          <td>{name}</td>
          <td>{cartCount}</td>
          <td>{priceInCart}ex</td>
          <td className="shop-list-btn">
            <button
              className="fas fa-plus btn btn-outline-primary"
              onClick={() => addToCart(items)}
            ></button>
            <button
              className="fas fa-minus btn btn-outline-warning"
              onClick={() => decreaseCountItemInCart(items)}
            ></button>
            <button
              className="fas fa-trash-alt btn btn-outline-danger"
              onClick={() => removeItemFromCart(items)}
            ></button>
          </td>
        </tr>
      );
    }
  }, [addToCart,decreaseCountItemInCart,removeItemFromCart]);
  const tableRender = React.useCallback(() => {
    return (
      <div className="shop-list-container">
        <p>Total:{totalPrice}ex</p>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Count</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{cartItems.map(renderRow)}</tbody>
        </table>
      </div>
    );
  },[cartItems, renderRow, totalPrice]);
  return (
    <React.Fragment>
      {cartItems.length > 0 ? tableRender() : null}
    </React.Fragment>
  );
})

export default ShopingList;
