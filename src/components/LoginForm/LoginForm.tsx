import React, { FC, useState } from "react";
import { FlexColGroup, StyledForm } from "./style";

import Button from "../UI/Button";
import Label from "../UI/Label";

import { localStorageApiVerifyUser } from "../../utils/localStorageAPI";
import { useUserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import { SignInError } from "../../consts/errConsts";
import FormInput from "../FormInput/FormInput";

interface SignInFormControlCollection extends HTMLFormControlsCollection {
  login: HTMLInputElement;
  password: HTMLInputElement;
}

interface SignInFormElements extends HTMLFormElement {
  readonly elements: SignInFormControlCollection;
}

const LoginForm: FC = () => {
  const [signInError, setSignInError] = useState<string[]>([]);
  const { approveUser } = useUserContext();
  const history = useHistory();

  const formSubmitHandler = (event: React.FormEvent<SignInFormElements>) => {
    event.preventDefault();
    setSignInError([]);
    const login: string = event.currentTarget.elements.login.value;
    const password: string = event.currentTarget.elements.password.value;
    validateUser(login, password);
  };

  const validateUser = (login: string, password: string): void => {
    if (login !== "" && password !== "") {
      if (localStorageApiVerifyUser(login, password)) {
        approveUser(login);
        history.replace("/");
      } else addSignInError(SignInError.WRONG_LOGOPASS_ERR);
    } else {
      login === "" && addSignInError(SignInError.EMPTY_LOGIN_ERR);
      password === "" && addSignInError(SignInError.EMPTY_PASSW_ERR);
    }
  };

  const addSignInError = (newError: SignInError): void => {
    setSignInError((prev) => [...prev, newError]);
  };

  return (
    <StyledForm onSubmit={formSubmitHandler}>
      <FlexColGroup>
        <FormInput
          id="login"
          placeholder="Enter login"
          label="Login"
          isError={signInError.indexOf(SignInError.EMPTY_LOGIN_ERR) > -1}
        />
      </FlexColGroup>

      <FlexColGroup>
        <FormInput
          id="password"
          placeholder="Enter password"
          label="Password"
          isError={signInError.indexOf(SignInError.EMPTY_PASSW_ERR) > -1}
        />
      </FlexColGroup>

      <FlexColGroup>
        <Label type="error">{signInError.join(" ")}</Label>
      </FlexColGroup>

      <FlexColGroup>
        <Button fontSize="x-large">Sign-in</Button>
      </FlexColGroup>
    </StyledForm>
  );
};

export default LoginForm;
