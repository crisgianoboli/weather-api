import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/index.scss";
import "../styles/FormSearch.scss";

import DetailCard from "../components/DetailCard/DetailCard";
import SelectCities from "../components/SelectCities/SelectCities";
import Cards from "../components/Cards/Cards";
import getFormattedWeatherData from "../Services/WeatherService";
import FormSearch from "../components/Form/FormSearch";

function Home() {
  /* const [noData, setNoData] = useState("No hay busqueda realizada");
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Ubicación desconocida");
  const [weatherIcon, setWeatherIcon] = useState(
    `${process.env.REACT_APP_ICON_URL}10n@2x.png`
  ); */
  const [query, setQuery] = useState({ q: "Mendoza" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    return fetchWeather;
    //cada vez que cambiemos de location pediremos nueva data
  }, [query, units]);

  const handleCitySelected = (e) => {
    let citySelected = e.target.value;
    console.log(citySelected);
  };

  /* const getWeather = async (location) => {
    setWeatherData([]);
    let how_to_search =
      typeof location === "string"
        ? `q=${location}`
        : `lat=${location[0]}&lon=${location[1]}`;
    setNoData(<Spinner animation="border" size="xl" />);
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
  }; */

  return (
    <div className="home-container">
      <div className="weather-container">
        <div className="left-content">
          <div className="card_search_container">
            <div className="searc_title_content">
              <h1>WeatherApi</h1>
            </div>
            <div className="form_container">
              <div className="form_content">
                <FormSearch setQuery={setQuery} />
                <SelectCities handleCitySelected={handleCitySelected} />
              </div>
            </div>
          </div>
        </div>

        <div className="right-content">
          {weather === null ? (
            <Spinner animation="border" />
          ) : (
            <>
              <div className="extended-container-text">
                <h4> Hoy en </h4>
                <span> {weather.name}</span>
              </div>
              <DetailCard weather={weather} />
              <div className="extended-container">
                <h4>Pronóstico Extendido</h4>
                <div className="extended-container-card">
                  <Cards items={weather.daily} />
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
