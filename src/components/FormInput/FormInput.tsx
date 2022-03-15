import React, { FC } from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";
import { FieldRenderProps } from "react-final-form";

const FormInput: FC<FieldRenderProps<string, any>> = ({
  input,
  meta,
  ...rest
}) => {
  const { id, label, placeholder } = rest;

  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        indents="4px"
        {...input}
        id={id}
        isError={meta.touched && meta.error}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && <Label type="error">{meta.error}</Label>}
    </>
  );
};

export default FormInput;
