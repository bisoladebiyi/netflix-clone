import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { fetchData } from '../../utils/requests'
import Layout from '../components/layout/layout'
import MovieRows from '../components/movieRows'
import { useSelector, useDispatch } from 'react-redux'
import { getHeaderShows, getHomeSectionOne, getHomeSectionThree, getHomeSectionTwo } from '../redux/homepageSlice'

interface Props{
  data:[any]
  tv:any
}
const Home: NextPage<Props>= () => {
  const { headerShows, sectionOne, sectionTwo, sectionThree } = useSelector((store: any) => store.homePage)
  const PageHeader = dynamic(() => import("../components/pageHeader"), {
    ssr: false,
    });
    const dispatch = useDispatch()  
    useEffect(()=> {
      dispatch(getHeaderShows()) 
      dispatch(getHomeSectionOne())
      dispatch(getHomeSectionTwo())
      dispatch(getHomeSectionThree())
      console.log(sectionOne)
   
    },[]) 
    const data = [
      {
        mainData: sectionOne,
        title: "Now Playing"
      },
      {
        mainData: sectionTwo,
        title: "Popular"
      },
      {
        mainData: sectionThree,
        title: "Popluar TV Dramas"
      }
    ]
  return (
    <Layout activePage='Home'>
     <div>
     <PageHeader text="TV Shows" year={2022} score={8.5} data={headerShows} url="https://vimeo.com/663520150" title="all of us are dead" desc='A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected.' />
     {data.map(({ mainData, title }, index) => (
      <MovieRows data= {mainData} title={title} key={index} />
     ))}
      </div>
    </Layout>
  ) 
}  

export default Home

// export async function getServerSideProps() {
//   const key = process.env.API_KEY
//   const nowplaying = await fetchData('https://api.themoviedb.org/3/movie/now_playing', key, 'GET')
//   const popular = await fetchData('https://api.themoviedb.org/3/movie/popular', key, 'GET')
//   const tvPopular = await fetchData('https://api.themoviedb.org/3/tv/popular', key, 'GET')

//   return {
//     props:{
//       data: [
//         {
//           mainData: nowplaying.results,
//           title: "Now Playing"
//         },
//         {
//           mainData: popular.results,
//           title: "Popular"
//         },
//         {
//           mainData: tvPopular.results,
//           title: "Popluar TV Dramas"
//         }
//       ],
//     }
//   }
// }
