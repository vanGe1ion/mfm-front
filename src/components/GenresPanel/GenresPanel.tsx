import React, { FC, useEffect } from "react";
import Genre from "@UI/Genre";
import useGenres from "@hooks/useGenres";
import { IGenresPanelProps } from "./types";
import BorderedSegment from "@components/BorderedSegment/BorderedSegment";
import { IGetMoviesParams } from "@globalTypes";

const GenresPanel: FC<IGenresPanelProps> = ({
  filters,
  onChange,
  isSaveMode,
}) => {
  const { genres, toggleFavouriteGenre } = useGenres(isSaveMode);

  useEffect(() => {
    onChange &&
      onChange({
        ...filters,
        withGenres: getCheckedGenresIds(),
      } as IGetMoviesParams);
  }, [genres]);

  const getCheckedGenresIds = () => {
    return genres.filter((genre) => genre.isFavourite).map((genre) => genre.id);
  };

  return (
    <BorderedSegment
      title="Your favourite genres"
      marginLeft="-12rem"
      width="auto"
    >
      {genres.map(({ id, isFavourite, name }) => {
        return (
          <Genre
            key={id}
            checked={isFavourite}
            onClick={() => {
              toggleFavouriteGenre(id);
            }}
          >
            {name}
          </Genre>
        );
      })}
    </BorderedSegment>
  );
};

export default GenresPanel;
