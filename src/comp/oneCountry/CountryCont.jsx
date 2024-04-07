import React from "react";
import Country from "./Country";
const CountryCont = () => {
  return (
    <section className="country-container">
      <div className="back-container">
        <div className="back">
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
