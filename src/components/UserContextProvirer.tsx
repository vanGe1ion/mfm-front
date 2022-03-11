import React, { FC, useEffect } from "react";
import UserContext from "../context/userContext";
import useUserAuth from "../hooks/useUserAuth";
import { localStorageApiInit } from "../utils/localStorageAPI";

const UserContextProvirer: FC = ({ children }) => {
  const currentUserIdLocal: string | null =
    localStorage.getItem("currentUserId");
  const { currentUser, approveUser, dismissUser } =
    useUserAuth(currentUserIdLocal);
    
  useEffect(() => {
    localStorageApiInit();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, approveUser, dismissUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvirer;
