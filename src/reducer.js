
const initialState = {
  items: [],
  loading: true,
  error: null,
  cartItems: [],
  totalPrice: 0,
  totalCartCount: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `ITEMS_REQUESTED`:
      return {
        ...state,
        items: [],
        loading: true,
        error: null,
      };
    case `ITEMS_LOADED`:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      };
    case `ITEMS_ERROR`:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.payload,
      };
    case `ADD_CART`:
      const item = action.payload;
      //Обьект добавленный в корзину
      let itemAdedToCart = state.items.find((i) => i.id === item.id);
      // Обьект в корзине
      let existed_item = state.cartItems.find((i) => item.id === i.id);
      if (existed_item) {
        itemAdedToCart.incart += 1;
        itemAdedToCart.price += itemAdedToCart.exalted;
        return {
          ...state,
          totalPrice: state.totalPrice + itemAdedToCart.exalted,
          totalCartCount: state.totalCartCount + 1,
        };
      } else {
        itemAdedToCart.incart = 1;
        itemAdedToCart.price = itemAdedToCart.exalted;
        let newTotalPrice = state.totalPrice + itemAdedToCart.exalted;
        return {
          ...state,
          cartItems: [...state.cartItems, itemAdedToCart],
          totalPrice: newTotalPrice,
          totalCartCount: state.totalCartCount + 1,
        };
      }
    case `DECREASE_COUNT_ITEM`:
      const itemFromPayload = action.payload;
      let itemForDecrese = state.items.find((i) => i.id === itemFromPayload.id);
      if (itemForDecrese.incart === 1) {
        let new_items = state.cartItems.filter(
          (i) => i.id !== itemFromPayload.id
        );
        let newTotalPrice = state.totalPrice - itemForDecrese.exalted;
        return {
          ...state,
          totalPrice: newTotalPrice,
          cartItems: new_items,
        };
      } else {
        itemForDecrese.incart -= 1;
        itemForDecrese.price = itemForDecrese.price - itemForDecrese.exalted;
        let newTotalPrice = state.totalPrice - itemForDecrese.exalted;
        return {
          ...state,
          totalPrice: newTotalPrice,
        };
      }
    case `DELETE_ITEM_FROM_CART`:
      let itemForDelete = action.payload;
      let idForDel = state.cartItems.indexOf(itemForDelete);
      let newCartItemsAfterDelete = state.cartItems.slice();
      newCartItemsAfterDelete.splice(idForDel, 1);
      let newTotalPriceAfterDelete = state.totalPrice - itemForDelete.price;
      itemForDelete.incart = 0;
      itemForDelete.price = 0;
      return {
        ...state,
        cartItems: newCartItemsAfterDelete,
        totalPrice: newTotalPriceAfterDelete,
      };
    case `INCREASE_COUNT_ITEM`:
      let itemFromCartForIncrease = action.payload;
      itemFromCartForIncrease.incart += 1;
      itemFromCartForIncrease.price =
        itemFromCartForIncrease.price + itemFromCartForIncrease.exalted;
      return {
        ...state,
        totalPrice: state.totalPrice + itemFromCartForIncrease.exalted,
        totalCartCount: state.totalCartCount + 1,
      };

    default:
      return state;
  }
};
export default reducer;
