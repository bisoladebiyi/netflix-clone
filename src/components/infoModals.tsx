/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { PopUpProps } from "../../utils/interfaces";
import { BottomFade, Button, Video } from "./pageHeader";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';



const InfoModals: React.FC<PopUpProps> = ({
  url,
  titleText,
  desc,
  year,
  score,
  movUrl,
  set
}) => {
  return (
    <Modal>
        <CloseBtn onClick={()=> set(false)}><CloseRoundedIcon /></CloseBtn>
     <MovContainer style ={url !== null ? {backgroundImage: `url(https://image.tmdb.org/t/p/w500/${url})`} : {backgroundImage: `url(/fallback.jpeg)`}}>
          {movUrl &&  <Video url={movUrl} />}
        <div className="name-actions">
          <p>{titleText}</p>
          <div className="btnContainer">
          <Button onClick={() => alert("Well this is awkward 😅")}>
            <PlayArrowRoundedIcon className="icon" />
            Play
          </Button>
          <CloseBtn id="add"><AddRoundedIcon /></CloseBtn>
          </div>
          
        </div>
        {!movUrl && <BottomFade />}
      </MovContainer>
      <MovInfo style={{paddingTop : movUrl ? '25px' : '0'}}>
        <div>
            <MoreInfo>
                <p>{score}/10 Rating</p>
                <p>{year}</p>
            </MoreInfo>
          <p className="desc">{desc}</p>
        </div>
        {/* <img src={fall} alt="" /> */}
      </MovInfo>
     
    </Modal>
  );
};

export default InfoModals;
const Modal = styled.div`
  box-shadow: 0 0 0 1000px rgba(33, 33, 33, 0.363);
  width: 60%;
  padding-bottom: 30px;
  max-height: 95vh;
  border-radius: 10px;
  overflow-y:scroll;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #141414;
  z-index: 1000;
  overflow: hidden;
`;
const MovContainer = styled.div`
  position: relative;
  height: 400px;
  background-size: cover;
  
  .name-actions {
    position:absolute;
    top:50%;
    padding-left: 50px;
    z-index:999;
    p {
      margin: 0;
      padding-bottom:10px;
      font-size: 3.3rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    .btnContainer{
        display:flex;
        align-items: center;
    }
  }
`;
const MovInfo = styled.div`
  padding-left:50px;
  .desc {
    font-size: 13px;
    font-weight: 200;
    line-height: 20px;
  }
`;
const CloseBtn = styled.button`
width: 40px;
height:40px;
border-radius: 50%;
cursor:pointer;
background:${props => props.id == "add" ? "rgba(0,0,0,0.49)": "#141414"};
color:#fff;
display:grid;
place-items:center;
position:${props => props.id == "add" ? "relative": "absolute"};
top:${props => props.id == "add" ? "0": "10px"};
right:10px;
z-index: 10;
border:${props => props.id == "add" ? "2px solid #ddd": "none"};
&:hover{
    border-color:  #fff;
}
`
const MoreInfo = styled.div`
display:flex;
p:first-child{
    font-weight: 600;
    color: #46d369;
    margin-right: 20px;
}
`
