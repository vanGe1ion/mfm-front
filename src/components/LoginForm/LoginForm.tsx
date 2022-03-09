import React, { FC, FormEvent } from "react";
import { FlexColGroup, StyledForm } from "./LoginForm.style";
import FormInput from "../UI/FormInput";
import Button from "../UI/Button";
import Label from "../UI/Label";
import LabelError from "../UI/LabelError";

const LoginForm: FC = () => {
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.elements);
  };

  return (
    <StyledForm onSubmit={formSubmitHandler}>
      <FlexColGroup>
        <Label htmlFor="login">Login</Label>
        <FormInput name="login" id="login" placeholder="Enter login" />
      </FlexColGroup>

      <FlexColGroup>
        <Label htmlFor="password">Password</Label>
        <FormInput id="password" placeholder="Enter password" name="password" />
      </FlexColGroup>

      <FlexColGroup>
        <LabelError>{null}</LabelError>
      </FlexColGroup>

      <FlexColGroup>
        <Button>Sign-in</Button>
      </FlexColGroup>
    </StyledForm>
  );
};

export default LoginForm;
