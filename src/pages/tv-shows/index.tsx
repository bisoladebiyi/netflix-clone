/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import Loader from "../../components/loader";
import MovieRows from "../../components/movieRows";
import {
  useGetTVHeaderShowsQuery,
  useGetTVSectionOneQuery,
  useGetTVSectionTwoQuery,
} from "../../redux/features/filmApiSlice";

const TVShows: NextPage = () => {
  const { data: headerShows } = useGetTVHeaderShowsQuery();
  const { data: sectionOne } = useGetTVSectionOneQuery();
  const { data: sectionTwo } = useGetTVSectionTwoQuery();

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
      title: "Populat TV Dramas",
    },
    {
      mainData: sectionTwo?.results,
      title: "On Air",
    },
  ];

  return (
    <Layout activePage="TV Shows">
      <div>
        <PageHeader
          year={2021}
          text="Top Rated TV Shows"
          score={6.7}
          data={headerShows?.results}
          url="https://vimeo.com/487524775"
          title="Money Heist"
          desc="Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."
        />
        {data?.map(({ mainData, title }, index) => (
          <MovieRows data={mainData} title={title} key={index} />
        ))}
        {loading && <Loader />}
      </div>
    </Layout>
  );
};

export default TVShows;
