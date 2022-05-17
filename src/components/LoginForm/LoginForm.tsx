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
import { ApolloError, useApolloClient, useQuery } from "@apollo/client";
import { SIGN_IN } from "@queries/auth";
import LocalStorageToken from "@utils/localStorageToken";
import { useTranslation } from "react-i18next";

const LoginForm: FC = () => {
  const history = useHistory();
  const { loading, refetch: signIn } = useQuery<ISignInResp, ISignInVars>(
    SIGN_IN,
    { skip: true }
  );
  const apolloClient = useApolloClient();
  const { t } = useTranslation();

  useEffect(() => {
    if (LocalStorageToken.get()) history.push("/");
  }, []);

  const signInSubmitHandler = async (values: IFormValues) => {
    try {
      const signingIn = await signIn({
        signInDto: values,
      });
      console.log(signingIn);
      LocalStorageToken.set(signingIn.data!.login.accessToken);
      await apolloClient.resetStore();
      history.push("/");
    } catch (error: any) {
      const errorType = error.graphQLErrors[0].extensions.code;
      return { [FORM_ERROR]: errorType };
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
              placeholder={t("loginForm.loginPlaceholder")}
              label={t("loginForm.loginLabel")}
            />
          </FlexColGroup>

          <FlexColGroup>
            <Field<string>
              name="password"
              component={FormInput}
              type="password"
              id="password"
              placeholder={t("loginForm.passwordLabel")}
              label={t("loginForm.passwordLabel")}
            />
          </FlexColGroup>

          {submitError && !modifiedSinceLastSubmit && (
            <FlexColGroup>
              <Label withLeftPadding type="error">
                {t(`loginForm.errors.submit.${submitError}`)}
              </Label>
            </FlexColGroup>
          )}

          <FlexColGroup>
            <Button disabled={loading} indents="4px" fontSize="x-large">
              {t("loginForm.submitBtn")}
            </Button>
          </FlexColGroup>
        </StyledForm>
      )}
    </Form>
  );
};

export default LoginForm;
