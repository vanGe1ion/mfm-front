import React, { FC } from "react";
import { FieldRenderProps } from "react-final-form";

import Input from "@UI/Input";
import Label from "@UI/Label";

const FormInput: FC<FieldRenderProps<string, any>> = ({
  input,
  meta,
  ...rest
}) => {
  const { id, label, placeholder } = rest;

  return (
    <>
      {label && (
        <Label withLeftPadding htmlFor={id}>
          {label}
        </Label>
      )}
      <Input
        indents="4px"
        {...input}
        id={id}
        isError={meta.touched && meta.error}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && (
        <Label withLeftPadding type="error">
          {meta.error}
        </Label>
      )}
    </>
  );
};

export default FormInput;
