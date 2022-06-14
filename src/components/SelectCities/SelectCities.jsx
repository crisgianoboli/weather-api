import "./SelectCities.scss";
import { cities } from "../../Mock";

function SelectCities({ onCitySelected }) {
  return (
    <div className="select-container">
      <label htmlFor="cities" className="label">
        Seleccione una Localidad
      </label>
      <select onChange={onCitySelected} className="select-icon" id="cities">
        {cities.map(({ id, title }) => (
          <option key={id} value={title} className="select-icon">
            {title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCities;
