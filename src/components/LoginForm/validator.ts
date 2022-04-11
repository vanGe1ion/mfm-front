import { SignInError } from "@consts/errConsts";
import { IFormValues } from "./types";

const required = (value: any) => (value ? undefined : SignInError.FIELD_REQUIRED_ERR)

export const signInValidateHandler = (values: IFormValues) => {
  const errors: { login?: string; password?: string } = {};

  errors.login = required(values.login);
  errors.password = required(values.password);

  return errors;
};