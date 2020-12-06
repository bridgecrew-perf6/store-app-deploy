import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { emptyCart } from "../../actions/actionUpdateShopingCart";


const HeaderContainer = () => {
  const dispatch = useDispatch();
  const totalCartCount = useSelector(state=>state.UpdateShopingCart.totalCartCount);
  const totalPrice = useSelector(state=>state.UpdateShopingCart.totalPrice);
  const EmptyCart = useCallback(() => dispatch(emptyCart()), [dispatch]);
  return (
    <React.Fragment>
      <Header totalCartCount={totalCartCount} totalPrice={totalPrice} emptyCart = {EmptyCart} />
    </React.Fragment>
  );
};
export default React.memo(HeaderContainer);


// const HeaderContainer = (props) => {
//   const { totalCartCount, totalPrice, emptyCart } = props;
//   return (
//     <React.Fragment>
//       <Header totalCartCount={totalCartCount} totalPrice={totalPrice} emptyCart = {emptyCart} />
//     </React.Fragment>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     totalCartCount: state.UpdateShopingCart.totalCartCount,
//     totalPrice: state.UpdateShopingCart.totalPrice,
//   };
// };
// const mapDispatchToProps = {
//   emptyCart,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
