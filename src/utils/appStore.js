import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import smartReducer from "../utils/smartSlice";
import langReducer from "../utils/langSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    smartSearch: smartReducer,
    language: langReducer,
  },
});

export default appStore;
