import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Social from "./components/Social";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Social />
    <App />
  </React.StrictMode>
);
