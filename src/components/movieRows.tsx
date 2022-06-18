/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';



interface Props{
    data: any
    title:string
  }
const MovieRows: React.FC<Props> = ({ data, title }) => {
    const MovieBox = ({ backdrop_path }: any) => {
        return (
            <MovieBoxStyle>
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} key={backdrop_path} alt={"poster"} />
                <p>hello</p>
            </MovieBoxStyle>
        )
    }
  return (
    <div style={{marginBottom: '60px'}}>
        <Title>{title}</Title>
        <Swiper slidesPerView={5}
        slidesPerGroup={5}
        slidesPerGroupSkip={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        grabCursor={true}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        speed={1000}
        keyboard={{
          enabled: true,
        }}>
        {data && data.map(({ backdrop_path}: any) => (
         <SwiperSlide key={backdrop_path}><MovieBox backdrop_path={backdrop_path} /></SwiperSlide>
        ))}
        </Swiper>
     
     </div>
  )
}

export default MovieRows

const MovieBoxStyle = styled.div`
p{
  display:none;
  
};
img{
    width:100%;
    
};
`
const Title = styled.p`
font-size: 16px;
z-index:10000;
font-weight: 400;
margin: 5px 60px 10px;
`
  