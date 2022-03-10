import { useState } from "react";
import { IUserContext } from "../types";

const useUserAuth = () : IUserContext => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const approveUser = (newUser: string): void => {
    setCurrentUser(newUser);
    localStorage.setItem('currentUserId', newUser);
  };

  const dismissUser = (): void => {
    setCurrentUser(null);
    localStorage.removeItem('currentUserId');
  };

  return <IUserContext>{ currentUser, approveUser, dismissUser };
};

export default useUserAuth;
