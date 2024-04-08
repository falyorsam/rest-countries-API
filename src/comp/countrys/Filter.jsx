import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  filterByRegion,
  getCountriesItem,
  reAddCountry,
  backUpRegions,
  regionSelect,
} from "../../fr/country/countrySlice";
const Filter = () => {
  const dispatch = useDispatch();
  const {
    countries,
    loading,
    error,
    darkMode,
    backUp,
    regionListShow,
    regionName,
  } = useSelector((state) => state.country);
  const africa = {
    data: backUp.filter((country) => country.region === "Africa"),
    name: "Africa",
  };
  const america = {
    data: backUp.filter((country) => country.region === "Americas"),
    name: "America",
  };
  const asia = {
    data: backUp.filter((country) => country.region === "Asia"),
    name: "Asia",
  };
  const europe = {
    data: backUp.filter((country) => country.region === "Europe"),
    name: "Europe",
  };
  const oceania = {
    data: backUp.filter((country) => country.region === "Oceania"),
    name: "Oceania",
  };
  return (
    <div className="filter">
      <div
        onClick={() => {
          dispatch(regionSelect());
        }}
        className="filter-main"
      >
        <div className="filter-main-text">{regionName.name}</div>
        <div className="icon">
          <i className={regionListShow.arrow}></i>
        </div>
      </div>
      <div style={regionListShow.filterMain} className="filters">
        <div
          onClick={() => {
            dispatch(filterByRegion(africa));
            dispatch(regionSelect());
          }}
          className="filter-by"
        >
          Africa
        </div>
        <div
          onClick={() => {
            dispatch(filterByRegion(america));
            dispatch(regionSelect());
          }}
          className="filter-by"
        >
          America
        </div>
        <div
          onClick={() => {
            dispatch(filterByRegion(asia));
            dispatch(regionSelect());
          }}
          className="filter-by"
        >
          Asia
        </div>
        <div
          onClick={() => {
            dispatch(filterByRegion(europe));
            dispatch(regionSelect());
          }}
          className="filter-by"
        >
          Europe
        </div>
        <div
          onClick={() => {
            dispatch(filterByRegion(oceania));
            dispatch(regionSelect());
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
