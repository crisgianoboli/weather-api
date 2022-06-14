import { iconUrlFromCode } from "../../Services/WeatherService";
import Card from "react-bootstrap/Card";

import "./Card.scss";

function Cards({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <Card key={index} border="light" className="card-weather-content">
          <h3 className="weather-day">{item.title}</h3>
          <Card.Text className="card-text">
            Temp Actual: {`${item.temp.toFixed()}`}&deg;
          </Card.Text>
          <Card.Text className="card-text">
            Min Temp: {`${item.temp_min.toFixed()}`}&deg;
          </Card.Text>
          <Card.Text className="card-text">
            Max Temp:{`${item.temp_max.toFixed()}`}&deg;
          </Card.Text>
          <Card.Img
            src={iconUrlFromCode(item.icon)}
            className="icon-weather"
            alt="icon-weather"
          />
        </Card>
      ))}
    </>
  );
}

export default Cards;
