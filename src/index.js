import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
//import About from "./pages/About";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/ficheLogement",
//     element: <div>Fiche logement</div>,
//   },
//   // {path: "/ficheLogement/:id", element: <div>Fiche logement</div>},
//   {
//     path: "/about",
//     element: <div>A propos</div>,
//   },
//   { path: "*", element: <div>404 error</div> },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
