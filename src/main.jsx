import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./styles.css";
import { store } from "./z-Country.jsx";
import { Provider } from "react-redux";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
