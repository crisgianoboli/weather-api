import { iconUrlFromCode } from "../../Services/WeatherService";
import Card from "react-bootstrap/Card";

import "./Card.scss";

function Cards({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <Card key={index} border="light" className="card-weather-content">
          <p>{item.title}</p>
          <Card.Img
            src={iconUrlFromCode(item.icon)}
            className=""
            alt="icon-weather"
          />
          <Card.Text className="card-text">
            {`${item.temp.toFixed()}`}&deg;
          </Card.Text>
        </Card>
      ))}
    </>
  );
}

export default Cards;
