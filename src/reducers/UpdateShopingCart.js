import remove from "lodash/remove";

import {
  ADD_CART,
  DECREASE_COUNT_ITEM,
  REMOVE_ITEM_FROM_CART,
  EMPTY_CART,
} from "../actions/actionTypes";
let initialState = {
  cartItems: [],
  totalPrice: 0,
  totalCartCount: 0,
};
const UpdateShopingCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      let itemForAdd = { ...action.payload };
      let existed_item = state.cartItems.find((i) => itemForAdd.id === i.id);
      if (!existed_item) {
        itemForAdd.cartCount = 1;
        itemForAdd.priceInCart = itemForAdd.exalted;
        itemForAdd.priceInCart = +itemForAdd.priceInCart.toFixed(2);
        return {
          ...state,
          cartItems: [...state.cartItems, itemForAdd],
          totalPrice: +(itemForAdd.exalted + state.totalPrice).toFixed(2),
          totalCartCount: state.totalCartCount + 1,
        };
      } else {
        existed_item.cartCount += 1;
        existed_item.priceInCart += itemForAdd.exalted;
        existed_item.priceInCart = +existed_item.priceInCart.toFixed(2);
        return {
          ...state,
          totalPrice: +(state.totalPrice + itemForAdd.exalted).toFixed(2),
          totalCartCount: state.totalCartCount + 1,
        };
      }
    case DECREASE_COUNT_ITEM:
      let otherItems = state.cartItems.filter(
        (i) => action.payload.id !== i.id
      );
      let ind = state.cartItems.findIndex((i) => action.payload.id === i.id);
      if (state.cartItems[ind].cartCount > 1) {
        const newDecreaseItem = {
          ...action.payload,
          cartCount: action.payload.cartCount - 1,
          priceInCart: +(
            action.payload.priceInCart - action.payload.exalted
          ).toFixed(2),
        };
        return {
          ...state,
          cartItems: [...otherItems, newDecreaseItem],
          totalPrice: +(state.totalPrice - action.payload.exalted).toFixed(2),
          totalCartCount: state.totalCartCount - 1,
        };
      } else {
        return {
          cartItems: otherItems,
          totalPrice: +(state.totalPrice - action.payload.exalted).toFixed(2),
          totalCartCount: state.totalCartCount - 1,
        };
      }
    case REMOVE_ITEM_FROM_CART:
      let newCartItems = state.cartItems.slice();
      remove(newCartItems, function (item) {
        return item.id === action.payload.id;
      });
      let priceAfterDel = state.totalPrice - action.payload.priceInCart;
      let cartCountAfterDel = state.totalCartCount - action.payload.cartCount;
      action.payload.exalted = 0;
      action.payload.cartCount = 0;
      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: +priceAfterDel.toFixed(2),
        totalCartCount: cartCountAfterDel,
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
        totalPrice: 0,
        totalCartCount: 0,
      };
    default:
      return state;
  }
};
export default UpdateShopingCart;
