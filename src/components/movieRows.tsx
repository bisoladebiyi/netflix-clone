/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import InfoModals from "./infoModals";
import { PopUpProps } from "../../utils/interfaces";
import { device } from "../styles/variables";

interface Props {
  data: any[];
  title: string;
}
export interface StateProp extends Omit<PopUpProps, "set"> {
  set?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieRows: React.FC<Props> = ({ data, title }) => {
  const [popUpData, setPopUpData] = useState<StateProp>({
    url: "",
    titleText: "",
    desc: "",
    year: "",
    score: 0,
    id: 0,
  });
  const [showModal, setShowModal] = useState<boolean>(false);

  const MovieBox = ({ mov }: any) => {
    return (
      <MovieBoxStyle
        onClick={() => {
          setPopUpData({
            url: mov.backdrop_path,
            titleText: mov.original_title
              ? mov.original_title
              : mov.original_name,
            desc: mov.overview,
            year: mov.release_date ? mov.release_date.slice(0, 4) : null,
            score: mov?.vote_average,
            id: mov.id,
          });
          setShowModal(!showModal);
        }}
      >
        <img
          src={
            mov.backdrop_path !== null
              ? `https://image.tmdb.org/t/p/w500/${mov.backdrop_path}`
              : "/fallback.jpeg"
          }
          alt={"poster"}
        />
      </MovieBoxStyle>
    );
  };

  return (
    <RowContainer>
      <Title>{title}</Title>
      <Swiper
        slidesPerView={5}
        slidesPerGroup={5}
        slidesPerGroupSkip={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        grabCursor={true}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        speed={1000}
        breakpoints={{
          1000: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          750: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
        }}
        keyboard={{
          enabled: true,
        }}
      >
        {data &&
          data?.map((mov: any) => (
            <SwiperSlide key={mov.id}>
              <MovieBox mov={mov} />
            </SwiperSlide>
          ))}
      </Swiper>
      {showModal && (
        <InfoModals
          set={setShowModal}
          year={popUpData.year}
          score={popUpData.score}
          url={popUpData.url}
          titleText={popUpData.titleText}
          desc={popUpData.desc}
          id={popUpData.id}
        />
      )}
    </RowContainer>
  );
};

export default MovieRows;
const RowContainer = styled.div`
  margin-bottom: 50px;

  @media ${device.mobileVL} {
    margin-bottom: 30px;
  }
`;

export const MovieBoxStyle = styled.div`
  img {
    width: 100%;
    border-radius: 6px;
  }
`;
const Title = styled.p`
  font-size: 16px;
  z-index: 10000;
  font-weight: 400;
  margin: 5px 60px 10px;

  @media ${device.laptop} {
    margin-left: 20px;
  }

  @media ${device.mobileVL} {
    font-size: 11px;
  }
`;
