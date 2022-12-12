export default function Movie({ movie, extend }) {
  return (
    <div
      key={movie.Movie_ID}
      className={extend === true ? "xl:col-span-2" : ""}
    >
      <div
        style={{
          backgroundImage: `url(${movie.Poster})`,
          backgroundRepeat: "no-repeat",
        }}
        className={`h-96 ${extend ? "bg-cover xl:bg-fill" : "bg-cover"} bg-top`}
      >
        <div className="flex flex-col justify-between bg-gradient-to-b from-body/30 via-black/40 to-black/90  h-full w-full p-4 text-white">
          <p className="bg-yellowsh rounded-lg px-2 w-fit text-body">
            {movie.Genre}
          </p>
          <div>
            <div className="flex text-gray-400 my-4 text-sm">
              <img
                src="/imgs/Group.png"
                width={20}
                height={20}
                className="mr-1"
              />
              <span>{movie.Duration}</span>
              <img
                src="/imgs/Eye.png"
                width={20}
                height={20}
                className="mr-1 ml-3"
              />
              <span>{movie.Views}</span>
            </div>
            <p className="text-5xl font-semibold truncate">{movie.Title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
