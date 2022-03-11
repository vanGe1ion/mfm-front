import { useState } from "react";
import { IUserContext } from "../types";

const useUserAuth = (initial: string | null): IUserContext => {
  const [currentUser, setCurrentUser] = useState<string | null>(initial);

  const approveUser = (newUser: string): void => {
    setCurrentUser(newUser);
    localStorage.setItem("currentUserId", newUser);
  };

  const dismissUser = (): void => {
    setCurrentUser(null);
    localStorage.removeItem("currentUserId");
  };

  return { currentUser, approveUser, dismissUser };
};

export default useUserAuth;
