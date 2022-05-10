import { useState } from "react";
import { IUserContext } from "@globalTypes";
import { IUser } from "@globalTypes";

const useUserAuth = (initial: IUser | null): IUserContext => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(initial);

  const approveUser = (newUser: IUser): void => {
    setCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
  };

  const dismissUser = (): void => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return { currentUser, approveUser, dismissUser };
};

export default useUserAuth;
