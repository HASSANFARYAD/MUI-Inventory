import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authActions from "./Reducers/reducers";
import userActions from "./Actions/userActions";
import apiActions from "./Reducers/apiReducers";

// Combine your reducers here
const rootReducer = combineReducers({
  authentication: authActions,
  user: userActions,
  api: apiActions,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["authentication"], // Include only necessary slices for persistence
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production", // Automatically enables DevTools in development
});

export const persistor = persistStore(store);
