import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "./features/homepageSlice";
import moviePageSlice from "./features/moviePageSlice";
import myListSlice from "./features/myListSlice";
import tvPageSlice from "./features/tvPageSlice";

const store = configureStore({
  reducer: {
    homePage: homepageSlice,
    moviePage: moviePageSlice,
    tvPage: tvPageSlice,
    myListPage: myListSlice
  }
});

export default store; 