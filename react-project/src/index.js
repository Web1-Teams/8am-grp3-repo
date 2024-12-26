import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CheckboxComponent from "./components/CheckboxComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CheckboxComponent/>
  </React.StrictMode>
);
