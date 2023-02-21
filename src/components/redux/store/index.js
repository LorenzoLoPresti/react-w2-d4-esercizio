import { combineReducers, configureStore } from "@reduxjs/toolkit";
import joblistReducer from "../reducers";
import fetchJobsReducer from "../reducers/fetchJobsReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
// const rootReducers = combineReducers({
//   jobs: joblistReducer,
//   fetch: fetchJobsReducer,
// });

const persistConfig = {
  key: "root",
  storage: storage,
  transform: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};
// const persistConfig = {
//   key: "root",
//   storage: storage,
// };

const rootReducers = combineReducers({
  jobs: joblistReducer,
  fetch: fetchJobsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
});
// export default store;

export const persistor = persistStore(store);
