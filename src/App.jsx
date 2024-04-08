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
import CountriesContainer from "./comp/countrys/CountiresContainer";
function App() {
  const { countries, loading, error, darkMode } = useSelector(
    (state) => state.country
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesItem());
  }, []);
  if (loading) {
    if (darkMode === false) {
      return (
        <>
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="loading  dark-loading">
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
        <CountriesContainer />
        {/* <CountryCont /> */}
      </div>
    );
  }
  return (
    <div className="App">
      <Nav />
      <Search />
      <Filter />
      <CountriesContainer />
      {/* <CountryCont /> */}
    </div>
  );
}

export default App;
