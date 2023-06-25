/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import Loader from "../../components/loader";
import MovieRows from "../../components/movieRows";
import {
  useGetMovieHeaderShowsQuery,
  useGetMovieSectionOneQuery,
  useGetMovieSectionTwoQuery,
} from "../../redux/features/filmApiSlice";

const Movies: NextPage = () => {
  const { data: headerShows } = useGetMovieHeaderShowsQuery();
  const { data: sectionOne } = useGetMovieSectionOneQuery();
  const { data: sectionTwo } = useGetMovieSectionTwoQuery();

  const [loading, setLoading] = useState<boolean>(true);

  const PageHeader = dynamic(() => import("../../components/pageHeader"), {
    ssr: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const data = [
    {
      mainData: sectionOne?.results,
      title: "Now Playing",
    },
    {
      mainData: sectionTwo?.results,
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
          data={headerShows?.results}
          url="https://vimeo.com/537102063"
          title="army of the dead"
          desc="After a zombie outbreak in Las Vegas, a group of mercenaries takes the ultimate gamble by venturing into the quarantine zone for the greatest heist ever."
        />
        {data?.map(({ mainData, title }, index) => (
          <MovieRows data={mainData} title={title} key={index} />
        ))}
        {loading && <Loader />}
      </div>
    </Layout>
  );
};

export default Movies;
