import React, { FC } from "react";
import UserContext from "@context/userContext";
import useUserAuth from "@hooks/useUserAuth";

const UserContextProvider: FC = ({ children }) => {
  const { currentUser, approveUser, dismissUser } = useUserAuth();

  return (
    <UserContext.Provider value={{ currentUser, approveUser, dismissUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
