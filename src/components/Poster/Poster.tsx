import { RoundedImg } from "@components/Poster/style";
import React, { FC } from "react";
import { IPosterProps } from "./types";
import noposterPath from "@media/noposter.png";
import { TMDB_IMAGE_HOST } from "@config";

const Poster: FC<IPosterProps> = ({ posterPath }) => {
  return (
    <RoundedImg
      src={posterPath ? TMDB_IMAGE_HOST + posterPath : noposterPath}
      alt="movie poster"
    ></RoundedImg>
  );
};

export default Poster;
