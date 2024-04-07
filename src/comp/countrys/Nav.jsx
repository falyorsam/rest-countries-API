import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { enableDarkMode } from "../../fr/country/countrySlice";
import { usedDynamicAPIs } from "next/dist/server/app-render/dynamic-rendering";
const Nav = () => {
  const dispatch = useDispatch();
  const { countries, loading, error, darkMode } = useSelector(
    (state) => state.country
  );
  if (darkMode === false) {
    return (
      <nav className="nav dark-nav">
        <div className="NavText">where in the world?</div>
        <div onClick={() => dispatch(enableDarkMode())} className="DarkMode">
          <div className="iconNight">
            <i className="fa-regular fa-moon"></i>
          </div>
          <div className="darkModeText">Dark Mode</div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="nav">
      <div className="NavText">where in the world?</div>
      <div onClick={() => dispatch(enableDarkMode())} className="DarkMode">
        <div className="iconNight">
          <i className="fa-solid fa-moon"></i>
        </div>
        <div className="darkModeText">Dark Mode</div>
      </div>
    </nav>
  );
};

export default Nav;
