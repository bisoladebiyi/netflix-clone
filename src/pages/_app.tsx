import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import styled from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}><StyledComponent><Component {...pageProps} /></StyledComponent></Provider>
}

export default MyApp
const StyledComponent = styled.div`
max-width:1280px;
margin: 0 auto;
overflow-x:hidden;
`
