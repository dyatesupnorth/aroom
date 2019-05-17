import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Redux bits..
import configureStore from "./store/configureStore";
import { startSetHotels } from "./actions/hotels";
import { Provider } from "react-redux";

let hasRendered = false;
const store = configureStore();

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
// TODO... a better loading screen
ReactDOM.render(<h1>Loading..</h1>, document.getElementById("root"));

store.dispatch(startSetHotels()).then(() => {
  renderApp();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
