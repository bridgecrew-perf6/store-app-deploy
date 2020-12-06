import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import ItemsList from "./ItemsList";
import Spiner from "../spiner/Spiner";


import { fetchData } from "../../actions/actionUpdateItemList";

///with hooks
function ItemListContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.UpdateItems.items);
  const loading = useSelector((state) => state.UpdateItems.loading);
  const error = useSelector((state) => state.UpdateItems.error);
  const FetchData = useCallback((i) => dispatch(fetchData(i)), [dispatch]);
  React.useEffect(() => {
    let canceled = false;
    !canceled && FetchData();
    return () => {
      canceled = true;
    };
  }, []);
  return (
    <ItemsList
      items={items}
      loading={loading}
      error={error}
    />
  );
}
export default React.memo(ItemListContainer);


// ///without hooks
// function ItemListContainer(props) {
//   const { items, loading, error, dispatch } = props;
// React.useEffect(() => {
//   let canceled = false;
//   !canceled && fetchData();
//   return () => {
//     canceled = true;
//   };
// }, []);
//   return (
//     <ItemsList
//       items={items}
//       loading={loading}
//       error={error}
//     />
//   );
// }
// const mapStateToProps = (state) => {
//   return {
//     items: state.UpdateItems.items,
//     loading: state.UpdateItems.loading,
//     error: state.UpdateItems.error,
//   };
// };
// // const mapDispatchToProps = {
// //   fetchData,
// // };
// /////OR with fetchData return async (dispatch)
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(fetchData, dispatch);
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);
