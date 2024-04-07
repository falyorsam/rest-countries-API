import { configureStore } from "@reduxjs/toolkit";
import CountryReducer from "./fr/country/countrySlice.jsx";
export const store = configureStore({
  reducer: { country: CountryReducer },
});
