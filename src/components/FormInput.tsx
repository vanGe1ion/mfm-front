import React, { FC } from "react";
import Input from "./UI/Input";
import Label from "./UI/Label";

interface IFormInputProps {
  id: string;
  placeholder?: string;
  isError?: boolean;
}

const FormInput: FC<IFormInputProps> = ({ id, placeholder, isError }) => {
  return (
    <>
      <Label htmlFor={id}>{id[0].toUpperCase() + id.slice(1)}</Label>
      <Input id={id} placeholder={placeholder} name={id} isError={isError} />
    </>
  );
};

export default FormInput;
