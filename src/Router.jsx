import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import "./App.css";
import "./components/Navbar.css";
import "./components/Logements.css";
import "./components/LogementCard.css";
import "./components/Footer.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/ficheLogement",
      element: <div>Fiche logement</div>,
    },
    // {path: "/ficheLogement/:id", element: <div>Fiche logement</div>},
    {
      path: "/about",
      element:(
        <>
        <Navbar />
        <div>A propos</div>,
        <About />
        <Footer />
        </>
      )

   
    },
    { path: "*", element: <div>404 error</div> },
  ]);

    export default router;