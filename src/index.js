import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import Context from "./components/context/Context";
import Service from "./services/Service";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import store from "./store";

import App from "./components/app/App";

const service = new Service();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Context.Provider value = {service}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Context.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
