import {
  ITEMS_REQUESTED,
  ITEMS_LOADED,
  ITEMS_ERROR
}  from '../actions/actionTypes';

const updateItemList = (state, action) => {
    if (state === undefined) {
      return {
        items: [],
        loading: true,
        error: null,
      };
    }
    switch (action.type) {
      case ITEMS_REQUESTED:
        return {
          items: [],
          loading: true,
          error: null,
        };
      case ITEMS_LOADED:
        return {
          items: action.payload,
          loading: false,
          error: null,
        };
      case ITEMS_ERROR:
        return {
          items: [],
          loading: false,
          error: action.payload,
        };
        case `DONE`:
          console.log(`done`)
        return {
          ...state
        };
      default:
        return state;
    }
  };
  export default updateItemList;