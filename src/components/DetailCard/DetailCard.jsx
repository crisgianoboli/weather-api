import { iconUrlFromCode } from "../../Services/WeatherService";

import "./DetailCard.scss";

function DetailCard({
  weather: {
    description,
    details,
    feels_like,
    icon,
    humidity,
    name,
    temp,
    temp_min,
    temp_max,
  },
}) {
  return (
    <div className="detail-container">
      {name}
      <div className="detail-degrees-content">
        <p className="detail-degrees">{`${temp.toFixed()}`}&deg;C</p>
        <div className="detail-icon-content">
          {description}
          <img
            src={iconUrlFromCode(icon)}
            alt="weather"
            className="detail-degrees-icon"
          />
        </div>
        <p className="detail-deg">{details}</p>
      </div>
      <div className="detail-degrees-content">
        <p className="detail-deg">RealFeel: {Math.round(feels_like)}&deg;C</p>
        <p className="detail-deg">Humidity: {humidity}%</p>
        <p className="detail-deg">Min Temp: {Math.round(temp_min)}&deg;C</p>
        <p className="detail-deg">Max Temp: {Math.round(temp_max)}&deg;C</p>
      </div>
    </div>
  );
}

export default DetailCard;
