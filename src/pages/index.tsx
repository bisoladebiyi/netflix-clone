import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import MovieRows from "../components/movieRows";
import Loader from "../components/loader";
import {
  useGetHeaderShowsQuery,
  useGetHomeSectionOneQuery,
  useGetHomeSectionThreeQuery,
  useGetHomeSectionTwoQuery,
} from "../redux/features/filmApiSlice";

const Home: NextPage = () => {
  const { data: headerShows } = useGetHeaderShowsQuery();
  const { data: sectionOne } = useGetHomeSectionOneQuery();
  const { data: sectionTwo } = useGetHomeSectionTwoQuery();
  const { data: sectionThree } = useGetHomeSectionThreeQuery();

  const [loading, setLoading] = useState<boolean>(true);
  const PageHeader = dynamic(() => import("../components/pageHeader"), {
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
    {
      mainData: sectionThree?.results,
      title: "Popluar TV Dramas",
    },
  ];
  return (
    <Layout activePage="Home">
      <div>
        <PageHeader
          text="TV Shows"
          year={2022}
          score={8.5}
          data={headerShows?.results}
          url="https://vimeo.com/663520150"
          title="all of us are dead"
          desc="A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected."
        />
        {data.map(({ mainData, title }, index) => (
          <MovieRows data={mainData} title={title} key={index} />
        ))}
        {loading && <Loader />}
      </div>
    </Layout>
  );
};

export default Home;
