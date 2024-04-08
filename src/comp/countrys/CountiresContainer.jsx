import React from "react";
import OneCountry from "./OneCoutry";
import { useSelector } from "react-redux";
const CountriesContainer = () => {
  const { countries, problemNotFound } = useSelector((state) => state.country);

  if (countries.length === 0) {
    return (
      <div className="countries-main-page">
        <div className="problem">
          there is no country with this name : " {problemNotFound} "
        </div>
      </div>
    );
  }
  return (
    <div className="countries-main-page">
      {countries.map((e) => {
        return (
          <div key={e.name} className="center-one-country">
            <OneCountry country={e} />;
          </div>
        );
      })}
    </div>
  );
};

export default CountriesContainer;
