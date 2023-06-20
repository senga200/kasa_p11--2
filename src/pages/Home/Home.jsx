//import './App.css';
//import de logoKasa
import React from "react";
import Navbar from "../../components/LayoutComponents/Navbar";
import "./Home.css";
import Banner from "../../components/HomeComponents/Banner";
import Logements from "../../components/HomeComponents/Logements";
import Container from "../../components/Container";
import Footer from "../../components/LayoutComponents/Footer";


function Home() {
  return (
      <div className="home">
        <Navbar />
        <Container>
          <Banner />
          <Logements />
        </Container>
        <Footer />
      </div>
  );
}



export default Home;