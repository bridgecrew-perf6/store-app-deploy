import {
    ADD_CART,
    INCREASE_COUNT_ITEM,
    DECREASE_COUNT_ITEM,
    REMOVE_ITEM_FROM_CART,
    EMPTY_CART
}  from './actionTypes';

export const addToCart = (cartItem)=>{
    return{
        type: ADD_CART,
        payload:cartItem
    };
};
export const decreaseCountItemInCart = (cartItem)=>{
    return{
        type:DECREASE_COUNT_ITEM,
        payload:cartItem
    };
};
export const removeItemFromCart = (cartItem)=>{
    return{
        type: REMOVE_ITEM_FROM_CART,
        payload:cartItem
    };
};
export const emptyCart = (cartItem)=>{
    return{
        type: EMPTY_CART,
    };
};

