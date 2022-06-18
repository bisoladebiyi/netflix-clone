import Image from "next/image";
import React from "react";
import logo from "../../public/netflix-logo.png";
import styled from "styled-components";
import Link from "next/link";
interface Props {
    activePage: string 
}
const Navbar: React.FC<Props> = ({ activePage }) => {
  const navLinks = [{
      name:'Home',
      link:'/'
  },
  {
    name:'TV Shows',
    link:'/'
},
{
    name:'Movies',
    link:'/movies'
},
{
    name:'My List',
    link:'/my-list'
},
]
  return (
    <NavbarContainer>
      <NavbarLogoLinks>
        <div className="logo-img">
          <Image src={logo} alt="Netflix logo" />
        </div>
        <ul>
          {navLinks.map(({name, link}) => (
            <Link href={link} key={name}><li style={ activePage == name ? {fontWeight: '400'} : {}}>{name}</li></Link>
          ))}
        </ul>
      </NavbarLogoLinks>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
width:100%;
display: flex;
padding: 0px 48px;
position: fixed;
transition: background .4s ease-in-out;
z-index:1000;

`

const NavbarLogoLinks = styled.div`
  display: flex;
  font-size: 13.5px;
  font-weight: 200;
  align-items: center;
  .logo-img {
    width: 120px;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      margin-right: 20px;
      cursor: pointer;
      transition: color .3s ease-in-out;
      &:hover{
          color: #b3b3b3;
      }
    }
  }
`;
