import React, { FC } from "react";
import { FlexColGroup, StyledForm } from "./style";
import Button from "../UI/Button";
import Label from "../UI/Label";
import FormInput from "../FormInput/FormInput";

import { Field, Form } from "react-final-form";
import { signInValidateHandler } from "./validator";
import { FORM_ERROR } from "final-form";
import { LSAPIVerifyUser } from "../../utils/localStorageAPI";
import { useHistory } from "react-router-dom";
import { SignInError } from "../../consts/errConsts";
import { useUserContext } from "../../context/userContext";
import { IFormValues } from "./types";

const LoginForm: FC = () => {
  const { approveUser } = useUserContext();
  const history = useHistory();

  const signInSubmitHandler = (values: IFormValues) => {
    const { login, password } = values;
    if (LSAPIVerifyUser(login, password)) {
      approveUser(login);
      history.replace("/");
    } else return { [FORM_ERROR]: SignInError.WRONG_LOGOPASS_ERR };
  };

  return (
    <Form onSubmit={signInSubmitHandler} validate={signInValidateHandler}>
      {({ handleSubmit, submitError, modifiedSinceLastSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <FlexColGroup>
            <Field<string>
              name="login"
              component={FormInput}
              id="login"
              placeholder="Enter login"
              label="Login"
            />
          </FlexColGroup>

          <FlexColGroup>
            <Field<string>
              name="password"
              component={FormInput}
              type="password"
              id="password"
              placeholder="Enter password"
              label="Password"
            />
          </FlexColGroup>

          {submitError && !modifiedSinceLastSubmit && (
            <FlexColGroup>
              <Label type="error">{submitError}</Label>
            </FlexColGroup>
          )}

          <FlexColGroup>
            <Button indents="4px" fontSize="x-large">
              Sign-in
            </Button>
          </FlexColGroup>
        </StyledForm>
      )}
    </Form>
  );
};

export default LoginForm;
