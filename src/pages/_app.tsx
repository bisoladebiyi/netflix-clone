import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { filmApi } from "../redux/features/filmApiSlice";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={filmApi}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <Component {...pageProps} />
          </div>
        </PersistGate>
      </Provider>
    </ApiProvider>
  );
}

export default MyApp;
