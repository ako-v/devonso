import { combineReducers } from "@reduxjs/toolkit";

import settingsSlice from "./settingsSlice";
import apiSlice from "./apiSlice";

const rootReducer = combineReducers({
  settings: settingsSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
