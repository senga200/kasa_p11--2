import React from "react";
import Navbar from "../../components/LayoutComponents/Navbar";
import "./Home.css";
import Banner from "../../components/HomeComponents/Banner";
import Logements from "../../components/HomeComponents/Logements";
import Footer from "../../components/LayoutComponents/Footer";
import Container from "../../components/HomeComponents/Container";


function Home() {
  return (
      <div className="home">
        <Navbar />
        <Container>
          <div className="banner_container">
          <Banner />
          </div>
          <Logements />
        </Container>
        <Footer />
      </div>
  );
}



export default Home;