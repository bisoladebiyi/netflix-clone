import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { fetchData } from '../../utils/requests'
import Layout from '../components/layout/layout'
import MovieRows from '../components/movieRows'
// import PageHeader from '../components/pageHeader'

interface Props{
  nowPlaying: any,
  popular:any
}
const Home: NextPage<Props>= ({ popular, nowPlaying}) => {
  const PageHeader = dynamic(() => import("../components/pageHeader"), {
    ssr: false,
    });
  return (
    <Layout activePage='Home'>
     <div>
     <PageHeader data={popular} forSection="header" />
     <MovieRows data= {nowPlaying} title="Trending Now" />
     <MovieRows data= {popular} title="Popular" />
        
      </div>
    </Layout>
  ) 
} 

export default Home

export async function getServerSideProps() {
  const key = process.env.API_KEY
  const nowplaying = await fetchData('https://api.themoviedb.org/3/movie/now_playing', key, 'GET')
  const popular = await fetchData('https://api.themoviedb.org/3/movie/popular', key, 'GET')
  return {
    props:{
      nowPlaying: nowplaying.results,
      popular: popular.results
    }
  }
}
