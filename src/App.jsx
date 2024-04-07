import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import countrySlice, {
  getCountriesItem,
  enableDarkMode,
} from "./fr/country/countrySlice";
import { useSelector } from "react-redux";
import Nav from "./comp/countrys/Nav";
import CountryCont from "./comp/oneCountry/CountryCont";
import Search from "./comp/countrys/Search";
import Filter from "./comp/countrys/Filter";
function App() {
  const { countries, loading, error, darkMode } = useSelector(
    (state) => state.country
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesItem());
  }, []);
  if (loading) {
    return (
      <>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }
  if (darkMode === false) {
    return (
      <div className="App dark-app">
        <Nav />
        <Search />
        <Filter />
        {/* <CountryCont /> */}
      </div>
    );
  }
  return (
    <div className="App">
      <Nav />
      <Search />
      <Filter />
      {/* <CountryCont /> */}
    </div>
  );
}

export default App;
