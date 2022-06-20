import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {persistor, store} from '../redux/store'
import styled from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}><PersistGate loading={null} persistor={persistor}><StyledComponent><Component {...pageProps} /></StyledComponent></PersistGate></Provider>
}

export default MyApp
const StyledComponent = styled.div`
max-width:1280px;
margin: 0 auto;
overflow-x:hidden;
`
