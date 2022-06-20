import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Loading>
        <TailSpin color='red' />
    </Loading>
  )
}

export default Loader

const Loading = styled.div`
background: #141414;
display:grid;
place-items:center;
width: 100%;
height: 100vh;
position:fixed;
top:0;
z-index:500;
`