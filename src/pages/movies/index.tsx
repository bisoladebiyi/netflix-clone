/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/layout";
import MovieRows from "../../components/movieRows";
import {
  getMovieHeaderShows,
  getMovieSectionOne,
  getMovieSectionTwo,
} from "../../redux/features/moviePageSlice";

interface Props {
  data: [any];
  topRated: any;
}
const Movies: NextPage<Props> = () => {
  const { headerShows, sectionOne, sectionTwo } = useSelector(
    (store: any) => store.moviePage
  );
  const dispatch = useDispatch();
  const PageHeader = dynamic(() => import("../../components/pageHeader"), {
    ssr: false,
  });
  useEffect(() => {
    dispatch(getMovieHeaderShows());
    dispatch(getMovieSectionOne());
    dispatch(getMovieSectionTwo());
  }, []);

  const data = [
    {
      mainData: sectionOne,
      title: "Now Playing",
    },
    {
      mainData: sectionTwo,
      title: "Popular",
    },
  ];

  return (
    <Layout activePage="Movies">
      <div>
        <PageHeader
          year={2021}
          text="Top Rated Movies"
          score={6.7}
          data={headerShows}
          url="https://vimeo.com/537102063"
          title="army of the dead"
          desc="After a zombie outbreak in Las Vegas, a group of mercenaries takes the ultimate gamble by venturing into the quarantine zone for the greatest heist ever."
        />
        {data?.map(({ mainData, title }, index) => (
          <MovieRows data={mainData} title={title} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Movies;
// export async function getServerSideProps() {
//     const key = process.env.API_KEY
//     const nowplaying = await fetchData('', key, 'GET')
//     const popular = await fetchData('', key, 'GET')
//     const toprated = await fetchData('', key, 'GET')
//     return {
//       props:{
//           data: [
//             {
//               mainData: nowplaying.results,
//               title: "Now Playing"
//             },
//             {
//               mainData: popular.results,
//               title: "Popular"
//             }
//           ],
//           topRated: toprated.results
//         }
//     }
// }
