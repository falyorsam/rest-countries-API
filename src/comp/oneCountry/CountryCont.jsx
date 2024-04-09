import React from "react";
import Country from "./Country";
import { BackOneCountry } from "../../fr/country/countrySlice";
import { useDispatch } from "react-redux";
const CountryCont = () => {
  const dispatch = useDispatch();
  return (
    <section className="country-container">
      <div className="back-container">
        <div
          onClick={() => {
            dispatch(BackOneCountry());
          }}
          className="back"
        >
          <div className="back-icon">
            <i className="fa-solid fa-arrow-left-long"></i>
          </div>
          <div className="back-text">back</div>
        </div>
      </div>
      <Country />
    </section>
  );
};

export default CountryCont;
