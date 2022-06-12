import "./SelectCities.scss";

function SelectCities({ handleCitySelected }) {
  const cities = [
    {
      id: 1,
      title: "Cordoba",
    },
    {
      id: 2,
      title: "Mendoza",
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
    <select onChange={handleCitySelected} className="select-icon">
      {cities.map((city) => (
        <option key={city.id} value={city.title} className="select-icon">
          {city.title}
        </option>
      ))}
    </select>
  );
}

export default SelectCities;
