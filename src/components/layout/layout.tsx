import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Navbar from '../navbar'
interface Props {
    children: JSX.Element,
    activePage: string 
}
const Layout: React.FC<Props>= ({ children, activePage }) => {
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
    <Navbar view={outOfView} activePage={activePage} />
    <main>
        {children}
    </main>
    
    </>
  )
}

export default Layout