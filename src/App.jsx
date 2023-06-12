//import './App.css';
//import de logoKasa
import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Banner from "./components/Banner";
import Logements from "./components/Logements";
import Container from "./components/Container";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <Container>
      <Banner />
      <Logements />
      </Container>
      <Footer />
    </div>
  );
}

export default App;