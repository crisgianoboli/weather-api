import React from "react";
import "./DetailCard.scss";

function DetailCard({ weather_icon, data }) {
  const { clouds, main, weather } = data.list[0];
  return (
    <div className="detail-container">
      <div className="detail-degrees-content">
        <p className="detail-degrees">{Math.round(main.temp)}&deg;C</p>
        <div className="detail-icon-content">
          {weather[0].main}
          <img
            src={weather_icon}
            alt="weather"
            className="detail-degrees-icon"
          />
        </div>
        <p className="detail-deg">{weather[0].description}</p>
      </div>
      <div className="detail-degrees-content">
        <p className="detail-deg">
          RealFeel: {Math.round(main.feels_like)}&deg;C
        </p>
        <p className="detail-deg">Humidity: {main.humidity}%</p>
        <p className="detail-deg">Cloud Cover: {clouds.all}%</p>
        <p className="detail-deg">
          Min Temp: {Math.round(main.temp_min)}&deg;C
        </p>
        <p className="detail-deg">
          Max Temp: {Math.round(main.temp_max)}&deg;C
        </p>
      </div>
    </div>
  );
}

export default DetailCard;
