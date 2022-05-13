import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { Field, Form } from "react-final-form";
import { FORM_ERROR } from "final-form";

import { IFormValues, ISignInResp, ISignInVars } from "./types";
import { FlexColGroup, StyledForm } from "./style";
import { signInValidateHandler } from "./validator";

import Button from "@UI/Button";
import Label from "@UI/Label";
import FormInput from "@components/FormInput";
import { useUserContext } from "@context/userContext";
import { useLazyQuery } from "@apollo/client";
import { SIGN_IN } from "@queries/auth";

const LoginForm: FC = () => {
  const { approveUser } = useUserContext();
  const history = useHistory();
  const [signIn, { loading }] = useLazyQuery<ISignInResp, ISignInVars>(SIGN_IN);

  const signInSubmitHandler = async (values: IFormValues) => {
    try {
      const signingIn = await signIn({
        variables: { signInDto: values },
      });
      await approveUser(signingIn.data!.signIn.access_token);
      history.replace("/");
    } catch (error: any) {
      return { [FORM_ERROR]: error.message };
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
