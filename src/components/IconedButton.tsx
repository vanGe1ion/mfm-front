import React, { FC } from "react";
import Button from "./UI/Button";
import Icon from "./UI/Icon";
import { IButtonProps, IIconProps } from "./UI/types";

type IIconedButton = IButtonProps &
  IIconProps & { src: string; onClick?: () => void };

const IconedButton: FC<IIconedButton> = ({
  indents,
  disabled,
  colorInvert,
  src,
  onClick,
}) => {
  return (
    <Button onClick={onClick} indents={indents} disabled={disabled}>
      <Icon disabled={disabled} colorInvert={colorInvert} src={src} />
    </Button>
  );
};

export default IconedButton;
