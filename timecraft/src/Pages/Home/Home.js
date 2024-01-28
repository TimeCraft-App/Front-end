import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <a href="/shopall" >
        <img className="home__image" title="Shop the best products" src={process.env.PUBLIC_URL + "/images/pic5.jpg"} alt="Promo" />
      </a>
      <Footer />
    </div>
  );
};

export default Home;
