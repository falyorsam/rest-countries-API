import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchOneCountry } from "../../fr/country/countrySlice";
const Search = () => {
  const dispatch = useDispatch();
  const {
    countries,
    loading,
    error,
    darkMode,
    backUp,
    regionListShow,
    regionName,
    problemNotFound,
  } = useSelector((state) => state.country);
  // console.log(countries);
  const handleSubmit = (e) => {
    e.preventDefault();

    const searchData = backUp.filter(
      (country) =>
        country.name.toUpperCase() === e.currentTarget.value.toUpperCase()
    );
    const search = {
      notFound: e.currentTarget.value,
      data: searchData,
    };
    dispatch(searchOneCountry(search));
    e.currentTarget.value = "";
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  return (
    <div className="search-bar">
      <div className="abs">
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <form onSubmit={handleSubmit} action="submit">
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Search for a country..."
              onKeyPress={handleKeyPress}
            />
          </label>
          {/* You can add more input fields here */}
          {/* <input type="password" /> */}
          <button type="submit" style={{ display: "none" }} />
        </form>
      </div>
    </div>
  );
};

export default Search;
