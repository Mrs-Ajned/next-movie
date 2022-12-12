import { useState, useContext } from "react";
import { searchMovieByDate } from "../services/movie.service";
import { SetterContext } from "../pages/search";

export default function DateSearch() {
  const [theater, setTheater] = useState("");
  const [date, setDate] = useState("");

  const { movieSetter, loadSetter } = useContext(SetterContext);

  const theaterHandler = (e) => setTheater(e.target.value);
  const dateHandler = (e) => setDate(e.target.value);
  const searchHandler = async (e) => {
    loadSetter(true);
    window.scrollTo({
      behavior: "smooth",
      top: 800,
    });

    const { data } = await searchMovieByDate(theater, date);
    loadSetter(false);

    if (data) movieSetter(data);
  };
  return (
    <div className="ml-6">
      <h2 className="font-semibold text-4xl">Search your movies here!</h2>
      <div className="w-2/3 my-4 flex flex-wrap md:flex-nowrap justify-between text-black">
        <div className="relative w-full md:w-4/6 mr-4">
          <img
            src="/imgs/search.png"
            alt="search"
            className="absolute top-3 left-4"
          />
          <input
            className="w-full p-3 pl-12 rounded-lg"
            placeholder="Search by theatre...."
            onChange={theaterHandler}
          />
        </div>

        <input
          className="p-3 rounded-lg w-4/6 md:w-max mt-4 md:mt-0"
          type={"date"}
          placeholder="23/12/2021"
          onChange={dateHandler}
        />
      </div>

      <button
        className="bg-yellowsh text-black text-xl py-2 px-6 rounded-xl"
        onClick={searchHandler}
      >
        Search
      </button>
    </div>
  );
}
