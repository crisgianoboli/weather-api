import React from "react";
import CardSearch from "../components/CardSearch/CardSearch";
import "../styles/index.scss";

function Home() {
  return (
    <div className="home-container">
      <div className="weather-container">
        <div className="left-content">
          <div>
            <CardSearch />
          </div>
        </div>
        <div className="right-content"></div>
      </div>
    </div>
  );
}

export default Home;
