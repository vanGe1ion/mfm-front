import React, { FC } from "react";
import { NameHeader, PanelHead, ControlDiv } from "./style";
import { IMovieControlProps } from "./types";
import rowIcon from "./row.svg";
import blockIcon from "./block.svg";

import Button from "@UI/Button";
import IconedButton from "@components/IconedButton";

const MovieControl: FC<IMovieControlProps> = ({
  isBlockView,
  setIsBlockView,
}) => {
  const toggleViewHandler = () => {
    setIsBlockView((prev) => !prev);
  };

  return (
    <PanelHead>
      <NameHeader>Favourite movies list</NameHeader>
      <ControlDiv>
        <Button indents="3px">Add from catalog</Button>
        <IconedButton
          disabled={!isBlockView}
          indents="3px"
          colorInvert
          src={rowIcon}
          onClick={toggleViewHandler}
        />
        <IconedButton
          disabled={isBlockView}
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
