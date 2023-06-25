import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Navbar from '../navbar'
import styled from 'styled-components'

interface Props {
    children: JSX.Element;
    activePage?: string; 
    isAuth?: boolean;
}
const Layout: React.FC<Props>= ({ children, activePage, isAuth }) => {
  const [ref, inView] = useInView();
  const [outOfView, setOutOfView] = useState<boolean>(false)
  
  useEffect(()=> {
    if(!inView){
      setOutOfView(true)
    }else{
      setOutOfView(false)
    }
  },[inView])

  return (
    <>
    <Head><title>Netflix Clone - {activePage}</title></Head>
    <span ref={ref}></span>
    <Navbar view={outOfView} activePage={activePage} isAuth={isAuth} />
    <StyledMainContent>
        {children}
    </StyledMainContent>
    
    </>
  )
}

export default Layout

const StyledMainContent = styled.main`
max-width: 1500px;
margin: 0 auto;
overflow-x: hidden;
`