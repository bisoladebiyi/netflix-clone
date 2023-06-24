/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import InfoModals from '../../components/infoModals'
import Layout from '../../components/layout/layout'
import { StateProp } from '../../components/movieRows'
import { device } from '../../styles/variables'

const MyList: NextPage = () => {
  const { list } = useSelector((store: any) => store.myListPage)
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false)
  const [mov, setMov] = useState<StateProp>({url: "", titleText: "", desc: "", year:"", score: 0, id:0})
  
  return (
    <Layout activePage='My List'>
      <ListConatiner>
        <h2>My List</h2>
        {list[0] ? <ListGrid>
          {list.map((item: any) => (
            <MovieBoxStyle key={item.id} onClick={()=> {
              setMov({url:item.url, id:item.id, titleText:item.titleText, desc:item.desc, year:item.year, score:item.score})
              setShowInfoModal(true)
              }}>
               <img src={item.url !== null ? `https://image.tmdb.org/t/p/w500/${item.url}` : '/fallback.jpeg'} alt={"poster"} />
            </MovieBoxStyle>
          ))}

        </ListGrid> : <p className='empty'>You have no movies / shows saved.</p>}
        
        {showInfoModal && <InfoModals set={setShowInfoModal} url={mov.url} titleText={mov.titleText} year={mov.year} score={mov.score} id={mov.id} desc={mov.desc}  />}
      </ListConatiner>
    </Layout>
  )
}

export default MyList
const ListConatiner = styled.div`
padding: 70px 55px 20px;
.empty{
  margin-top: 20px;
  font-size: 14px;
  font-weight:200;
}
@media ${device.laptop}{
  padding: 70px 20px 20px;
}
@media ${device.mobileVL}{
  padding-top: 40px;
  h2{
    font-size: 20px;
  }
  .empty{
    font-size: 10px;
  }
}
`
const ListGrid = styled.div`
display:grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 8px;
@media ${device.laptop}{
  grid-template-columns: repeat(4, 1fr);
}
@media ${device.mobileVL}{
  grid-template-columns: repeat(3, 1fr);
}
`
export const MovieBoxStyle = styled.div`
overflow:hidden;
cursor: pointer;
transition: all .3s ease-in-out;
img{
  border-radius:6px;
    width:100%;
    
};
&:hover{
  transform: scale(1.3);
}
`