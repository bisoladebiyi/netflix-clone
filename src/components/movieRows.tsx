/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



interface Props{
    data: any
    title:string
  }
const MovieRows: React.FC<Props> = ({ data, title }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        // autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
      };
    const MovieBox = ({ backdrop_path }: any) => {
        return (
            <MovieBoxStyle>
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} key={backdrop_path} alt={"poster"} />
                {/* <p>hello</p> */}
            </MovieBoxStyle>
        )
    }
  return (
    <div style={{marginBottom: '60px'}}>
        <Title>{title}</Title>
        <Slider {...settings}>
        {data && data.map(({ backdrop_path}: any) => (
          <MovieBox backdrop_path={backdrop_path} key={backdrop_path} />
        ))}
        </Slider>
     
     </div>
  )
}

export default MovieRows

const MovieBoxStyle = styled.div`
border-radius: 6px;
overflow:hidden;
transition: all .2s ease-in-out;
position: relative;
margin-right: 7px;
cursor: pointer;
&:hover{
    transform: scale(1.3);
    z-index: 10;
    box-shadow: 0 0 0 1000px rgba(14, 14, 14, 0.256);
}
img{
    width:100%;
    height:100%;
    
};
`
const Title = styled.p`
font-size: 16px;

font-weight: 400;
margin: 5px 60px 10px;
`
  