import Head from 'next/head'
import React from 'react'
import Navbar from '../navbar'
interface Props {
    children: JSX.Element,
    activePage: string 
}
const Layout: React.FC<Props>= ({ children, activePage }) => {
  return (
    <>
    <Head><title>Netflix Clone - {activePage}</title></Head>
    <Navbar activePage={activePage} />
    <main>
        {children}
    </main>
    
    </>
  )
}

export default Layout