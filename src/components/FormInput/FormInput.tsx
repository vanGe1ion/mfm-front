import React, { FC } from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";
import { IFormInputProps } from "./types";



const FormInput: FC<IFormInputProps> = ({
  id,
  placeholder,
  isError,
  label,
}) => {
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input id={id} placeholder={placeholder} name={id} isError={isError} />
    </>
  );
};

export default FormInput;
