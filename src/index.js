import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //NOTE: the mode makes useEffect render x2
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

reportWebVitals();
