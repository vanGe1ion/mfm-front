import axios from "axios";
import { discoverRequestParams } from "../types";

interface commonRequestParams {
  api_key: string | undefined;
  language?: string;
}

const commonParams: commonRequestParams = {
  api_key: process.env.REACT_APP_TMDB_API_KEY,
  language: "ru-RU",
};

export const tmdbGetGenres = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list",
    { params: commonParams }
  );
  return response.data;
};

export const tmdbGetDiscover = async (
  discoverParams: discoverRequestParams
) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      params: {
        ...commonParams,
        ...discoverParams,
      },
    }
  );
  return response.data;
};
