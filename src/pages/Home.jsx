import { useState } from "react";
import "../styles/index.scss";
import "../styles/FormSearch.scss";
import Card from "../components/Card/Card";
import DetailCard from "../components/DetailCard/DetailCard";
import SelectCities from "../components/SelectCities/SelectCities";

function Home() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [noData, setNoData] = useState("No Data Yet");
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Ubicación desconocida");
  const [weatherIcon, setWeatherIcon] = useState(
    `${process.env.REACT_APP_ICON_URL}10n@2x.png`
  );

  const handleChange = (input) => {
    const { value } = input.target;
    setSearchTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(searchTerm);
  };

  const handleCitySelected = (e) => {
    let citySelected = e.target.value;
    getWeather(citySelected);
  };

  const getWeather = async (location) => {
    setWeatherData([]);
    let how_to_search =
      typeof location === "string"
        ? `q=${location}`
        : `lat=${location[0]}&lon=${location[1]}`;

    try {
      let res = await fetch(
        `${
          process.env.REACT_APP_URL + how_to_search
        }&appid=${API_KEY}&units=metric&cnt=5&lang=es`
      );
      let data = await res.json();
      if (data.cod === "200") {
        setWeatherData(data);
        setCity(`${data.city.name}, ${data.city.country}`);
        setWeatherIcon(
          `${
            process.env.REACT_APP_ICON_URL + data.list[0].weather[0]["icon"]
          }@4x.png`
        );
      } else {
        setNoData("Location Not Found");
        setCity("Ubicación desconocida");
        return;
      }
    } catch (error) {
      console.error("Error encountered: ", error);
    }
  };

  const myIP = (location) => {
    const { latitude, longitude } = location.coords;
    getWeather([latitude, longitude]);
  };

  return (
    <div className="home-container">
      <div className="weather-container">
        <div className="left-content">
          <div className="card_search_container">
            <div className="searc_title_content">
              <h1>WeatherApi</h1>

              <p> {city} </p>
            </div>
            <div className="form_container">
              <div className="form_content">
                <h4>El mejor buscador de clima esta aquí</h4>
                <form
                  noValidate
                  onSubmit={handleSubmit}
                  className="search-form"
                >
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="input-search"
                    onChange={handleChange}
                    required
                  />
                  <button type="submit" className="search-icon">
                    <i
                      className="fa fa-search"
                      aria-hidden="true"
                      type="submit"
                    ></i>
                  </button>
                  <button
                    className="search-icon"
                    onClick={() => {
                      navigator.geolocation.getCurrentPosition(myIP);
                    }}
                  >
                    <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
                  </button>
                  <SelectCities handleCitySelected={handleCitySelected} />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="right-content">
          {weatherData.length === 0 ? (
            <div>
              <h1>{noData}</h1>
            </div>
          ) : (
            <>
              <div className="extended-container-text">
                <h4> Hoy en </h4>
                <span> {city}</span>
              </div>
              <DetailCard weather_icon={weatherIcon} data={weatherData} />
              <div className="extended-container">
                <h4>Clima Extendido</h4>
                <div className="extended-container-card">
                  {weatherData.list.map((days, index) => {
                    if (index > 0) {
                      return <Card key={index} day={days} />;
                    }
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
