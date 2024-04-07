import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  filterByRegion,
  getCountriesItem,
  reAddCountry,
} from "../../fr/country/countrySlice";
const Filter = () => {
  const dispatch = useDispatch();
  const { countries, loading, error, darkMode } = useSelector(
    (state) => state.country
  );
  const africa = countries.filter((country) => country.region === "Africa");
  const america = countries.filter((country) => country.region === "Americas");
  const asia = countries.filter((country) => country.region === "Asia");
  const europe = countries.filter((country) => country.region === "Europe");
  const oceania = countries.filter((country) => country.region === "Oceania");

  return (
    <div className="filter">
      <div className="filter-main">
        <div className="filter-main-text">Filter by Region</div>
        <div className="icon">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className="filters">
        <div
          onClick={() => {
            if (countries.length === 250) {
              dispatch(filterByRegion(africa));
            } else {
              dispatch(reAddCountry());
            }
          }}
          className="filter-by"
        >
          Africa
        </div>
        <div
          onClick={() => {
            if (countries.length === 250) {
              dispatch(filterByRegion(america));
            } else {
              dispatch(reAddCountry());
            }
          }}
          className="filter-by"
        >
          America
        </div>
        <div
          onClick={() => {
            if (countries.length === 250) {
              dispatch(filterByRegion(asia));
            } else {
              dispatch(reAddCountry());
            }
          }}
          className="filter-by"
        >
          Asia
        </div>
        <div
          onClick={() => {
            if (countries.length === 250) {
              dispatch(filterByRegion(europe));
            } else {
              dispatch(reAddCountry());
            }
          }}
          className="filter-by"
        >
          Europe
        </div>
        <div
          onClick={() => {
            if (countries.length === 250) {
              dispatch(filterByRegion(oceania));
            } else {
              dispatch(reAddCountry());
            }
          }}
          className="filter-by"
        >
          Oceania
        </div>
      </div>
    </div>
  );
};
export default Filter;
