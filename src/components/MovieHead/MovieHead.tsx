import { MovieTitle, YearSpan } from "@globalStyle";
import React, { FC } from "react";
import { IMovieHeadProps } from "./types";

const MovieHead: FC<IMovieHeadProps> = ({
  title,
  releaseYear,
  titleSize,
  yearSize,
}) => {
  return (
    <MovieTitle fontSize={titleSize}>
      {title}{" "}
      {releaseYear && <YearSpan fontSize={yearSize}>({releaseYear})</YearSpan>}
    </MovieTitle>
  );
};

export default MovieHead;
