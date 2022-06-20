import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/images/netflix-logo.png";
import styled from "styled-components";
import Link from "next/link";
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import avatar from '../assets/images/avatar.png'
import { device } from "../styles/variables";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import { useInView } from "react-intersection-observer";
interface Props {
    activePage: string 
    view: boolean
}
const Navbar: React.FC<Props> = ({ activePage, view }) => {
  const [showMobileLinks, setShowMobileLinks] = useState<boolean>(false)

  const navLinks = [{
      name:'Home',
      link:'/'
  },
  {
    name:'TV Shows',
    link:'/tv-shows'
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
    <NavbarContainer id={view ? "out" : "in"}>
      <NavbarLogoLinks>
        <div className="logo-img">
          <Image src={logo} alt="Netflix logo" />
        </div>
        <ul>
          {navLinks.map(({name, link}) => (
            <Link href={link} key={name}><li style={ activePage == name ? {fontWeight: '400'} : {}}>{name}</li></Link>
          ))}
        </ul>
        <MobileLinksDropdown>
          <p>{activePage}</p>
          <button onClick={()=> setShowMobileLinks(!showMobileLinks)}>{!showMobileLinks ? <ArrowDropDownRoundedIcon /> : <ArrowDropUpRoundedIcon />}</button>
          
        </MobileLinksDropdown>
      </NavbarLogoLinks>
      <div className="notifContainer">
<NotificationsRoundedIcon className="notif" />
<Image src={avatar} alt="avatar" width={30} height={30} className="avatar" />
      </div>
      {showMobileLinks && <MobileLinks>
      <ul>
          {navLinks.map(({name, link}) => (
            <Link href={link} key={name}><li style={ activePage == name ? {fontWeight: '400'} : {}}>{name}</li></Link>
          ))}
        </ul>
      </MobileLinks>}
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items:center;
padding: 0px 48px;
position: fixed;
transition: background .6s ease-in-out;
background: ${props => props.id === "out" ? '#141414' : 'linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))'};
z-index:6000;
.notifContainer{
  display: flex;
  align-items:center;
  .notif{
    margin-right:10px;
    @media ${device.mobileVL}{
      transform: scale(.7);
      margin-right:0;
    }
  }
  .avatar{
    border-radius:4px;
    @media ${device.mobileVL}{
      transform: scale(.7)
    }
  }
}
@media ${device.laptop}{
  padding: 0px 20px 0 10px;
}

`

const NavbarLogoLinks = styled.div`
  display: flex;
  font-size: 13.5px;
  font-weight: 200;
  align-items: center;
  .logo-img {
    width: 120px;
    @media ${device.laptop}{
      width:100px;
    }
    @media ${device.mobileVL}{
      width:60px;
    }
  }
  ul {
    display: flex;
    list-style: none;
    @media ${device.laptop}{
      font-size: 12px;
    }
    @media ${device.tablet}{
      display:none;
    }
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

const MobileLinksDropdown = styled.div`
position:relative;
display:none;
align-items: center;
font-size: 8px;
margin-left:10px;
font-weight:500;
button{
  all:unset;
  cursor:pointer
};
@media ${device.tablet}{
  display:flex;
}
`
const MobileLinks = styled.div`
position: absolute;
left:0;
top:100%;
width: 230px;
background: rgb(0,0,0, 0.92);
text-align:center;
font-size:14px;
border-top:2px solid #ddd;
font-weight:200;
ul{
  padding:0;
  list-style:none;
  li{
    padding: 20px 0;
    cursor:pointer;
  }
}

`
