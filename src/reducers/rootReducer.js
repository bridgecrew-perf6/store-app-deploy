import { combineReducers } from "redux";
import UpdateShopingCart from "./UpdateShopingCart";
import UpdateItems from "./UpdateItems";

const rootReducer = combineReducers({
    UpdateShopingCart,
    UpdateItems

});
export default rootReducer;