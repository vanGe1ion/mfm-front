import React, { FC, useEffect } from "react";
import { UserContext } from "../context/userContext";
import useUserAuth from "../hooks/useUserAuth";
import { localStorageApiInit } from "../utils/localStorageAPI";

const UserContextProvirer: FC = ({ children }) => {
  const { currentUser, approveUser, dismissUser } = useUserAuth();

  useEffect(() => {
    localStorageApiInit();
    const approvedUser: string | null = localStorage.getItem("currentUserId");
    if (approvedUser) approveUser(approvedUser);
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, approveUser, dismissUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvirer;
