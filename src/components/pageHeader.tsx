import styled from "styled-components"
import React, { useState } from "react";
import ReactPlayer from "react-player";
import MovieRows from "./movieRows";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoModals from "./infoModals";


interface VidProps{
    url:string
}
interface InfoProps{
    title: string
    desc:string
    set:React.Dispatch<React.SetStateAction<boolean>>
}
interface MainProps extends Omit<InfoProps, 'set'>, VidProps {
    data: any
    score:number 
    year:number
    text:string
}
export const Video:React.FC<VidProps> = ({url}) => {
    return (
<Wrapper>
   
        <ReactPlayer playing={false}
        className="react-player"
        width='100%'
        height={'100%'}
        volume={1}
        muted={false}
        url={url} />
        <BottomFade></BottomFade>
    </Wrapper>
    )
}
const MovieInfo:React.FC<InfoProps> = ({ title, desc, set}) => {
    return (
        <Info>
            <p>{title}</p>
            <p className="desc">{desc}</p>
            <div>
            
                <Button onClick={() => alert("Well this is awkward 😅")}><PlayArrowRoundedIcon className="icon" />Play</Button>
                <Button onClick={() => set(true)} id="info"><InfoOutlinedIcon className="icon"/>More Info</Button>
            </div>
        </Info>
    )
}
const PageHeader:React.FC<MainProps> = ({ data, title, desc, url, score, year, text }) => {
    const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <Header>
        <Video url={url} />
        <div className="movieRow">
        <MovieRows data={data} title={text} />
        </div>
        <MovieInfo title={title} set={setShowModal} desc={desc} />
       {showModal && <InfoModals year={year} score={score} titleText={title} desc={desc} movUrl={url} set={setShowModal} />}
        
    </Header>
  );
};

export default PageHeader;

const Wrapper = styled.div`
position: relative;
z-index:0;
padding-top: 56.25%;
.react-player{
    position: absolute;
    top: 0;
    left: 0;
}
`
const Header = styled.header`
position: relative;
.movieRow{
 position: relative;
 margin-top: -50px;
z-index: 10;
}

`
export const BottomFade = styled.div`
height: 10rem;
background: linear-gradient(180deg, transparent, rgba(15,15,15,0.61), #141414, #141414);
position: absolute;
bottom: 0;
z-index: 3;
width:100%;
`
const Info = styled.div`
width: 40%;
padding-left:50px;
position: absolute;
z-index: 5;
left:0;
top:30%;
p{
    margin: 0;
    &:first-child{
        font-size: 4rem;
        font-weight:700;
        text-transform: uppercase;
    }    
}
.desc{
    font-size: 1rem;
    line-height: 25px;
}

div{
    display: flex;
    margin-top:20px;
}

`
export const Button = styled.button`
all:unset;
cursor:pointer;
display:flex;
align-items:center;
font-weight:600;
background: ${props => props.id == "info" ? "rgba(225,225,225,0.21)": "#fff"};
border-radius:4px;
color: ${props => props.id == "info" ? "#fff": "#000"};;
font-size: 16px;
padding: 10px 24px;
margin-right: 20px;
.icon{
    transform: ${props => props.id == "info" ? "scale(1.2)": "scale(1.7)"};
    margin-left: -5px;
    margin-right: 10px;
}
&:hover{
    background: ${props => props.id == "info" ? "rgba(225,225,225,0.11)": "rgba(225,225,225,0.99)"};
}

`