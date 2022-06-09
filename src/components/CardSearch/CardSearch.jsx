import React from "react";
import "./CardSearch.scss";

function CardSearch() {
  return (
    <div className="card_search_container">
      <div className="searc_title_content">
        <h1>Weather Api</h1>

        <p> Ciudad </p>
      </div>
      <div className="form_container">
        <div className="form_content">
          <h4>El mejor buscador de clima esta aquí</h4>
          <form
            noValidate
            //onSubmit={handleSubmit}
            className="search-form"
          >
            <input
              type="text"
              placeholder="Enter location"
              className="input-search"
              //onChange={handleChange}
              required
            />
            <button type="submit" className="search-icon">
              <i className="fa fa-search" aria-hidden="true" type="submit"></i>
            </button>
            <button
              //type="submit"
              className="search-icon"
              /* onClick={() => {
                  navigator.geolocation.getCurrentPosition(myIP, error);
                }} */
            >
              <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardSearch;
