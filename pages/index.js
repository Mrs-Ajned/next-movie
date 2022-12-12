import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "../components/hero";
import Loader from "../components/loader";
import Movie from "../components/movei";
import { getNewMovies } from "../services/movie.service";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState([]);

  useEffect(async () => {
    setLoad(true);
    const { data } = await getNewMovies();
    setLoad(false);
    setMovies([...data]);
  }, []);

  return (
    <>
      <Head>
        <title>PcariMovie</title>
        <meta
          name="Pcari Movies"
          content="Find information about movies shown in cinemas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <h1 className="text-7xl font-bold">
          Find your movies
          <br /> here!
        </h1>
        <p className="font-light mt-8">
          Explore our gallery full of exciting films from all around the globe
          <br />
          only your yor entertainments. No hidden charges or disturbing ads.
        </p>
      </Hero>

      <div className="container p-2 md:p-0  mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl text-white my-28">New Releases</h2>
          <h6 className="text-yellowsh cursor-pointer">View More</h6>
        </div>

        {load ? (
          <Loader />
        ) : (
          <div className="grid gird-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {movies.map((movie, i) => (
              <Movie
                key={movie.Movie_ID}
                movie={movie}
                extend={i === 0 ? true : false}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
