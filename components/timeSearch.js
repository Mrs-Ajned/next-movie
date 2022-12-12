import { useContext, useState } from "react";
import { searchMovieByTime } from "../services/movie.service";
import { SetterContext } from "../pages/search";

export default function TimeSearch() {
  const [theater, setTheater] = useState("");
  const [dateStart, setStartDate] = useState("");
  const [dateEnd, setEndDate] = useState("");

  const {movieSetter, loadSetter} = useContext(SetterContext)

  const theaterHandler = (e) => setTheater(e.target.value);
  const dateStartHandler = (e) => setStartDate(e.target.value);
  const dateEndHandler = (e) => setEndDate(e.target.value);
  const searchHandler = async (e) => {
    loadSetter(true);
    window.scrollTo({
      behavior: "smooth",
      top: 800,
    });

    const { data } = await searchMovieByTime(theater, dateStart, dateEnd);
    loadSetter(false);

    if (data) movieSetter(data);
  };
  return (
    <div className="ml-6">
      <h2 className="font-semibold text-4xl">Search your movies here!</h2>
      <div className="w-2/3 my-4  text-black">
        <div className="relative w-full  my-4">
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

        <div className="w-full flex flex-wrap justify-between md:flex-nowrap">
          <input
            className="p-3 rounded-lg mr-1 w-full mt-4 md:mt-0"
            type={"datetime-local"}
            placeholder="23/12/2021"
            onChange={dateStartHandler}
          />
          <input
            className="p-3 rounded-lg w-full mt-4 md:mt-0"
            type={"datetime-local"}
            placeholder="23/12/2021"
            onChange={dateEndHandler}
          />
        </div>
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
