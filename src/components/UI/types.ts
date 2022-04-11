export interface IButtonProps extends IChangeableIndents {
  fontSize?: string;
  icon?: string;
}

export interface IInputProps extends IChangeableIndents {
  isError?: boolean;
}

export interface ILabelProps {
  type?: string;
}

export interface IChangeableIndents {
  indents?: string;
}

export interface IGenreProps {
  checked?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface IIconProps{
  colorInvert?: boolean;
  disabled?: boolean;
}