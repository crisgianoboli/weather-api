import "./SelectCities.scss";

function SelectCities({ handleCitySelected }) {
  const cities = [
    {
      id: 1,
      title: "Miami",
    },
    {
      id: 2,
      title: "Tokio",
    },
    {
      id: 3,
      title: "Monaco",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <>
      <label htmlFor="cities" className="label">
        Seleccione una Ubicación
      </label>
      <select onChange={handleCitySelected} className="select-icon" id="cities">
        {cities.map((city) => (
          <option key={city.id} value={city.title} className="select-icon">
            {city.title}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectCities;
