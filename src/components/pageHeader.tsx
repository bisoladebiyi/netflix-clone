import styled from "styled-components"
import React from "react";
import ReactPlayer from "react-player";
import MovieRows from "./movieRows";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface Props {
    data: any,
    forSection?: string
}
const Video:React.FC = () => {
    return (
<Wrapper>
   
        <ReactPlayer playing={false}
        className="react-player"
        loop={true}
        width='100%'
        height={'100%'}
        volume={1}
        muted={false}
        url={"https://vimeo.com/663520150"} />
        
        
        <BottomFade></BottomFade>
    </Wrapper>
    )
}
const MovieInfo:React.FC = () => {
    return (
        <Info>
            <p>All of us are <br/>dead</p>
            <p className="desc">A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected.</p>
            <div>
            
                <Button> <PlayArrowRoundedIcon className="icon" />Play</Button>
                <Button id="info"><InfoOutlinedIcon className="icon"/>More Info</Button>
            </div>
        </Info>
    )
}
const PageHeader:React.FC<Props> = ({ data, forSection }) => {
  return (
    <Header>
        <Video />
        <div className="movieRow">
        <MovieRows data={data} title={"TV Shows"} />
        </div>
        <MovieInfo />
       
        
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
 margin-top: -160px;
z-index: 10;
}

`
const BottomFade = styled.div`
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
z-index: 10;
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
const Button = styled.button`
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