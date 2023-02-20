import { combineReducers, configureStore } from "@reduxjs/toolkit";
import joblistReducer from "../reducers";
import fetchJobsReducer from "../reducers/fetchJobsReducer";

const rootReducers = combineReducers({
  jobs: joblistReducer,
  fetch: fetchJobsReducer,
});

const store = configureStore({
  reducer: rootReducers,
});
export default store;
