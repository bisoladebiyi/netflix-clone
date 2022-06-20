import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "./features/homepageSlice";
import moviePageSlice from "./features/moviePageSlice";
import myListSlice from "./features/myListSlice";
import tvPageSlice from "./features/tvPageSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, myListSlice)
export const store = configureStore({
  reducer: {
    homePage: homepageSlice,
    moviePage: moviePageSlice,
    tvPage: tvPageSlice,
    myListPage: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export let persistor = persistStore(store) 