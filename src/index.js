import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";
// import { createStore, applyMiddleware } from "redux";
// import reducer from "./reducers/reducer";
// import thunk from "redux-thunk";

// const Store = createStore(reducer, applyMiddleware(thunk));
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
