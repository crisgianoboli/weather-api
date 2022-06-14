import { useState } from "react";

function FormSearch({ setQuery }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };
  const handleSearch = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <>
      <h4>El mejor buscador de clima esta aquí</h4>
      <form noValidate onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Ingrese una localidad"
          className="input-search"
          value={city}
          onChange={(e) => {
            setCity(e.currentTarget.value);
          }}
          required
        />
        <button type="submit" className="search-icon" onClick={handleSearch}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        <button className="search-icon" onClick={handleLocation}>
          <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
        </button>
      </form>
    </>
  );
}

export default FormSearch;
