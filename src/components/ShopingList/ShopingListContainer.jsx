import React, { useCallback, useMemo } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { bindActionCreators } from "redux";

import {
  decreaseCountItemInCart,
  removeItemFromCart,
} from "../../actions/actionUpdateShopingCart";
import { addToCart } from "../../actions/actionUpdateShopingCart";

import ShopingList from "./ShopingList";


function ShopingListContainer() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.UpdateShopingCart.cartItems);
  const totalPrice = useSelector((state) => state.UpdateShopingCart.totalPrice);
  const AddToCart = useCallback((items) => dispatch(addToCart(items)), [
    dispatch,
  ]);
  const DecreaseCountItemInCart = useCallback(
    (i) => dispatch(decreaseCountItemInCart(i)),
    [dispatch]
  );
  const RemoveItemFromCart = useCallback(
    (i) => dispatch(removeItemFromCart(i)),
    [dispatch]
  );

  return (
    <ShopingList
      cartItems={cartItems}
      totalPrice={totalPrice}
      decreaseCountItemInCart={DecreaseCountItemInCart}
      removeItemFromCart={RemoveItemFromCart}
      addToCart={AddToCart}
    />
  );
}
export default ShopingListContainer;

// function ShopingListContainer(props) {
//   const {
//     cartItems,
//     totalPrice,
//     decreaseCountItemInCart,
//     removeItemFromCart,
//     addToCart,
//   } = props;
//   return (
//     <ShopingList
//       cartItems={cartItems}
//       totalPrice={totalPrice}
//       decreaseCountItemInCart={decreaseCountItemInCart}
//       removeItemFromCart={removeItemFromCart}
//       addToCart={addToCart}
//     />
//   );
// }
// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.UpdateShopingCart.cartItems,
//     totalPrice: state.UpdateShopingCart.totalPrice,
//   };
// };
// const mapDispatchToProps = {
//   decreaseCountItemInCart,
//   removeItemFromCart,
//   addToCart,

// };

// // function mapDispatchToProps(dispatch) {
// //   return bindActionCreators(
// //     { decreaseCountItemInCart, removeItemFromCart, addToCart },
// //     dispatch
// //   );
// // }
// export default  connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(React.memo(ShopingListContainer));
