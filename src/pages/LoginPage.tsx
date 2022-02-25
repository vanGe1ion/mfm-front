import React, { FC } from "react";
import LoginForm from "../components/LoginForm";
import logo from "../media/logo190.png";

const LoginPage: FC = () => {
  return (
    <div className="min-h-screen min-w-full bg-sky-100 flex flex-col">
      <div className="mx-auto mt-20">
        <img src={logo} alt="Cinema logo" />
      </div>
      <h1 className=" text-center text-5xl">My Favorite Movies Sign-In</h1>
      <div className="w-full mt-20">
        <div className="mx-auto bg-white h-80 w-1/4 border-4 border-sky-600 rounded-lg shadow-2xl">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
