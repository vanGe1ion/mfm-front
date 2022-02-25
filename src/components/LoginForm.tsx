import React, { FC } from "react";
import TextInput from "./UI/TextInput";
import PasswordInput from "./UI/PasswordInput";
import ButtonFull from "./UI/ButtonFull";
import Label from "./UI/Label";
import LoginFormGroup from "./LoginFormGroup";

const LoginForm: FC = () => {
  return (
    <form className="h-full flex flex-col justify-around text-center p-5">
      <LoginFormGroup>
        <Label htmlFor="login">Login</Label>
        <TextInput id="login" placeholder="Enter login" />
      </LoginFormGroup>

      <LoginFormGroup>
        <Label htmlFor="password">Password</Label>
        <PasswordInput id="password" />
      </LoginFormGroup>

      <LoginFormGroup>
        <span>{}</span>
      </LoginFormGroup>

      <LoginFormGroup>
        <ButtonFull>Confirm</ButtonFull>
      </LoginFormGroup>
    </form>
  );
};

export default LoginForm;
