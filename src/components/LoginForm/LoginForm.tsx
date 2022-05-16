import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Field, Form } from "react-final-form";
import { FORM_ERROR } from "final-form";

import { IFormValues, ISignInResp, ISignInVars } from "./types";
import { FlexColGroup, StyledForm } from "./style";
import { signInValidateHandler } from "./validator";

import Button from "@UI/Button";
import Label from "@UI/Label";
import FormInput from "@components/FormInput";
import { useApolloClient, useLazyQuery } from "@apollo/client";
import { SIGN_IN } from "@queries/auth";
import LocalStorageToken from "@utils/localStorageToken";

const LoginForm: FC = () => {
  const history = useHistory();
  const [signIn, { loading }] = useLazyQuery<ISignInResp, ISignInVars>(SIGN_IN);
  const apolloClient = useApolloClient();

  useEffect(() => {
    if (LocalStorageToken.get()) history.push("/");
  }, []);

  const signInSubmitHandler = async (values: IFormValues) => {
    try {
      const signingIn = await signIn({
        variables: { signInDto: values },
      });
      LocalStorageToken.set(signingIn.data!.signIn.accessToken);
      await apolloClient.resetStore();
      history.push("/");
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
