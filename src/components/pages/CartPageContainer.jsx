import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import CartPage from "./CartPage";
import {
  decreaseCountItemInCart,
  removeItemFromCart,
  addToCart,
} from "../../actions/actionUpdateShopingCart";

function CartPageContainer() {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.UpdateShopingCart.totalPrice);
  const cartItems = useSelector((state) => state.UpdateShopingCart.cartItems);
  const totalCartCount = useSelector(
    (state) => state.UpdateShopingCart.totalCartCount
  );
  const DecreaseCountItemInCart = useCallback(
    (i) => dispatch(decreaseCountItemInCart(i)),
    [dispatch]
  );
  const RemoveItemFromCart = useCallback(
    (i) => dispatch(removeItemFromCart(i)),
    [dispatch]
  );
  const AddToCart = useCallback((i) => dispatch(addToCart(i)), [dispatch]);

  return (
    <React.Fragment>
      <CartPage
        totalPrice={totalPrice}
        cartItems={cartItems}
        decreaseCountItemInCart={DecreaseCountItemInCart}
        removeItemFromCart={RemoveItemFromCart}
        addToCart={AddToCart}
        totalCartCount={totalCartCount}
      />
    </React.Fragment>
  );
}
export default React.memo(CartPageContainer);

// const CartPageContainer = (props) => {
//   const {
//     totalPrice,
//     cartItems,
//     decreaseCountItemInCart,
//     removeItemFromCart,
//     addToCart,
//     totalCartCount
//   } = props;
//   return (
//     <React.Fragment>
//       <CartPage
//         totalPrice={totalPrice}
//         cartItems={cartItems}
//         decreaseCountItemInCart={decreaseCountItemInCart}
//         removeItemFromCart = {removeItemFromCart}
//         addToCart = {addToCart}
//         totalCartCount = {totalCartCount}
//       />
//     </React.Fragment>
//   );
// };
// const mapStateToProps = (state) => {
//   return {
//     totalPrice: state.UpdateShopingCart.totalPrice,
//     cartItems: state.UpdateShopingCart.cartItems,
//     totalCartCount:state.UpdateShopingCart.totalCartCount
//   };
// };
// const mapDispatchToProps = {
//   decreaseCountItemInCart,
//   removeItemFromCart,
//   addToCart,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CartPageContainer);
