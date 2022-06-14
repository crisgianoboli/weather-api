import { useEffect, useState, useCallback } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/index.scss";
import "../components/Form/FormSearch.scss";

import DetailCard from "../components/DetailCard/DetailCard";
import SelectCities from "../components/SelectCities/SelectCities";
import Cards from "../components/Cards/Cards";
import getFormattedWeatherData from "../Services/WeatherService";
import FormSearch from "../components/Form/FormSearch";

function Home() {
  const [query, setQuery] = useState({ q: "Cordoba" });
  const [units] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  }, [query, units]);

  const handleCitySelected = useCallback(
    (e) => {
      const citySelected = e.target.value;
      setQuery({ q: citySelected });
    },
    [setQuery]
  );

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
                <SelectCities onCitySelected={handleCitySelected} />
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
