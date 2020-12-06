import React from "react";
import { Route, Switch } from "react-router-dom";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import HeaderContainer from "../Header/HeaderContainer";
import CartPageContainer from "../pages/CartPageContainer";

function App() {
  return (
    <div className="main-container">
      <HeaderContainer />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={CartPageContainer} />
        <Route render = {()=><h1>Page not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
