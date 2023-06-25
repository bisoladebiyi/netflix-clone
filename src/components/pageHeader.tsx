import styled from "styled-components";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import MovieRows from "./movieRows";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InfoModals from "./infoModals";
import { device } from "../styles/variables";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";

interface VidProps {
  url: string;
  isMute?: boolean;
}
interface InfoProps {
  title: string;
  desc: string;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}
interface MainProps extends Omit<InfoProps, "set">, VidProps {
  data: any;
  score: number;
  year: number;
  text: string;
}

export const Video: React.FC<VidProps> = ({ url, isMute }) => {
  return (
    <Wrapper>
      <ReactPlayer
        playing={true}
        className="react-player"
        width="100%"
        height={"100%"}
        volume={1}
        muted={isMute}
        url={url}
      />
      <BottomFade></BottomFade>
    </Wrapper>
  );
};

const MovieInfo: React.FC<InfoProps> = ({ title, desc, set }) => {
  return (
    <Info>
      <p>{title}</p>
      <p className="desc">{desc}</p>
      <div>
        <Button onClick={() => alert("Well this is awkward 😅")}>
          <PlayArrowRoundedIcon className="icon" />
          Play
        </Button>
        <Button onClick={() => set(true)} id="info">
          <InfoOutlinedIcon className="icon" />
          More Info
        </Button>
      </div>
    </Info>
  );
};

const PageHeader: React.FC<MainProps> = ({
  data,
  title,
  desc,
  url,
  score,
  year,
  text,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);
  return (
    <Header>
      <Video url={url} isMute={isMute} />
      <div className="movieRow">
        <MovieRows data={data} title={text} />
      </div>
      <MovieInfo title={title} set={setShowModal} desc={desc} />
      {showModal && (
        <InfoModals
          year={year}
          score={score}
          titleText={title}
          desc={desc}
          movUrl={url}
          set={setShowModal}
        />
      )}
      <Control>
        <MuteBtn onClick={() => setIsMute(!isMute)}>
          {isMute ? <VolumeOffOutlinedIcon /> : <VolumeUpOutlinedIcon />}
        </MuteBtn>
        <div className="age">18+</div>
      </Control>
    </Header>
  );
};

export default PageHeader;

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const Header = styled.header`
  position: relative;

  .movieRow {
    position: relative;
    margin-top: -50px;
    z-index: 10;
  }
`;
export const BottomFade = styled.div`
  height: 10rem;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(15, 15, 15, 0.61),
    #141414,
    #141414
  );
  position: absolute;
  bottom: 0;
  z-index: 3;
  width: 100%;
`;
const Info = styled.div`
  width: 40%;
  padding-left: 50px;
  position: absolute;
  z-index: 5;
  left: 0;
  top: 30%;

  p {
    margin: 0;
    &:first-child {
      font-size: 4rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  .desc {
    font-size: 1rem;
    line-height: 25px;
  }

  div {
    display: flex;
    margin-top: 20px;
    @media ${device.mobileVL} {
      margin-top: 10px;
    }
  }

  @media ${device.laptop} {
    padding-left: 20px;
    top: 25%;
    width: 45%;

    p {
      margin: 0;
      &:first-child {
        font-size: 3rem;
        font-weight: 700;
        text-transform: uppercase;
      }
    }

    .desc {
      font-size: 0.8rem;
      line-height: 18px;
    }
  }

  @media ${device.tablet} {
    top: 20%;
    width: 50%;

    p {
      margin: 0;
      &:first-child {
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
      }
    }

    .desc {
      font-size: 12px;
      line-height: 18px;
    }
  }

  @media ${device.mobileVL} {
    top: 25%;
    width: 50%;

    p {
      &:first-child {
        font-size: 1.1rem;
      }
    }

    .desc {
      display: none;
    }
  }

  @media ${device.mobileL} {
    top: 15%;
  }
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  background: ${(props) =>
    props.id == "info" ? "rgba(225,225,225,0.21)" : "#fff"};
  border-radius: 4px;
  color: ${(props) => (props.id == "info" ? "#fff" : "#000")};
  font-size: 16px;
  padding: 10px 24px;
  margin-right: 20px;

  .icon {
    transform: ${(props) => (props.id == "info" ? "scale(1.2)" : "scale(1.7)")};
    margin-left: -5px;
    margin-right: 10px;
  }

  &:hover {
    background: ${(props) =>
      props.id == "info" ? "rgba(225,225,225,0.11)" : "rgba(225,225,225,0.99)"};
  }

  @media ${device.tablet} {
    padding: 5px 16px;
    .icon {
      transform: ${(props) => (props.id == "info" ? "scale(1)" : "scale(1.2)")};
    }
    font-size: 14px;
  }

  @media ${device.mobileVL} {
    padding: 5px 10px;
    margin-right: 10px;
    .icon {
      transform: ${(props) => (props.id == "info" ? "scale(.7)" : "scale(.9)")};
      margin-right: 3px;
    }
    font-size: 10px;
  }

  @media ${device.mobileL} {
    padding: 1px 6px;
    .icon {
      transform: ${(props) => (props.id == "info" ? "scale(.5)" : "scale(.7)")};
      margin-right: -3px;
    }
    font-size: 5px;
  }
`;

const Control = styled.div`
  position: absolute;
  right: 0;
  bottom: 40%;
  display: flex;
  align-items: center;

  @media ${device.mobileVL} {
    bottom: 50%;
  }

  @media ${device.mobileL} {
    bottom: 60%;
  }

  .age {
    background: rgba(15, 15, 15, 0.61);
    border-left: 3px solid #ddd;
    padding: 5px 50px 5px 10px;
    @media ${device.tablet} {
      font-size: 13px;
    }
    @media ${device.mobileVL} {
      font-size: 10px;
    }
    @media ${device.mobileL} {
      font-size: 6px;
      padding: 3px 20px 3px 7px;
      bottom: 60%;
    }
  }
`;

const MuteBtn = styled.button`
  width: 40px;
  height: 40px;

  @media ${device.tablet} {
    transform: scale(0.5);
    margin-right: 0px;
  }
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
  background: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  &:hover {
    border-color: #fff;
  }
`;
