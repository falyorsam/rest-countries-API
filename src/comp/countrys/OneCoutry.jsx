import React from "react";
import { showOneCountry } from "../../fr/country/countrySlice";
import { useSelector, useDispatch } from "react-redux";
const OneCountry = ({ country }) => {
  const dispatch = useDispatch();
  const { countries, backUp, showCountry } = useSelector(
    (state) => state.country
  );
  return (
    <div
      onClick={(e) => {
        const data = backUp.filter(
          (countrys) => countrys.name === country.name
        );
        dispatch(showOneCountry(data));
      }}
      className="one-country-block"
    >
      <img src={country.flags.png} alt={country.name} className="country-img" />
      <div className="info-one">
        <div className="one-country-text">{country.name}</div>
        <div className="one-country-info">
          Population: <span>{country.population}</span>
        </div>
        <div className="one-country-info">
          Region: <span>{country.region}</span>
        </div>
        <div className="one-country-info">
          Capital: <span> {country.capital}</span>
        </div>
      </div>
    </div>
  );
};
export default OneCountry;
