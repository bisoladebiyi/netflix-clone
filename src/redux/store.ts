import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import homepageSlice from "./homepageSlice";
import moviePageSlice from "./moviePageSlice";
import tvPageSlice from "./tvPageSlice";

const store = configureStore({
  reducer: {
    homePage: homepageSlice,
    moviePage: moviePageSlice,
    tvPage: tvPageSlice
  }
});

export default store; 