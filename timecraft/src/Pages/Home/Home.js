import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import UpcomingHolidays from "../../Components/UpcomingHolidays/UpcomingHolidays";
import ApplyTimeoff from "../../Components/ApplyTimeoff/ApplyTimeoff";
import Timeoffs from "../../Components/Timeoffs/Timeoffs";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="cards">
      <UpcomingHolidays/>
      <ApplyTimeoff/>
      <Timeoffs/>
      </div>
      <a href="/timeoffrequest" >
        <img className="home__image" title="The best Time Management application" src={process.env.PUBLIC_URL + "/images/pic5.jpg"} alt="Promo" />
      </a>
      <Footer />
    </div>
  );
};

export default Home;
