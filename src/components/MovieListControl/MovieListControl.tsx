import React, { FC } from "react";
import { NameHeader, PanelHead, ControlDiv } from "./style";
import { IMovieListControlProps } from "./types";
import rowIcon from "@media/row.svg";
import blockIcon from "@media/block.svg";
import IconedButton from "@components/IconedButton";

const MovieListControl: FC<IMovieListControlProps> = ({
  title,
  isBlockView,
  toggleView,
  children,
}) => {
  return (
    <PanelHead>
      <NameHeader>{title}</NameHeader>
      <ControlDiv>
        {children}
        <IconedButton
          disabled={!isBlockView}
          indents="3px"
          colorInvert
          src={rowIcon}
          onClick={toggleView}
        />
        <IconedButton
          disabled={isBlockView}
          indents="3px"
          colorInvert
          src={blockIcon}
          onClick={toggleView}
        />
      </ControlDiv>
    </PanelHead>
  );
};

export default MovieListControl;
