import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistor, store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}><PersistGate loading={null} persistor={persistor}><div><Component {...pageProps} /></div></PersistGate></Provider>
}

export default MyApp
