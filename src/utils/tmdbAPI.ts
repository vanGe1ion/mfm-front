import axios from "axios";
import { TMDBAPIKey } from "../config";
import {
  GetGenresResponse,
  GetMoviesParams,
  GetMoviesResponse,
} from "../types";
import {
  toMoviesAPIRequestParams,
  toGetMoviesResponse,
} from "./APITypeConverter";

const movieDBClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: TMDBAPIKey,
    language: "ru-RU",
  },
});

export const tmdbGetGenres = async (): Promise<GetGenresResponse> => {
  const response = await movieDBClient.get("/genre/movie/list");
  return response.data;
};

export const tmdbGetDiscover = async (
  getMoviesParams: GetMoviesParams
): Promise<GetMoviesResponse> => {
  const APIRequestParams = toMoviesAPIRequestParams(getMoviesParams);
  const response = await movieDBClient.get("/discover/movie", {
    params: APIRequestParams,
  });
  return toGetMoviesResponse(response.data);
};
