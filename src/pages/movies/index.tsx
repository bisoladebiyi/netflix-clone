/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { fetchData } from '../../../utils/requests'
import Layout from '../../components/layout/layout'
import MovieRows from '../../components/movieRows'
import PageHeader from '../../components/pageHeader'

interface Props{
    nowPlaying: any,
    popular:any
  }
const Movies: NextPage<Props>  = ({ nowPlaying, popular }) => {
   return (
   <Layout activePage='Movies'>
 <div>
 <PageHeader data={popular} forSection="header" />
     <MovieRows data= {nowPlaying} title="Now Playing" />
     <MovieRows data= {popular} title="Popular Movies" />
        
      </div>
   </Layout>
  )
}

export default Movies
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


