import React from "react";
import "./Card.scss";

function Card({ day }) {
  let day_icon = `${
    process.env.REACT_APP_ICON_URL + day.weather[0]["icon"]
  }@2x.png`;

  return (
    <>
      <div className="card-weather-content">
        <p className="card-text">{Math.round(day.main.temp)}&deg;C</p>
        <div className="card-icon-content">
          {day.weather[0].main}
          <img src={day_icon} className="" alt="icon-weather" />
        </div>
        <p className="card-text">{day.weather[0].description}</p>
      </div>
    </>
  );
}

export default Card;
