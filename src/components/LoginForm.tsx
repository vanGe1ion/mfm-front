import React, { MouseEvent, ChangeEvent, FC, useState, useEffect } from "react";
import TextInput from "./UI/TextInput";
import PasswordInput from "./UI/PasswordInput";
import ButtonFull from "./UI/ButtonFull";
import Label from "./UI/Label";
import LoginFormGroup from "./LoginFormGroup";
import LabelError from "./UI/LabelError";
import { SignInError } from "../consts/errConsts";
import { localStorageApiVerifyUser } from "../utils/localStorageAPI";
import { useUserContext } from "../context/userContext";
import { useHistory } from "react-router-dom";

const LoginForm: FC = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInError, setSignInError] = useState<string[]>([]);
  const [loginClasses, setLoginClasses] = useState<string[]>([]);
  const [passwordClasses, setPasswordClasses] = useState<string[]>([]);
  const { approveUser } = useUserContext();
  const history = useHistory();

  useEffect(() => {
    setLoginClasses(removeAlertClass);
    setPasswordClasses(removeAlertClass);
    signInError.forEach((err) => {
      switch (err) {
        case SignInError.EMPTY_LOGIN_ERR: {
          setLoginClasses(addAlertClass);
          break;
        }
        case SignInError.EMPTY_PASSW_ERR: {
          setPasswordClasses(addAlertClass);
          break;
        }
        default: {
        }
      }
    });
  }, [signInError]);

  const addAlertClass = (classArr: string[]): string[] => {
    return [...classArr, "bg-red-200"];
  };

  const removeAlertClass = (classArr: string[]): string[] => {
    if (classArr.indexOf("bg-red-200") > -1) {
      const newClasses = [...classArr];
      newClasses.splice(newClasses.indexOf("bg-red-200"), 1);
      return newClasses;
    }
    return classArr;
  };

  const addSignInError = (newError: SignInError): void => {
    setSignInError((prev) => [...prev, newError]);
  };

  const removeSignInError = (error: SignInError): void => {
    setSignInError((errList) => {
      if (errList.indexOf(error) > -1) {
        const newErrList = [...errList];
        newErrList.splice(newErrList.indexOf(error), 1);
        return newErrList;
      }
      return errList;
    });
  };

  const loginInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    removeSignInError(SignInError.EMPTY_LOGIN_ERR);
    setUser(e.target.value);
  };

  const passwordInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    removeSignInError(SignInError.EMPTY_PASSW_ERR);
    setPassword(e.target.value);
  };

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setSignInError([]);

    if (user !== "" && password !== "") {
      if (localStorageApiVerifyUser(user, password)) {
        approveUser(user);
        history.replace("/main");
      } else addSignInError(SignInError.WRONG_LOGOPASS_ERR);
    } else {
      user === "" && addSignInError(SignInError.EMPTY_LOGIN_ERR);
      password === "" && addSignInError(SignInError.EMPTY_PASSW_ERR);
    }
  };

  return (
    <form className="h-full flex flex-col justify-around text-center p-5">
      <LoginFormGroup>
        <Label htmlFor="login">Login</Label>
        <TextInput
          className={loginClasses.join(" ")}
          id="login"
          value={user}
          onChange={loginInputHandler}
          placeholder="Enter login"
        />
      </LoginFormGroup>

      <LoginFormGroup>
        <Label htmlFor="password">Password</Label>
        <PasswordInput
          className={passwordClasses.join(" ")}
          id="password"
          value={password}
          onChange={passwordInputHandler}
        />
      </LoginFormGroup>

      <LoginFormGroup>
        <LabelError>{signInError.join(" ")}</LabelError>
      </LoginFormGroup>

      <LoginFormGroup>
        <ButtonFull onClick={buttonSubmitHandler}>Confirm</ButtonFull>
      </LoginFormGroup>
    </form>
  );
};

export default LoginForm;
