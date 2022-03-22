import { discoverRequestParams } from "../types";
import { axiosGet } from "./axiosUtils";

interface commonRequestParams {
  api_key: string | undefined;
  language?: string;
}

const defaultParams: commonRequestParams = {
  api_key: process.env.REACT_APP_TMDB_API_KEY,
  language: "ru-RU",
};

export const tmdbGetGenres = async (success: (data: any) => void) => {
  await axiosGet(
    "https://api.themoviedb.org/3/genre/movie/list",
    defaultParams,
    success
  );
};

export const tmdbGetDiscover = async (
  discoverParams: discoverRequestParams,
  success: (data: any) => void
) => {
  await axiosGet(
    "https://api.themoviedb.org/3/discover/movie",
    {
      ...defaultParams,
      ...discoverParams,
    },
    success
  );
};
