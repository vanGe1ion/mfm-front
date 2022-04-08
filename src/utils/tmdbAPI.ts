import axios from "axios";
import { TMDBAPIKey } from "../config";
import {
  IGetGenresResponse,
  IGetMoviesParams,
  IGetMoviesResponse,
} from "../types";
import {
  toMoviesAPIRequestParams,
  toIGetMoviesResponse,
} from "./APITypeConverter";

const movieDBClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: TMDBAPIKey,
    language: "en-EN",
  },
});

export const tmdbGetGenres = async (): Promise<IGetGenresResponse> => {
  const response = await movieDBClient.get("/genre/movie/list");
  return response.data;
};

export const tmdbGetDiscover = async (
  IGetMoviesParams: IGetMoviesParams
): Promise<IGetMoviesResponse> => {
  const APIRequestParams = toMoviesAPIRequestParams(IGetMoviesParams);
  const response = await movieDBClient.get("/discover/movie", {
    params: APIRequestParams,
  });
  return toIGetMoviesResponse(response.data);
};
