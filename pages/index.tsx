import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import { Movie } from "../typings";
import requests from "../utils/requests";

interface Props {
  netflixOriginals: Movie[];
  trending: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  trending,
  netflixOriginals,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
 documentaries
}: Props) => {
  
  return (
    <div className=" relative h-screen bg-gradient-to-b from-gray-500/10 to-[#010511] lg:h-[140vh] ">
      <Head>
        <title>FAKEFLIX | HOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className=" relative lg:pl-16 pl-4 pb-24 lg:space-x-24 ">
        <Banner netflixOriginals={netflixOriginals} />
        <section>
          <Row title='Trending' movie={trending}/>
          <Row title='Rop Rated' movie={topRated}/>
          <Row title='Action Movies' movie={actionMovies}/>
          <Row title='Comedy Movies' movie={comedyMovies}/>
          <Row title='Horror Movies' movie={horrorMovies}/>
          <Row title='Romance Movies' movie={romanceMovies}/>
          <Row title='Documentaries' movie={documentaries}/>
        </section>
      </main>
      {/* <Modal/> */}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    trending,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trending: trending.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
