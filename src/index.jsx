import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Context } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context>
        <BrowserRouter basename="/pizza-project">
          <App />
        </BrowserRouter>
      </Context>
    </Provider>
  </React.StrictMode>
);
