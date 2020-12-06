import { ITEMS_REQUESTED, ITEMS_LOADED, ITEMS_ERROR } from "./actionTypes";
import store from "../store";

import Service from "../services/Service";

export const itemsLoaded = (newItems) => {
  return {
    type: ITEMS_LOADED,
    payload: newItems,
  };
};

export const itemRequested = () => {
  return {
    type: ITEMS_REQUESTED,
  };
};

export const itemsError = (error) => {
  return {
    type: ITEMS_ERROR,
    payload: error,
  };
};

/*
        WORK WITH out `thunk`
this two methods get data from API 
fetchData: gets the data himself
asyncFetch: gets data from Service
*/

///////// himself
// export const fetchData = async () => {
//   const { dispatch } = store;
//   dispatch(itemRequested());
//   try {
//     const res = await fetch(
//       `https://api.poe.watch/get?category=weapon&league=Standard`
//     );
//     const json = await res.json();
//     return dispatch(itemsLoaded(json.splice(0, 12)));
//   } catch (error) {
//     dispatch(itemsError(error));
//   }
// };

///////// with Service
// export const fetchData = async () => {
//   const { dispatch } = store;
//   try {
//     const service = new Service();
//     dispatch(itemRequested());
//     const data = await service.fetchItem();
//     dispatch(itemsLoaded(data.splice(0, 12)));
//   } catch (error) {
//     dispatch(itemsError(error));
//   }
// };

/*
        WORK WITH `thunk`
this method get data from API 
!change:
1) in ItemListContainer
  - change mapDispatchToProps, add bindActionCreators;
  - put props dispatch = {dispatch} in ItemsList;
2) in itemList
  -get dispatch to props;
  -dispatch(fetchData());
*/

export const fetchData = () => async (dispatch) => {
  try {
    const service = new Service();
    dispatch(itemRequested());
    const data = await fetch(
      `https://api.poe.watch/get?category=weapon&league=Standard`
    );
    const json = await data.json();
    dispatch(itemsLoaded(json.splice(0, 12)));
  } catch (error) {
    dispatch(itemsError(error));
  }
};
