import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import React from "react";
import "./pages/Home/Home.css";
import "./components/LayoutComponents/Navbar.css";
import "./components/HomeComponents/Banner";
import "./components/HomeComponents/Logements";
import "./components/LayoutComponents/Footer";
import Navbar from "./components/LayoutComponents/Navbar";
import Footer from "./components/LayoutComponents/Footer";
import About from "./pages/About/About";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Error from "./pages/Error/Error404";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/logement/:id",
      element:(
        <>
        <Navbar />
        <FicheLogement/>
        <Footer />
        </>
      )
     
    },
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
    { path: "*", element: (
      <>
      <Navbar />
      <Error />
      </>
    ) },  
  ]);

    export default router;