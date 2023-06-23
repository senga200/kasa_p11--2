import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
//import reportWebVitals from "./reportWebVitals";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//reportWebVitals();
