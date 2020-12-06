import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import SingeItem from "./SingeItem";
import { addToCart } from "../../actions/actionUpdateShopingCart";

const SingleItemContainer = React.memo(function SingleItemContainer(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const AddToCart = useCallback((i) => dispatch(addToCart(item)), [
    dispatch,
    item,
  ]);
  return <SingeItem item={item} addToCart={AddToCart} />;
});
export default SingleItemContainer;

// function SingleItemContainer(props) {
//   const { item, addToCart } = props;
//   return <SingeItem item={item} addToCart={addToCart} />;
// }
// const mapStateToProps = (state) => {
//   return {
//     totalPrice: state.UpdateShopingCart.totalPrice,
//     cartItems: state.UpdateShopingCart.cartItems,
//   };
// };
// const mapDispatchToProps = {
//   addToCart,
// };

// export default  connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(React.memo(SingleItemContainer));
