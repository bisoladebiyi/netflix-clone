import type { NextPage } from 'next'
import { fetchData } from '../../utils/requests'
import Layout from '../components/layout/layout'
import MovieRows from '../components/movieRows'

interface Props{
  nowPlaying: any,
  popular:any
}
const Home: NextPage<Props>= ({ popular, nowPlaying}) => {
  return (
    <Layout activePage='Home'>
     <div>
     <MovieRows data= {nowPlaying} title="Trending Now" />
     <MovieRows data= {popular} title="Comedies" />
        
      </div>
    </Layout>
  ) 
} 

export default Home

export async function getServerSideProps() {
  const key = process.env.API_KEY
  const nowplaying = await fetchData('https://api.themoviedb.org/3/movie/now_playing', key, 'GET')
  const popular = await fetchData('https://api.themoviedb.org/3/movie/now_playing', key, 'GET')
  return {
    props:{
      nowPlaying: nowplaying.results,
      popular: popular.results
    }
  }
}
