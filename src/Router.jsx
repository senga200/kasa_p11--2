import { createBrowserRouter } from "react-router-dom";
import App from "./pages/Home/Home";
import React from "react";
import "./pages/Home/Home.css";
import "./components/LayoutComponents/Navbar.css";
import "./components/HomeComponents/Banner";
import "./components/HomeComponents/Logements";
import "./components/LayoutComponents/Footer";
import Navbar from "./components/LayoutComponents/Navbar";
import Footer from "./components/LayoutComponents/Footer";
import About from "./pages/About/About";


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
        <About />
        <Footer />
        </>
      )

   
    },
    { path: "*", element: <div>404 error</div> },
  ]);

    export default router;