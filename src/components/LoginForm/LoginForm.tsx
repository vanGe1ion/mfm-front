import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { Field, Form } from "react-final-form";
import { FORM_ERROR } from "final-form";

import { IFormValues } from "./types";
import { FlexColGroup, StyledForm } from "./style";
import { signInValidateHandler } from "./validator";

import Button from "@UI/Button";
import Label from "@UI/Label";
import FormInput from "@components/FormInput";
import { SignInError } from "@consts/errConsts";
import { useUserContext } from "@context/userContext";
import { useLazyQuery } from "@apollo/client";
import { SIGN_IN_USER } from "@queries/user";

const LoginForm: FC = () => {
  const { approveUser } = useUserContext();
  const history = useHistory();
  const [signInUser, { loading }] = useLazyQuery(SIGN_IN_USER);

  const signInSubmitHandler = async (values: IFormValues) => {
    try {
      const signingIn = await signInUser({
        variables: { signInUserDto: values },
      });
      approveUser(signingIn.data.signInUser);
      history.replace("/");
    } catch (e) {
      return { [FORM_ERROR]: SignInError.WRONG_LOGOPASS_ERR };
    }
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
              <Label withLeftPadding type="error">
                {submitError}
              </Label>
            </FlexColGroup>
          )}

          <FlexColGroup>
            <Button disabled={loading} indents="4px" fontSize="x-large">
              Sign-in
            </Button>
          </FlexColGroup>
        </StyledForm>
      )}
    </Form>
  );
};

export default LoginForm;
