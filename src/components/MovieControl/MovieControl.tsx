import React, { FC } from "react";
import Button from "../UI/Button";
import { NameHeader, PanelHead, ControlDiv } from "./style";
import rowIcon from "./row.png";
import blockIcon from "./blocks.png";
import IconedButton from "../IconedButton";
import { IMovieControlProps } from "./types";

const MovieControl: FC<IMovieControlProps> = ({
  view,
  setView,
}) => {
  const toggleViewHandler = () => {
    setView((prev) => (prev === "row" ? "block" : "row"));
  };

  return (
    <PanelHead>
      <NameHeader>Favourite movies list</NameHeader>
      <ControlDiv>
        <Button indents="3px">Add from catalog</Button>
        <IconedButton
          disabled={view === 'row'}
          indents="3px"
          colorInvert
          src={rowIcon}
          onClick={toggleViewHandler}
        />
        <IconedButton
          disabled={view === 'block'}
          indents="3px"
          colorInvert
          src={blockIcon}
          onClick={toggleViewHandler}
        />
      </ControlDiv>
    </PanelHead>
  );
};

export default MovieControl;
