import React from 'react'
import Navbar from '../navbar'
interface Props {
    children: JSX.Element,
    activePage: string 
}
const Layout: React.FC<Props>= ({ children, activePage }) => {
  return (
    <>
    <Navbar activePage={activePage} />
    <main>
        {children}
    </main>
    
    </>
  )
}

export default Layout