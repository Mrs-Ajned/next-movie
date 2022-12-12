import axios from "axios";

axios.defaults.baseURL =
  "https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/";

export const getNewMovies = async () => {
  const { data } = await axios.get("new_movies/?r_date=2020-01-01");

  return data;
};

export const searchMovieByDate = async (theater, date) => {
  const { data } = await axios.get(`specific_movie_theater?
                                        theater_name=${theater}
                                        &d_date=${date}
  `);

  return data;
};

export const searchMovieByTime = async (theater, start, end) => {
  const { data } = await axios.get(`specific_movie_theater?
                                        theater_name=${theater}
                                        &time_start=${start}
                                        &time_end=${end}
  `);

  return data;
};
