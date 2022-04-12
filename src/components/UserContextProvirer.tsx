import React, { FC, useEffect } from "react";
import UserContext from "@context/userContext";
import useUserAuth from "@hooks/useUserAuth";
import { LSAPIGetSignedInUser, LSAPIInit } from "@utils/localStorageAPI";

const UserContextProvirer: FC = ({ children }) => {
  const currentUserIdLocal = LSAPIGetSignedInUser();
  const { currentUser, approveUser, dismissUser } =
    useUserAuth(currentUserIdLocal);

  useEffect(() => {
    LSAPIInit();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, approveUser, dismissUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvirer;
