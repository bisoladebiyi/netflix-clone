/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/layout";
import Loader from "../../components/loader";
import MovieRows from "../../components/movieRows";
import { getTVHeaderShows, getTVSectionOne, getTVSectionTwo } from "../../redux/features/tvPageSlice";


interface Props {
  data: [any];
  topRated: any;
}
const TVShows: NextPage<Props> = () => {
  const { headerShows, sectionOne, sectionTwo } = useSelector(
    (store: any) => store.tvPage
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true)
  const PageHeader = dynamic(() => import("../../components/pageHeader"), {
    ssr: false,
  });
  useEffect(() => {
    dispatch(getTVHeaderShows());
    dispatch(getTVSectionOne());
    dispatch(getTVSectionTwo());
  }, []);
  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false)
    }, 1000)
  },[])

  const data = [
    {
      mainData: sectionOne,
      title: "Populat TV Dramas",
    },
    {
      mainData: sectionTwo,
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
          data={headerShows}
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