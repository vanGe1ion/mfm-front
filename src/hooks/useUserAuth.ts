import { useState } from "react";

const useUserAuth = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const approveUser = (newUser: string): void => {
    setCurrentUser(newUser);
    localStorage.setItem('currentUserId', newUser);
  };

  const dismissUser = (): void => {
    setCurrentUser(null);
    localStorage.removeItem('currentUserId');
  };

  return { currentUser, approveUser, dismissUser };
};

export default useUserAuth;
