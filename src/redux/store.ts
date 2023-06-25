import { configureStore } from "@reduxjs/toolkit";
import myListSlice from "./features/myListSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filmApi } from "./features/filmApiSlice";

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, myListSlice)
export const store = configureStore({
  reducer: {
    [filmApi.reducerPath]: filmApi.reducer,
    myListPage: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(filmApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export let persistor = persistStore(store) 