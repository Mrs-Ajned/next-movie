import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import DateSearch from "../components/dateSearch";
import Hero from "../components/hero";
import Loader from "../components/loader";
import Movie from "../components/movei";
import TimeSearch from "../components/timeSearch";

export const SetterContext = createContext();

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);

  const router = useRouter();

  return (
    <>
      <Hero>
        <SetterContext.Provider
          value={{
            movieSetter: setMovies,
            loadSetter: setLoad,
          }}
        >
          {router.query.by === "time" ? <TimeSearch /> : <DateSearch />}
        </SetterContext.Provider>
      </Hero>
      <div className="container p-2 md:p-0  mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl text-white my-28">Search Results</h2>
        </div>
        {load ? (
          <Loader />
        ) : (
          <div className="grid gird-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {movies.map((movie, i) => (
              <Movie key={movie.Movie_ID} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
